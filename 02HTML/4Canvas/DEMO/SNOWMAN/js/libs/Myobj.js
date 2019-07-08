Myobj = function (x, y, width, height, disWidth, disHeight, src, type, drawType) {
    this.init = function () {
        this.oldx = x;
        this.oldy = y;
        this.vx = x;
        this.xy = y;
        this.img = new Image();
        this.img.src = src;
        this.width = width;
        this.height = height;
        this.disWidth = disWidth;
        this.disHeight = disHeight;
        this.type = type;
        this.drawType = drawType;
        this.show = true;
    } 
}