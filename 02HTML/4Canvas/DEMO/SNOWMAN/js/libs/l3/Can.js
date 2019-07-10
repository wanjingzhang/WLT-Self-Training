SNOW.Can = function (id) {
    this.init = function () {
        this.id = id;
        this.src = 'images/l3/can.svg';
        this.width = 224;
        this.height = 293;
        this.displayWidth = 40;
        this.displayHeight = 52;
        this.vx = SNOW.WIDTH + this.id * (this.displayWidth + 10);
        this.vy = SNOW.HEIGHT - 100;
        this.type = 'stone';
        this.drawType = 'sprite';
        this.show = true;
        this.obj = new Myobj();
        this.obj.init(this.id, this.vx, this.vy, this.width, this.height, this.displayWidth, this.displayHeight, this.src, this.type, this.drawType);
    }

    this.update = function () {
        this.obj.update();
    }

    this.render = function () {
        this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + this.id * (this.displayWidth + 10); //初始化为屏幕宽度  
    }
}
