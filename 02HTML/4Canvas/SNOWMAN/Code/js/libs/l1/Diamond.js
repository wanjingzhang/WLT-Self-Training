SNOW.Diamond = function (id) { 
    this.init = function () { 
        this.obj = new Myobj({id:id, displayWidth:30,width:777,height:612,displayHeight:23,vx:SNOW.WIDTH + id * (30 + 10),vy:SNOW.HEIGHT - 180,src:'images/l1/diamond.svg', type:'diamond',drawType: 'sprite',show:true}); 
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
