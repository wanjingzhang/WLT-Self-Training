SNOW.Cloud = function (x, y) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.col = 'rgba(255,255,255,1)';

        this.type = 'cloud';
        this.vx = -0.10;
        this.remove = false;
    }


    this.update = function () {
        // update coordinates
        this.x += this.vx;
        if (this.y < (0 - 115)) {
            this.respawn();
        }
    };

    this.render = function () {
        SNOW.Draw.circle(this.x + this.r, (this.y + this.r), this.r, this.col);
        SNOW.Draw.circle(this.x + 55, (this.y + this.r / 2), this.r / 0.88, this.col);
        SNOW.Draw.circle(this.x + 55, (this.y + this.r + 15), this.r, this.col);
        SNOW.Draw.circle(this.x + 85, (this.y + this.r), this.r, this.col);
    }

    this.respawn = function () {
        this.x = ~~(Math.random() * this.r * 2) + SNOW.WIDTH;
        this.y = ~~(Math.random() * SNOW.HEIGHT / 2);
    }
}