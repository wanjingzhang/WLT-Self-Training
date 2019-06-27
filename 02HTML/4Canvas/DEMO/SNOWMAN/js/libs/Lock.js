SNOW.Lock = function (x,y) {
    this.init = function () { 
        this.vx = x;
        this.vy = y; 
        this.img = new Image();
        this.img.src = 'images/lock.png';
        this.width = 168;
        this.height = 291;
        this.displayWidth = 21;
        this.displayHeight = 36;
        this.type = 'lock'
        this.show = false ;
    }

    this.update = function () {
        this.vx -= SNOW.Speed;
        if (this.vx <= (-this.width)) {
            if (SNOW.distance.current > (SNOW.distance.step / 2) && SNOW.hp.locks > 0) {
                this.respawn();
                console.log('SNOW.distance.current=' + SNOW.distance.current + "show Lock ~~");
            }
            
        } 
    }

    this.render = function () {
        if (this.show) { 
            SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.displayWidth, this.displayHeight, 0);
        } 
    }

    this.respawn = function () { 
        this.show = true;
        this.vx = SNOW.WIDTH + ~~(SNOW.WIDTH * Math.random);
        SNOW.hp.locks--;  
    }
}