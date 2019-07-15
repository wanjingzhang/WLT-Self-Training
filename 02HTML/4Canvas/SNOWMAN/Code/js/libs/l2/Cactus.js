SNOW.Cactus = function (id) { 
    this.init = function () { 
        this.obj = new Myobj({ id: id, width: 178, height: 331, displayWidth: 60 , displayHeight:111 , vx: SNOW.WIDTH + id * 450, vy:SNOW.HEIGHT - 100, type: 'stone',src:'images/l2/cactus.svg', drawType: 'sprite', show: true });
    }

    this.update = function () {
        if (this.obj.show)this.obj.update();  
    }

    this.render = function () {
        if (this.obj.show)this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + this.obj.id * 450; //初始化
    }
}
