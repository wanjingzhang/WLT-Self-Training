SNOW.Route = function (x, y, width ) {
    this.init = function () {
        this.x = x; 
        this.y = y;
        this.oldx = x;   
        this.img = new Image();
        this.img.src = 'images/bg/mountains.png';
        this.tree = new Image();
        this.tree.src = 'images/bg/tree.png';
        this.width = width; 

    }

    this.update = function () {
        this.x -= SNOW.Speed;
        if (this.x < -this.width) { 
            this.respawn();
        }     
    }

    this.render = function () {
        // mountains
        // SNOW.Draw.Image(this.img, this.x, this.y);
        // SNOW.Draw.Image(this.img, this.x + this.width, this.y);
        
        // trees
        SNOW.Draw.Image(this.tree, this.x, SNOW.HEIGHT - 223);
        SNOW.Draw.Image(this.tree, this.x + this.width, SNOW.HEIGHT - 223); 
        
    }

    this.respawn = function () {
        this.x = this.oldx;
    }
}