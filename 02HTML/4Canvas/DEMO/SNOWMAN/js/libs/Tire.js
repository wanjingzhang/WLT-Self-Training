var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext("2d");
var ww = window.innerWidth;
var wh = window.innerHeight;
canvas.width = ww;
canvas.height = wh;  
var obj = {
    x: 200,
    y: 0
};
function draw() {
    ctx.fillStyle = "black";
    ctx.fillStyle = "rgba(0,0,0,0.2)"; // 残影
    ctx.fillRect(0, 0, ww, wh);
    obj.x += 5;
    obj.y += 5;
    ctx.fillStyle = 'red';
    ctx.fillRect(obj.x, obj.y, 50, 50);
}
setInterval(draw, 100); 