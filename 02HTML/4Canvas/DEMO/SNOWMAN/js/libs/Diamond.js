SNOW.Diamond = function (x, y,id) {
    this.init = function () {
        this.id = id;
        this.vx = x - id * 50;
        this.vy = y;
        this.speed = -2;
        this.img = new Image();
        this.img.src = 'images/diamond1.png';
        this.width = 50;
        this.height = 66;
        this.type = 'diamond';
        this.show = true; 
    }

    this.update = function () {
        this.vx += this.speed  ;
       
        if (this.vx <= (- this.width)) { //
            this.show = false;
            //this.respawn();   console.log('移出屏幕时 重新绘制 id = ' + this.id);
        } 
    }

    this.render = function () {
        if (this.show) {
            SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.width / 2, this.height / 2, 0);
        } 
    }

    this.respawn = function () {
        this.show = true;
        this.vx = SNOW.WIDTH + id * 50; //初始化为屏幕宽度
        this.speed = -2 - SNOW.Speed;
        // console.log('respawn diamond.x = ' + this.vx); 
    }
}
