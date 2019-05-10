SNOW.Tree = function (x, y) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.r = 30;
        this.h = 50;
        this.w = this.r * 2;
        this.vx = -2;
        this.type = "Tree";
    }

    this.update = function () {
        this.x += this.vx;
        if (this.x < (0 - this.r * 2)) {
            this.respawn();
        }
    }

    this.render = function () {
        SNOW.Draw.circle(this.x + this.r, (this.y + this.r) - 10, this.r, 'green');
        SNOW.Draw.circle(this.x + (this.r / 2), (this.y + this.r) - 10, this.r / 3, 'rgba(0,0,0,0.08)');
        SNOW.Draw.rect(this.x + this.r - 5, this.y + this.r, 10, this.r, 'brown');

    }

    this.respawn = function () {
        this.x = SNOW.WIDTH + this.r;
    }
}