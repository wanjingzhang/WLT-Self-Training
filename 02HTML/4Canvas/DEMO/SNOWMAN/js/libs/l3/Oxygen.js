SNOW.Oxygen = function (id) { 
    this.init = function () {
        this.id = id;
        this.vx = SNOW.WIDTH + 200 + this.id * (this.displayWidth + 10); //初始化 
        this.vy = SNOW.HEIGHT - 140; 
        this.src = 'images/l3/oxygen.svg';
        this.width = 26;
        this.height = 67;
        this.displayWidth = 22;
        this.displayHeight = 57;
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
        this.obj.vx = SNOW.WIDTH + 200 +  this.id * (this.displayWidth + 10); //初始化 
    }
}
