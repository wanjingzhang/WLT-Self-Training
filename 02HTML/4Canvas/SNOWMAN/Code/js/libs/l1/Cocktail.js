SNOW.Cocktail = function (id) {
    this.init = function () {  
        this.obj = new Myobj({ id:id, vx: SNOW.WIDTH + 120, vy: SNOW.HEIGHT - 180, width: 390, height: 420, displayWidth: 30, displayHeight: 32, src: 'images/l1/cocktail.svg', type: 'cocktail', drawType: 'sprite', show:false}); 
    }

    this.update = function () {
        if (this.obj.show)this.obj.update();  
    }

    this.render = function () {
        if (this.obj.show)this.obj.render();   
    }

    this.respawn = function () { 
        this.obj.show = true;
        this.obj.vx = SNOW.WIDTH + 120; // 出现在金币后面
        SNOW.hp.locks--;  

        console.log('cocktail = respawn');
    }
}