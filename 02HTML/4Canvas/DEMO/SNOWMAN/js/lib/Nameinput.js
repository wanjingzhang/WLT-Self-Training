SNOW.Nameinput = function (x, y, w,h) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image();
        this.img.src = 'images/name.png';  
        this.type = 'Nameinput'; 
        this.status = 'default'; 
    }

    this.changeState = function (status) {
        this.status = status;
    }

    this.update = function () {
        
    }
    
    this.render = function () { 
        SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height, 0);  
        if (this.status == 'typing') {
            SNOW.Draw.rect(this.x - this.width/2 + 20,this.y -10,2,12,'black');
        }
        
    }

    this.respawn = function () { 
    }
}
