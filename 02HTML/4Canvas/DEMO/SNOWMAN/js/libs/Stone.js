SNOW.Stone = function (x,y, w) {
    this.init = function () {
        this.vx = x;
        this.vy = y;
        this.width = w ;
        this.height = w; 
        this.img = new Image();
        this.img.src = 'images/rocks.svg';
        this.width = 253;
        this.height = 152;
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
        if (this.show) { 0.158
            SNOW.Draw.Sprite(this.img, 0, 0, 253, 152, this.vx, this.vy, 40, 24, 0);

        }
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH; 
    }
}
