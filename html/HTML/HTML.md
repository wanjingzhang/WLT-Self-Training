# Reponsive Layout
```javascript
var ad = document.querySelector('#primary-content');
resizeHandler();
window.addEventListener('resize', resizeHandler);
function resizeHandler() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var size = getSize(width, height);
    ad.style.width = size.w + 'px';
    ad.style.height = size.h + 'px';
}

function getSize(width, height) {
    var layoutWidth = 200;
    var layoutHeight = 400;

    var w = layoutWidth;
    var h = layoutHeight;
    if ((width / height) > (layoutWidth / layoutHeight)) {
        w = layoutWidth * height / layoutHeight;
        h = height;
    }
    else {
        w = width;
        h = layoutHeight * width / layoutWidth;
    }
    
    // if (w > layoutWidth) {
    // 	w = layoutWidth;
    // 	h = layoutHeight;
    // }

    return {
        w: w,
        h: h
    }
}
```






