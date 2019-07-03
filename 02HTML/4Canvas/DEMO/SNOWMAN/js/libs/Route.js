SNOW.Route = function (x, y, width ) {
    this.init = function () {
        this.x = x; 
        this.x2 = x;
        this.y = y;
        this.oldx = x;   
        // this.img = new Image();
        // this.img.src = 'images/bg/mountains.png';
        this.tree = new Image();
        this.tree.src = 'images/bg/tree.png';
        this.trees = new Image();
        this.trees.src = 'images/bg/trees.png';
        this.width = width; 

    }

    this.update = function () {
        this.x -= SNOW.Speed;
        this.x2 -= SNOW.Speed * 2;
        if (this.x < - this.width) { 
            this.respawn(1);
        } 
        if (this.x2 < - this.width) {
            this.respawn(2);
        } 
    }

    this.render = function () {
        // mountains
        // SNOW.Draw.Image(this.img, this.x, this.y);
        // SNOW.Draw.Image(this.img, this.x + this.width, this.y);
        
        // trees
        SNOW.Draw.Image(this.tree, this.x, SNOW.HEIGHT - 240);
        SNOW.Draw.Image(this.tree, this.x + this.width, SNOW.HEIGHT - 240); 
        
        // trees
        SNOW.Draw.Image(this.trees, this.x2, SNOW.HEIGHT - 253);
        SNOW.Draw.Image(this.trees, this.x2 + this.width, SNOW.HEIGHT - 253); 
        
    }

    this.respawn = function (id) {
        if (id === 1) {
            this.x += this.width; 
        } else if (id === 2){
            this.x2 += this.width;
        }
    }
}