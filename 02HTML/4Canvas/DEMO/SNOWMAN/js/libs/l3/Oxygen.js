SNOW.Oxygen = function (x, y, id) {
    this.init = function () {
        this.id = id;
        this.vx = SNOW.WIDTH + id * 50;
        this.vy = y;
        this.img = new Image();
        this.img.src = 'images/l3/oxygen.svg';
        this.width = 288;
        this.height = 505;
        this.displayWidth = 30;
        this.displayHeight = 52;
        this.type = 'diamond';
        this.show = true;
    }

    this.update = function () {
        this.vx -= SNOW.Speed;
        if (this.vx < 0) {
            this.show = false;
        }
    }

    this.render = function () {
        if (this.show) {
            SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.displayWidth, this.displayHeight, 0);
        }
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH + id * 50; //初始化为屏幕宽度 
        console.log('初始化为屏幕宽度  id = ' + this.id);
    }
}
