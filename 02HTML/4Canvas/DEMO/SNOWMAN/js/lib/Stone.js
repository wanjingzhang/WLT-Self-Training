SNOW.Stone = function (x, w) {
    this.init = function () {
        this.vx = x;
        this.vy = SNOW.HEIGHT - 80* SNOW.Scale;
        this.width = w;
        this.height = w;
        this.speed = -2.5;
        this.show = true
        this.type = 'stone';
    }

    this.update = function () {
        this.vx += this.speed;
        if (this.vx <= - this.width) {
            this.respawn();
        }
    }

    this.render = function () {
        if (this.show) {
            SNOW.Draw.rect(this.vx, this.vy, this.width, this.height, '#000');
        }
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH;
    }
}
