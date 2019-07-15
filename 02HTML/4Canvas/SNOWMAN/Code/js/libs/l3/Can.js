SNOW.Can = function (id) {
    this.init = function () {  
        this.obj = new Myobj({ id: id, width:224 , height: 293, displayWidth: 40 , displayHeight: 52, vx:  SNOW.WIDTH + id * (40 + 10), vy:SNOW.HEIGHT - 100, type: 'stone',src:'images/l3/can.svg', drawType: 'sprite', show: true });
    }

    this.update = function () {
        if (this.obj.show)this.obj.update();
    }

    this.render = function () {
        if (this.obj.show)this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + this.obj.id * (this.obj.displayWidth + 10); //初始化为屏幕宽度  
    }
}
