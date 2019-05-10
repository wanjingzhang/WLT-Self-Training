SNOW.Sled = function () {

    this.init = function () {
        this.img = new Image();
        this.img.src = "images/sled3.png";
        this.width = 100;
        this.height = 92;

        this.gravity = 0.25,
            this.ix = 0;
        this.iy = 0;
        this.fr = 0;
        this.vy = SNOW.HEIGHT - 80; //y position
        this.vx = 70;
        this.jump = -7.6; //jump height
        this.velocity = 0;
        this.rotation = 0;
        this.play = false;
        this.type = 'sled';

    }
    this.update = function () {
        // if (this.fr++ > 5) {
        //     this.fr = 0;
        //     if (this.iy == this.height * 3) {
        //         this.iy = 0;
        //     }
        //     this.iy += this.height;
        // }

        if (this.play) {
            this.velocity += this.gravity;
            this.vy += this.velocity;
            // if(this.vy <= 20){
            //     this.vy = 20;
            // }

            if (this.vy >= SNOW.HEIGHT - 80) {
                this.vy = SNOW.HEIGHT - 80;

                this.play = false;
            }

            // console.log('velocity=' + this.velocity + ' vy=' + this.vy + ' stop at='+ (SNOW.HEIGHT -80)); 
        }

        if (SNOW.Input.tapped && !this.play) {
            this.play = true;
            this.velocity = this.jump;
            // console.log("velocity=jump");
        }

    }
    this.render = function () {
        SNOW.Draw.Sprite(this.img, this.ix, this.iy, this.width, this.height, this.vx, this.vy, this.width, this.height, this.rotation);
        // SNOW.Draw.Image(this.img,88,200); 
        // SNOW.Draw.rect(this.ix,this.iy,this.width,this.height,'#ff0');
    }
}