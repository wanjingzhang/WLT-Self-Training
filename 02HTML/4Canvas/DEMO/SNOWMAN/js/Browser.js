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

SNOW.isOK = function() {
    var isLandscape = window.matchMedia('(orientation: landscape)');
    console.log("isLandscape.matches = " + isLandscape.matches); 
    // 横屏手机 或 不是手机 
    var isok = (isLandscape.matches && SNOW.isMobile()) || !SNOW.isMobile(); 

    return isok;
}

SNOW.resize = function () {
    SNOW.currentHeight = window.innerHeight;
    SNOW.currentWidth =~~(SNOW.currentHeight * SNOW.RATIO) + 1;

    // if (!SNOW.isNotMobile) {
    //     alert("isMobile + 50 pixels height");
    //     document.body.style.height = (window.innerHeight + 50) + "px";
    // }

    SNOW.canvas.style.width = SNOW.currentWidth + "px";
    SNOW.canvas.style.height = SNOW.currentHeight + "px";
    SNOW.Body.style.width = SNOW.currentWidth + "px";

    //响应交互测距
    SNOW.scale = SNOW.currentWidth / SNOW.WIDTH;

    SNOW.offset.top = SNOW.canvas.offsetTop;
    SNOW.offset.left = SNOW.canvas.offsetLeft;

    window.setTimeout(function () {
        window.scrollTo(0, 1);
    }); 
}

//刷新页面
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

SNOW.changeOrientation = function () {  
    console.log('height', SNOW.HEIGHT, 'width', SNOW.WIDTH);// 
    refresh();
    
}  
//分数 获取保存
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}