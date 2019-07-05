SNOW.Diamond = function (x, y,id) {
    this.init = function () {
        this.id = id;
        this.vx = SNOW.WIDTH + id * 50;
        this.vy = y; 
        this.img = new Image();
        this.img.src = 'images/l1/diamond.svg';
        this.width = 777;
        this.height = 612;
        this.displayWidth = 30;
        this.displayHeight = 23;
        this.type = 'diamond';
        this.show = true; 
    }

    this.update = function () {
        this.vx -= SNOW.Speed; 
        if (this.vx < 0 ) {
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
        console.log('初始化为屏幕宽度  id = ' + this.id );
    }
}
