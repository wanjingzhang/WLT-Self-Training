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

FB.Input = {
    x: 0,
    y: 0,
    tapped: false,

    set: function (data) {
        this.x = (data.pageX - FB.offset.left) / FB.scale;
        this.y = (data.pageY - FB.offset.top) / FB.scale;
        this.tapped = true;
        console.log('trapped = true');
    }
}

FB.Collides = function (object_1, object_2) {
    // if(stone.coin && sled.vx > sled.centerX + sled.w/2 -5){
    //     stone.coin = false;
    //     FB.score.coins += 1;
    //     console.log('get coin:' + sled.vy);
    // }

    if ((object_1.vx + object_1.width / 2 > object_2.vx && object_1.vx < object_2.vx + object_1.width / 2)
        && object_1.vy + object_1.height / 2 > object_2.vy
    ) {
        // console.log('obj1: vy=' + object_1.vy +  ' height=' + object_1.height );
        // console.log('obj2: vy=' + object_2.vy + ' height=' + object_2.height ); 
        // console.log("collide (object_1.vy + object_1.height/2)=" + object_1.vy + object_1.height/2 );
        // console.log("object_2.y=" + object_2.vy);
        console.log("collide");
        return true;
    }

}
 

FB.Draw = {
    clear: function () {
        FB.ctx.clearRect(0, 0, FB.WIDTH, FB.HEIGHT);
    },
    rect: function (x, y, w, h, col) {
        FB.ctx.fillStyle = col;
        FB.ctx.fillRect(x, y, w, h);
    },
    circle: function (x, y, r, col) {
        FB.ctx.fillStyle = col;
        FB.ctx.beginPath();
        FB.ctx.moveTo(x, y);
        FB.ctx.arc(x, y, r, 0, Math.PI * 2, true);
        FB.ctx.closePath();
        FB.ctx.fill();
    },
    Image: function (img, x, y) {
        FB.ctx.drawImage(img, x, y);
    },
    Sprite: function (img, srcX, srcY, srcW, srcH, destX, destY, destW, destH, r) {
        FB.ctx.save();
        FB.ctx.translate(destX, destY);
        FB.ctx.rotate(r * (Math.PI / 180));
        FB.ctx.translate(-(destX + destW / 2), -(destY + destH / 2));
        FB.ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
        FB.ctx.restore();

        // console.log(arguments);
        // console.log("translateX=" + (-(destX + destW/2)) + " Y="+ (-(destY + destH/2)));
    },
    // Arguments [246, 420, 20, "#050000"] (4)
    semiCircle: function (x, y, r, col) {
        FB.ctx.fillStyle = col;
        FB.ctx.beginPath();
        FB.ctx.arc(x, y, r, 0, Math.PI, true);
        FB.ctx.closePath();
        FB.ctx.fill();
    },
    Text: function () {

    }
}


window.addEventListener('load', FB.init, false);
window.addEventListener('resize', FB.resize, false);