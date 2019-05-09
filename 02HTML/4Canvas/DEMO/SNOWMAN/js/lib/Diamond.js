FB.Diamond = function (x, y) {
    this.init = function () {
        this.vx = x;
        this.vy = y;
        this.speed = -2.5;
        this.img = new Image();
        this.img.src = 'images/diamond1.png';
        this.width = 50;
        this.height = 66;
        this.type = 'diamond';
        this.show = true;
    }

    this.update = function () {
        this.vx += this.speed;
        if (this.vx == (0 - this.width)) {
            this.respawn();
        }
    }

    this.render = function () {
        if (this.show) {
            FB.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.width / 2, this.height / 2, 0);
        }
        
    }

    this.respawn = function () {
        this.show = true;
        this.vx = FB.WIDTH - this.width + 180;
    }
}
