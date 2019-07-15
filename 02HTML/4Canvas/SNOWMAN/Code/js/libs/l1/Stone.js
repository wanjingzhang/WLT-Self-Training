SNOW.Stone = function (id) {
    this.init = function () {  
        this.obj = new Myobj({ id: id, width: 253, height:152 , displayWidth: 40 , displayHeight: 24, vx: SNOW.WIDTH + id * 50, vy:SNOW.HEIGHT - 80, src:'images/l1/rocks.svg', type: 'stone', drawType: 'sprite', show: true });
    }

    this.update = function () {
        if(this.obj.show)this.obj.update();  
    }

    this.render = function () {
        if (this.obj.show)this.obj.render();
    }

    this.respawn = function () {
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + this.obj.id * 50; //初始化为屏幕宽度  
    }
}
