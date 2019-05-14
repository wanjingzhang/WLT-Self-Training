let imgElement = document.getElementById('imageSrc');
let inputElement = document.getElementById('fileInput');

//从文件中获取图片
inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

//图片加载时自动填充canvas
imgElement.onload = function () {
    let srcImg = cv.imread(imgElement);
    //1. 图片灰度化
    let gray = new cv.Mat();
    let binImg = new cv.Mat();
    //灰度化
    cv.cvtColor(srcImg, gray, cv.COLOR_RGBA2GRAY); 
    // cv.imshow('canvasOutput', gray);

    //2. 阈值二值化 
    cv.threshold(gray, binImg, 177, 200, cv.THRESH_BINARY);
    // cv.imshow('canvasOutput', binImg);

    //3. 检测轮廓 
    let contours = new cv.MatVector();
    let hierarchy = new cv.Mat();
    //第5个参数为CV_RETR_EXTERNAL，只检索外框   找轮廓
    cv.findContours(binImg, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_NONE);
     
    console.log(contours.size());
    for (let i = 0; i < contours.size(); i++){
        
        //需要获取的坐标  ++
        // CvPoint2D32f rectpoint[4];
        // CvBox2D rect = minAreaRect(Mat(contours[i])); 
        // cvBoxPoints(rect, rectpoint); //获取4个顶点坐标

        let tmp = new cv.Mat();
        let cnt = contours.get(i);
        let rotatedRect = cv.minAreaRect(cnt);
        console.log('rect angle:' + rotatedRect.angle);

        let rect = cv.boundingRect(tmp);
        let contoursColor = new cv.Scalar(255, 255, 255);
        let rectangleColor = new cv.Scalar(255, 0, 0);
        cv.drawContours(binImg, contours, 0, contoursColor, 1, 8, hierarchy, 100);
        let point1 = new cv.Point(rect.x, rect.y);
        let point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
        cv.rectangle(binImg, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
        cv.imshow('canvasOutput', binImg);
    }


    //4. 寻找轮廓的包围矩阵，并且获取角度
    //5. 根据角度进行旋转矫正

    // cv.imshow('canvasOutput', mat);
    gray.delete(); binImg.delete(); contours.delete(); hierarchy.delete();

};


function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}