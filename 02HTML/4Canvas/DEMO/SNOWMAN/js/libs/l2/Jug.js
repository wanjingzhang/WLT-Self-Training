SNOW.Jug = function (id) { 
    this.init = function () {
        this.id = id;
        this.vx = SNOW.WIDTH + id * 50;
        this.vy = SNOW.HEIGHT - 140;  
        this.src = 'images/l2/jug.svg';
        this.width = 218;
        this.height = 244;
        this.displayWidth = 30;
        this.displayHeight = 34;
        this.type = 'diamond';
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
        this.obj.vx = SNOW.WIDTH + this.id * (this.displayWidth + 10); //初始化
    }
}
