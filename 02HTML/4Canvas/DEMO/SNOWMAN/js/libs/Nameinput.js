SNOW.Nameinput = function (x, y, w,h) {
    this.init = function () {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.img = new Image(); 
        if (SNOW.isOK()) {
            this.img.src = "images/hi.png";
        } 
        else {
            this.img.src = "images/app_rotate_to_play.png";
        }
        this.type = 'Nameinput'; 
        this.status = 'default'; 
    } 
    
    this.update = function () {
        
    }
    
    this.render = function () {  
        SNOW.Draw.Image(this.img, (SNOW.WIDTH - this.img.width) / 2, (SNOW.HEIGHT - this.img.height) / 2); 
        SNOW.Draw.text(SNOW.userName, SNOW.WIDTH/2,SNOW.HEIGHT/2,12,'black');
    }
 
}
