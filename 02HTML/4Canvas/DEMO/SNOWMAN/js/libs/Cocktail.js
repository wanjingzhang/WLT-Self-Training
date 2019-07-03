SNOW.Cocktail = function (x,y) {
    this.init = function () { 
        this.vx = x;
        this.vy = y; 
        this.img = new Image();
        this.img.src = 'images/cocktail.svg';
        this.width = 662;
        this.height = 724;
        this.displayWidth = 20;
        this.displayHeight = 22;
        this.type = 'cocktail'
        this.show = false ;
    }

    this.update = function () {
        this.vx > 0 ? this.vx -= SNOW.Speed : null;
    }

    this.render = function () {
        if (this.show) { 
            SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.displayWidth, this.displayHeight, 0);
        } 
    }

    this.respawn = function () { 
        this.show = true;
        this.vx = SNOW.WIDTH + 150; // 出现在金币后面
        SNOW.hp.locks--;  
    }
}