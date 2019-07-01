SNOW.Hp = function (x,y) {
    this.init = function () {
        this.vx = x;
        this.vy = y;
        this.img = new Image();
        this.img.src = 'images/sled.png'; 
        this.pattern = SNOW.ctx.createPattern(this.img, 'repeat-x'); 
    }

    this.update = function () {
        
    }

    this.render = function () { 
        SNOW.ctx.fillStyle = this.pattern;
        SNOW.ctx.fillRect(0, 0, 300, 300);
    }

    this.respawn = function () {
        
    }
}