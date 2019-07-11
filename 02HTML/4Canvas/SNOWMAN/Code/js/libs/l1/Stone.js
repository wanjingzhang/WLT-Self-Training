SNOW.Stone = function (id) {
    this.init = function () { 
        this.id = id;
        this.src = 'images/l1/rocks.svg';
        this.width = 253;
        this.height = 152;
        this.displayWidth = 40;
        this.displayHeight = 24;  
        this.vx = SNOW.WIDTH + this.id * (this.displayWidth + 10);  
        this.vy = SNOW.HEIGHT - 80;
        this.type = 'stone';
        this.drawType = 'sprite';
        this.show = true;
        this.obj = new Myobj();
        this.obj.init(this.id,this.vx, this.vy, this.width, this.height, this.displayWidth, this.displayHeight, this.src, this.type, this.drawType); 
    }

    this.update = function () {
        if(this.obj.show)this.obj.update();  
    }

    this.render = function () {
        if (this.obj.show)this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + this.id * (this.displayWidth + 10); //初始化为屏幕宽度  
    }
}
