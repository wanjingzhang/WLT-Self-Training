FB.isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iPhone: function () {
        return navigator.userAgent.match(/iPhone/i); //|iPad|iPod
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function () {
        return (FB.isMobile.Android() || FB.isMobile.BlackBerry() || FB.isMobile.iPhone() || FB.isMobile.Opera() || FB.isMobile.Windows());
    }
}

FB.isLandscape = function() {
    if(window.innerHeight > window.innerWidth) {
        return true;
    }
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

    //FB.scale = FB.currentWidth / FB.WIDTH;

    FB.offset.top = FB.canvas.offsetTop;
    FB.offset.left = FB.canvas.offsetLeft;

    window.setTimeout(function () {
        window.scrollTo(0, 1);
    }); 
}

FB.changeOrientation = function () {
    console.log('changeOrientation');
    console.log('before height:' + window.innerHeight);
    console.log('before width:' + window.innerWidth);
 
}

window.addEventListener('resize', FB.resize, false);
window.addEventListener('orientationchange', FB.resize, false);