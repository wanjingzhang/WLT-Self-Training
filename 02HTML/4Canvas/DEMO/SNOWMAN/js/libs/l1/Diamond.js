SNOW.Diamond = function (id) {
    this.init = function () {
        this.vx = SNOW.WIDTH + id * 50;
        this.vy = SNOW.HEIGHT - 120; 
        this.src = 'images/l1/diamond.svg';
        this.width = 777;
        this.height = 612;
        this.displayWidth = 30;
        this.displayHeight = 23;
        this.type = 'diamond';
        this.drawType = 'sprite';
        this.show = true;  
        this.obj = new Myobj(this.vx, this.vy, this.width,this.height,this.displayWidth,this.displayHeight,this.src,this.type,this.drawType); 
    }

    this.update = function () {
        this.obj.vx -= SNOW.Speed; 
        if (this.obj.vx < 0 ) {
            this.obj.show = false; 
        } 
    }

    this.render = function () {
        if (this.obj.show) {
            SNOW.Draw.Sprite(this.obj.img, 0, 0, this.obj.width, this.obj.height, this.obj.vx, this.obj.vy, this.obj.displayWidth,this.obj.displayHeight, 0);
        } 
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + id * 50; //初始化为屏幕宽度 
        console.log('初始化为屏幕宽度  id = ' + this.id );
    }
}  
