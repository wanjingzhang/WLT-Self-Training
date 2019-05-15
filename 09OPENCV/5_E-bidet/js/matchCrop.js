// const cv = window.require('electron').remote.require('opencv4nodejs');
const cv = window.require('opencv4nodejs');
let matchFeatures = async function({
  img1,
  img2,
  detector,
  matchFunc,
  backfn
}) {
  try {
    // console.log('start match Features');
    // detect keypoints
    let keyPoints1 = await detector.detectAsync(img1);
    let keyPoints2 = await detector.detectAsync(img2);
    // compute feature descriptors
    let descriptors1 = await detector.computeAsync(img1, keyPoints1);
    let descriptors2 = await detector.computeAsync(img2, keyPoints2);

    // match the feature descriptors
    var matches = await matchFunc(descriptors1, descriptors2);
    // only keep good matches
    let bestN = 40;
    let bestMatches = matches
      .sort((match1, match2) => match1.distance - match2.distance)
      .slice(0, bestN);
    let points1 = [],
      points2 = [];
    bestMatches.forEach(it => {
      // get left keypoints
      let p = keyPoints1[it.queryIdx].point;
      points1.push(p);
      // get right keypoints
      let p2 = keyPoints2[it.trainIdx].point;
      points2.push(p2);
    });
    if (keyPoints1.empty) {
      backfn(null);
    }
    let warp = await cv.estimateAffine2DAsync(points1, points2, cv.RANSAC);
    let warp_mat = warp['out'];
    let scalex = Number(warp_mat.at(0, 0)).toFixed(4);
    let scaley = Number(warp_mat.at(1, 1)).toFixed(4);
    let positionx = Number(warp_mat.at(0, 2)).toFixed(2);
    let positiony = Number(warp_mat.at(1, 2)).toFixed(2);
    //缩放矩阵为负数
    if (scalex <= 0 || scaley <= 0) {
      //console.log('template match: scale=' + scalex);
      backfn({ error: true });
      return;
    }
    console.log('scalex:' + scalex + 'scaley:' + scaley);
    //get unify scale.
    let step = Number(0.0001);
    let lowrange = scalex > scaley ? scaley : scalex;
    let hightrange = scalex < scaley ? scaley : scalex;
    let diff = -1;
    let finalscale = 0;
    for (
      let i = lowrange;
      i <= hightrange;
      i = (Number(i) + Number(step)).toFixed(4)
    ) {
      //template match

      // if (i.toString() === '-0.0000' || i.toString() === '0.0000') {
      //   console.log('template match: scale=' + i + ' step: ' + step);
      //   backfn({ error: true });
      //   return;
      // }

      let tempimg1 = await img1.rescaleAsync(Number(i));
      let res = await tempimg1.matchTemplateAsync(img2, cv.TM_SQDIFF_NORMED);
      let sumup = 0.0;
      for (let ti = 0; ti < res.rows; ti++) {
        for (let tj = 0; tj < res.cols; tj++) {
          sumup += res.atRaw(ti, tj);
          // console.log(res.atRaw(ti,tj));
        }
      }
      if (diff === -1) {
        diff = sumup;
        finalscale = i;
      } else if (diff > sumup) {
        diff = sumup;
        finalscale = i;
      }
      //console.log("sumup:" + sumup );

      //console.log("best scale=" + finalscale);
      //get different value scalex,y:scaley
      let obj = {
        scale: { x: finalscale, y: finalscale },
        position: { x: positionx, y: positiony }
      };

      backfn(obj);
      return;
    }
  } catch (err) {
    backfn(err);
  }
};

/**
 * @param {string} crop - 使用的切图的路径
 * @param {object} cropScale - 使用的切图的缩放值；格式：{x:0.789,y:0.789}
 * @param {string} shot - 使用的大图的路径 img1
 * @return {object} - 返回值,scale:大图的缩放值；position:缩放后的切图在大图中的位置
 * 格式：{scale:{x:0.2789,y:0.2789},position:{x:29,y:78}}
 *
 */
async function matchCrop(crop, cropscale, shot, callback) {
  try {
    //code
    let cropimg = await cv.imreadAsync(crop);
    let img2 = await cropimg.rescaleAsync(cropscale.x);
    let img1 = await cv.imreadAsync(shot);
    if (cv.xmodules.xfeatures2d) {
      matchFeatures({
        img1,
        img2,
        detector: new cv.SIFTDetector({ nFeatures: 2000 }),
        matchFunc: cv.matchFlannBasedAsync,
        backfn: obj => {
          callback(obj);
        }
      });
    } else {
      matchFeatures({
        img1,
        img2,
        detector: new cv.ORBDetector(),
        matchFunc: cv.matchBruteForceHammingAsync,
        backfn: obj => {
          callback(obj);
        }
      });
    }
    //code ++
  } catch (err) {
    callback(err);
  }
}

export default matchCrop;
