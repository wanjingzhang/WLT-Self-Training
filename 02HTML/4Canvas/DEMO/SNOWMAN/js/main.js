window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 30);
        };
})();
/**
 * 输入状态捕捉
 */
SNOW.Input = {
    x: 0,
    y: 0,
    tapped: false,

    set: function (data) {
        this.x = (data.pageX - SNOW.offset.left) / SNOW.scale;
        this.y = (data.pageY - SNOW.offset.top) / SNOW.scale;
        this.tapped = true;
        console.log('trapped = true');
    }
}

/** 
 *  碰撞检测
 */
SNOW.Collides = function (object_1, object_2) {  
    if ((object_1.vx + object_1.width / 2 > object_2.vx && object_1.vx < object_2.vx + object_1.width / 2)
        && object_1.vy + object_1.height / 2 > object_2.vy
    ) { 
        console.log("collide");
        return true;
    }

}
 
/**
 * 绘制方法，正方形、圆形、图片、矢量图形、半圆
 */
SNOW.Draw = {
    clear: function () {
        SNOW.ctx.clearRect(0, 0, SNOW.WIDTH, SNOW.HEIGHT);
    },
    rect: function (x, y, w, h, col) {
        SNOW.ctx.fillStyle = col;
        SNOW.ctx.fillRect(x, y, w, h);
    },
    circle: function (x, y, r, col) {
        SNOW.ctx.fillStyle = col;
        SNOW.ctx.beginPath();
        SNOW.ctx.moveTo(x, y);
        SNOW.ctx.arc(x, y, r, 0, Math.PI * 2, true);
        SNOW.ctx.closePath();
        SNOW.ctx.fill();
    },
    Image: function (img, x, y) {
        SNOW.ctx.drawImage(img, x, y);
    },
    Sprite: function (img, srcX, srcY, srcW, srcH, destX, destY, destW, destH, r) {
        SNOW.ctx.save();
        SNOW.ctx.translate(destX, destY);
        SNOW.ctx.rotate(r * (Math.PI / 180));
        SNOW.ctx.translate(-(destX + destW / 2), -(destY + destH / 2));
        SNOW.ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
        SNOW.ctx.restore();

        // console.log(arguments);
        // console.log("translateX=" + (-(destX + destW/2)) + " Y="+ (-(destY + destH/2)));
    },
    // Arguments [246, 420, 20, "#050000"] (4)
    semiCircle: function (x, y, r, col) {
        SNOW.ctx.fillStyle = col;
        SNOW.ctx.beginPath();
        SNOW.ctx.arc(x, y, r, 0, Math.PI, true);
        SNOW.ctx.closePath();
        SNOW.ctx.fill();
    },
    text: function (string,x,y,size,col) {
        SNOW.ctx.font = size + "px Arial";;
        SNOW.ctx.fillStyle = col;
        SNOW.ctx.fillText(string, x, y);
    }
}

SNOW.isNotMobile = !SNOW.iSNOWobile();

if (SNOW.isNotMobile) {
    window.addEventListener('resize', SNOW.resize, false);
} else {
    window.addEventListener('orientationchange', SNOW.changeOrientation, false);
}

window.addEventListener('load', SNOW.init, false);
 

