SNOW.Cactus = function (id) { 
    this.init = function () {
        this.id = id;
        this.vx = SNOW.WIDTH + this.id * 450;  
        this.vy = SNOW.HEIGHT - 80;  
        this.src = 'images/l2/cactus.svg';
        this.width = 271;
        this.height = 619; 
        this.displayWidth =66;
        this.displayHeight =152;
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
        this.obj.vx = SNOW.WIDTH + this.id * 450; //初始化
    }
}
