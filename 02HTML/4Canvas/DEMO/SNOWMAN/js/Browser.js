FB.isMobile = function(){
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

FB.isOK = function() {
    var isLandscape = window.matchMedia('(orientation: landscape)');
    console.log("isLandscape.matches = " + isLandscape.matches); 
    // 横屏手机 或 不是手机 
    var isok = (isLandscape.matches && FB.isMobile()) || !FB.isMobile(); 

    return isok;
}

FB.resize = function () {
    FB.currentHeight = window.innerHeight;
    FB.currentWidth = Math.round(FB.currentHeight * FB.RATIO) + 1;

    // if (FB.android || FB.ios) {
    //     document.body.style.height = (window.innerHeight + 50) + "px";
    // }

    FB.canvas.style.width = FB.currentWidth + "px";
    FB.canvas.style.height = FB.currentHeight + "px";
    FB.Body.style.width = FB.currentWidth + "px";

    FB.scale = FB.currentWidth / FB.WIDTH;

    FB.offset.top = FB.canvas.offsetTop;
    FB.offset.left = FB.canvas.offsetLeft;

    window.setTimeout(function () {
        window.scrollTo(0, 1);
    }); 
}

FB.changeOrientation = function () { 
    // if (FB.isOK()) {
    //     console.log("changeOrientation isLandscape");  
    // } else {
    //     console.log("changeOrientation is not Landscape"); 
    // }
    
    // var temp = FB.HEIGHT;
    // FB.HEIGHT = FB.WIDTH;
    // FB.WIDTH = temp;
    // alert(screen.orientation);
    console.log('height', FB.HEIGHT, 'width', FB.WIDTH);// 
    // FB.init();
} 
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