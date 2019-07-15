class Myobj{ 
    constructor(args) {
        let def = {
            id:0,
            oldx:0,
            oldy:0,
            vx:0,
            vy:0,
            img: new Image(), 
            src: "",
            width:0,
            height:0,
            displayWidth:0,
            displayHeight:0,
            type:"",
            drawType:"",
            show:false,
        }
        
        Object.assign(def, args);
        Object.assign(this, def);
        this.img.src = this.src;
    }

    render () {
        if (this.show) {
            SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.displayWidth, this.displayHeight, 0);
        }
    }

    update  () {
        this.vx -= SNOW.Speed;
        if (this.vx < -this.displayWidth) {
            this.show = false;
        }
    } 

}

 