SNOW.Route = function (x, y, r) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = -3;
        this.name = "BottomRoute";
    }

    this.update = function () {
        this.x += this.vx;
        if (this.x < (0 - this.r)) {
            this.respawn();
        }
    }

    this.render = function () {
        SNOW.Draw.rect(this.x, this.y, this.r, 100, "#22cc22");
        for (var i = 0; i < 10; i++) {
            SNOW.Draw.semiCircle(Math.round(this.x + i * (this.r / 9)), this.y, 30, '#fff');
        }
    }

    this.respawn = function () {
        this.x = SNOW.WIDTH - 3;
    }
}