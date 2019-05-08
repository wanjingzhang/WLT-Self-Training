FB.Stone = function (x, w) {
    this.init = function () {
        this.vx = x;
        this.vy = FB.HEIGHT - 50;
        this.width = w;
        this.height = 20;
        this.speed = -2.5;
        this.show = true
        this.type = 'stone';
    }

    this.update = function () {
        this.vx += this.speed;
        if (this.vx == (0 - this.width)) {
            this.respawn();
        }
    }

    this.render = function () {
        if (this.show) {
            FB.Draw.rect(this.vx, this.vy, this.width, this.height, '#000');
        }
    }

    this.respawn = function () {
        this.vx = 320 - this.width + 160;
    }
}
