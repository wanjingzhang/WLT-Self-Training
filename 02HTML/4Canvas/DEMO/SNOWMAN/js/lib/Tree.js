FB.Tree = function (x, y) {
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
        FB.Draw.circle(this.x + this.r, (this.y + this.r) - 10, this.r, 'green');
        FB.Draw.circle(this.x + (this.r / 2), (this.y + this.r) - 10, this.r / 3, 'rgba(0,0,0,0.08)');
        FB.Draw.rect(this.x + this.r - 5, this.y + this.r, 10, this.r, 'brown');

    }

    this.respawn = function () {
        this.x = FB.WIDTH + this.r;
    }
}