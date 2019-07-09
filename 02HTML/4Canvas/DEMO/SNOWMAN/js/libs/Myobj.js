function Myobj() { }

Myobj.prototype.init = function (id,x, y, width, height, disWidth, disHeight, src, type, drawType,show) {
    this.id = id;
    this.oldx = x;
    this.oldy = y;
    this.vx = x;
    this.vy = y;
    this.img = new Image();
    this.img.src = src;
    this.width = width;
    this.height = height;
    this.disWidth = disWidth;
    this.disHeight = disHeight;
    this.type = type;
    this.drawType = drawType;
    this.show = show;
} 

Myobj.prototype.render = function () {
    if (this.show) {
        SNOW.Draw.Sprite(this.img, 0, 0, this.width, this.height, this.vx, this.vy, this.disWidth, this.disHeight,0);
    } 
}

Myobj.prototype.update = function () {
    this.vx -= SNOW.Speed;
    if (this.vx < -this.disWidth) {
        this.show = false;
    } 
} 