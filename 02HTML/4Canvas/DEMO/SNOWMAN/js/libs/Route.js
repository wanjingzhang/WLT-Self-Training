SNOW.Route = function (x, y, width) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.oldx = x;
        this.width = width + 10;
        this.vx = -2;
        this.r = 120;
        this.radius = this.r / 2;
        this.name = "BottomRoute";  
        this.count = ~~(SNOW.WIDTH * 2 / this.r) + 1;
        this.endposition = ~~(this.count/2 - 1) * this.r;
        console.log('route x: ' + this.x + ' endposition:' + this.endposition);
    }

    this.update = function () {
        this.x += this.vx ;
        if (this.x < -this.endposition ) {
            this.respawn();
        }
    }

    this.render = function () {
        SNOW.Draw.rect(this.oldx, this.y, this.width, 100, "#22cc22");
        for (var i = 0; i < this.count; i++) {
            SNOW.Draw.semiCircle(this.x + i * this.r, this.y, this.radius  , '#fff');
        }
    }

    this.respawn = function () {
        this.x = this.oldx ;
        this.speed = SNOW.Speed ;
    }
}