SNOW.isMobile = function(){
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if(/windows phone/i.test(userAgent)) {
        //alert("Windows Phone");
        return true;
    }

    if (/android/i.test(userAgent)) {
        //alert("Android");
        return true;
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710  iPad|
    if (/iPhone|iPod/.test(userAgent) && !window.MSStream) {
        //alert("iOS");
        return true;
    }

    return false;
}
// 检测是否是横屏手机 或 是平板电脑 
SNOW.isOK = function() {
    var isLandscape = window.matchMedia('(orientation: landscape)');  
    var isok = (isLandscape.matches && SNOW.isMobile()) || !SNOW.isMobile();  
    return isok;
}

// 屏幕大小改变
SNOW.resize = function () {
    SNOW.currentHeight = window.innerHeight;
    SNOW.currentWidth = ~~(SNOW.currentHeight * SNOW.RATIO) + 1; 
    SNOW.scale = SNOW.currentWidth / SNOW.WIDTH;   

    SNOW.relCanvas.style.width = SNOW.cacheCanvas.style.width = SNOW.currentWidth + "px";
    SNOW.relCanvas.style.height = SNOW.cacheCanvas.style.height = SNOW.currentHeight + "px";
 
    SNOW.Body.style.width = SNOW.currentWidth + "px";
    SNOW.popBackground.style.width = SNOW.currentWidth + 'px';
    SNOW.popBackground.style.height = SNOW.currentHeight + 'px';
 
    SNOW.offset.top = SNOW.cacheCanvas.offsetTop;
    SNOW.offset.left = SNOW.cacheCanvas.offsetLeft; 

    var resizeInterval;
    resizeInterval = setInterval(function () {
            clearInterval(resizeInterval);
            window.scrollTo(0, 1);},0) 
}

// 刷新页面
function refresh() {
    var random = Math.floor((Math.random() * 10000) + 1);
    var url = decodeURI(window.location.href);
    if (url.indexOf('?') < 0) {
        url = url + "?random" + random;
    } else {
        url = url.substr(0, url.indexOf('?random')) + "?random" + random;
    }
    window.location.href = url;
} 

// 屏幕转动
SNOW.changeOrientation = function () {  
    console.log('height', SNOW.HEIGHT, 'width', SNOW.WIDTH);// 
    refresh(); 
}  
