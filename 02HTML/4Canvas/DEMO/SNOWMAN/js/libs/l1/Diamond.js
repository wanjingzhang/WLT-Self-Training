SNOW.Diamond = function (id) {
    this.init = function () {
        this.id = id;
        this.src = 'images/l1/diamond.svg';
        this.width = 777;
        this.height = 612;
        this.displayWidth = 30;
        this.displayHeight = 23;
        this.vx = SNOW.WIDTH + id * this.displayWidth;
        this.vy = SNOW.HEIGHT - 120; 
        this.type = 'diamond';
        this.drawType = 'sprite';
        this.show = true;  
        this.obj = new Myobj();
        this.obj.init(this.id,this.vx, this.vy, this.width, this.height, this.displayWidth, this.displayHeight, this.src, this.type, this.drawType); 
    }

    this.update = function () { 
        this.obj.update(); 
    }

    this.render = function () { 
        this.obj.render();
    }

    this.respawn = function () {
        this.obj.respawn();
    }
}  
