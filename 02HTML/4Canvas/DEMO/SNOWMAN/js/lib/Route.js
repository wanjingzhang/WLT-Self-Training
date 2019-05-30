SNOW.Route = function (x, y, r) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.oldx = x;
        this.r = r +10;
        this.vx = -3 ;
        this.name = "BottomRoute";
        alert('route');
        
    }

    this.update = function () {
        this.x += this.vx;
        if (this.x < (0 - this.r)) {
            this.respawn();
        }
    }

    this.render = function () {
        SNOW.Draw.rect(this.oldx, this.y, this.r, ~~(100 * SNOW.Scale), "#22cc22");
        for (var i = 0; i < 10; i++) {
            SNOW.Draw.semiCircle(~~(this.x + i * (this.r / 5)), this.y, ~~(80 *SNOW.Scale) , '#fff');
        }
    }

    this.respawn = function () {
        this.x = SNOW.WIDTH - 3;
    }
}