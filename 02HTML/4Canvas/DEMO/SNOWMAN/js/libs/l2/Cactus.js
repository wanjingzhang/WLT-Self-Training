SNOW.Cactus = function (x, y, w) {
    this.init = function () {
        this.vx = x;
        this.vy = y;
        this.width = w;
        this.height = w;
        this.img = new Image();
        this.img.src = 'images/l2/cactus.svg';
        this.width = 271;
        this.height = 619;

        this.disWidth =66;
        this.disHeight =152;
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
            SNOW.Draw.Sprite(this.img, 0, 0,this.width,this.height , this.vx, this.vy, this.disWidth, this.disHeight, 0);

        }
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH;
    }
}
