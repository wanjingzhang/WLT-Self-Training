var imgElement = document.getElementById('imageSrc');
var inputElement = document.getElementById('fileInput');

//从文件中获取图片
// inputElement.addEventListener('change', (e) => {
//     imgElement.src = URL.createObjectURL(e.target.files[0]);
// }, false);

//图片加载时自动填充canvas Demo1. 获取图片边缘
// imgElement.onload = checkContours;
var checkContours = function () {
    var srcImg = cv.imread(imgElement);
    //1. 图片灰度化
    var gray = new cv.Mat();
    var binImg = new cv.Mat();
    //灰度化
    cv.cvtColor(srcImg, gray, cv.COLOR_RGBA2GRAY); 
    // cv.imshow('canvasOutput', gray);

    //2. 阈值二值化 
    cv.threshold(gray, binImg, 177, 200, cv.THRESH_BINARY);
    // cv.imshow('canvasOutput', binImg);

    //3. 检测轮廓 
    var contours = new cv.MatVector();
    var hierarchy = new cv.Mat();
    //第5个参数为CV_RETR_EXTERNAL，只检索外框   找轮廓
    cv.findContours(binImg, contours, hierarchy, cv.RETR_EXTERNAL, cv.CHAIN_APPROX_NONE);
     
    console.log(contours.size());
    for (var i = 0; i < contours.size(); i++){
        
        //需要获取的坐标  ++  
        var tmp = new cv.Mat();
        var cnt = contours.get(i);
        var rotatedRect = cv.minAreaRect(cnt);
        console.log('rect angle:' + rotatedRect.angle);

        var rect = cv.boundingRect(tmp);
        var contoursColor = new cv.Scalar(255, 255, 255);
        var rectangleColor = new cv.Scalar(255, 0, 0);
        cv.drawContours(binImg, contours, 0, contoursColor, 1, 8, hierarchy, 100);
        var point1 = new cv.Point(rect.x, rect.y);
        var point2 = new cv.Point(rect.x + rect.width, rect.y + rect.height);
        cv.rectangle(binImg, point1, point2, rectangleColor, 2, cv.LINE_AA, 0);
        cv.imshow('canvasOutput', binImg);
    }


    //4. 寻找轮廓的包围矩阵，并且获取角度
    //5. 根据角度进行旋转矫正 

    // cv.imshow('canvasOutput', mat);
    gray.devare(); binImg.devare(); contours.devare(); hierarchy.devare();

};
  

var loadImageToCanvas = function (url, cavansId) {
    let canvas = document.getElementById(cavansId);
    let ctx = canvas.getContext('2d');
    let img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
    };
    img.src = url;
};

var addFileInputHandler = function (fileInputId, canvasId) {
    let inputElement = document.getElementById(fileInputId);
    inputElement.addEventListener('change', (e) => {
        let files = e.target.files;
        if (files.length > 0) {
            let imgUrl = URL.createObjectURL(files[0]);
            self.loadImageToCanvas(imgUrl, canvasId);
        }
    }, false);
};
 
// Demo2 获取特征图片进行变换
 
executeCode = function (textAreaId) {
    try {
        this.clearError();
        let code = document.getElementById(textAreaId).value;
        eval(code);
    } catch (err) {
        console.table(err);
    }
};

  
loadImageToCanvas('./images/2127102300.jpg', 'imageCanvasInput');
loadImageToCanvas('./images/match2.jpg', 'templateCanvasInput'); 

let tryIt = document.getElementById('tryIt');
tryIt.addEventListener('click', () => {
    let src = cv.imread('imageCanvasInput');
    let templ = cv.imread('templateCanvasInput');
    let dst = new cv.Mat();
    let mask = new cv.Mat();
    cv.matchTemplate(src, templ, dst, cv.TM_CCOEFF, mask);
    let result = cv.minMaxLoc(dst, mask);
    let maxPoint = result.maxLoc;
    let color = new cv.Scalar(255, 0, 0, 255);
    let point = new cv.Point(maxPoint.x + templ.cols, maxPoint.y + templ.rows);
    cv.rectangle(src, maxPoint, point, color, 2, cv.LINE_8, 0);
    cv.imshow('canvasOutput', src);
    src.delete(); dst.delete(); mask.delete();

});
 

