SNOW.Stone = function (x,y, w) {
    this.init = function () {
        this.vx = x;
        this.vy = y;
        this.width = w ;
        this.height = w; 
        this.img = new Image();
        this.img.src = 'images/stone.png';
        this.width = 100;
        this.height = 70;
        this.type = 'stone';
        this.show = true 
    }

    this.update = function () {
        this.vx -= SNOW.Speed;
        if (this.vx <= - this.width) {
            this.respawn();
        }
    }

    this.render = function () {
        if (this.show) { 
            SNOW.Draw.Sprite(this.img, 0, 0, 100, 70, this.vx, this.vy, this.width/2, this.height/2, 0);
        }
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH; 
    }
}
