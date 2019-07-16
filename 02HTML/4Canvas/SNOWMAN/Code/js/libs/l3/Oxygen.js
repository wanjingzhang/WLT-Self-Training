SNOW.Oxygen = function (id) { 
    this.init = function () { 
        this.obj = new Myobj({ id: id, width: 26, height: 67, displayWidth: 26 , displayHeight: 67, vx: SNOW.WIDTH + 200 + id * (22 + 10), vy:SNOW.HEIGHT - 180, src:'images/l3/oxygen.svg',type: 'diamond', drawType: 'sprite', show: true });
    }

    this.update = function () {
        this.obj.update(); 
    }

    this.render = function () {
        this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + 200 +  this.obj.id * (this.obj.displayWidth + 10); //初始化 
    }
}
