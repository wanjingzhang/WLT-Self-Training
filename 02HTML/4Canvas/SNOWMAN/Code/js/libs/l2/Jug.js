SNOW.Jug = function (id) { 
    this.init = function () {  
        this.obj = new Myobj({ id: id, width: 218, height:244 , displayWidth: 30 , displayHeight: 34, vx: SNOW.WIDTH + id * 50, vy:SNOW.HEIGHT - 180, type:'diamond' ,src:'images/l2/jug.svg' ,drawType: 'sprite', show: true });
    }

    this.update = function () {
        if (this.obj.show)this.obj.update();
    }

    this.render = function () {
        if (this.obj.show)this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + this.obj.id * (this.obj.displayWidth + 10); //初始化
    }
}
