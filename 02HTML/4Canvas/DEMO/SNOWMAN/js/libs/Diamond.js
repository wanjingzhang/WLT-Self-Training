SNOW.Diamond = function (x, y,id) {
    this.init = function () {
        this.id = id;
        this.vx = x - id * 50;
        this.vy = y; 
        this.img = new Image();
        this.img.src = 'images/1.png';
        this.width = 100;
        this.height = 120;
        this.displayWidth = 20;
        this.displayHeight = 24;
        this.type = 'diamond';
        this.show = true; 
    }

    this.update = function () {
        this.vx -= SNOW.Speed  ;
       
        if (this.vx <= (- this.width)) { //
            this.show = false; 
        } 
    }

    this.render = function () {
        if (this.show) {
            SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.displayWidth,this.displayHeight, 0);
        } 
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH + id * 50; //初始化为屏幕宽度 
    }
}
