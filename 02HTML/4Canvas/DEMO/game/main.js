var canvas, ctx,ww,wh;

function draw() {
    ctx.fillStyle = "#001d2e";
    ctx.fillRect(0, 0, ww, wh);

    ctx.beginPath();
    for (var i = 0; i < ww; i += 20){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, wh);
    }
    ctx.strokeStyle = "white";
    ctx.stroke();

    ctx.fillStyle = "white";
    ctx.fillRect(ship.x, ship.y, 50, 50);
    requestAnimationFrame(draw);

}

function init() {
    canvas = document.getElementById('canvas'); 
    ctx = canvas.getContext('2d');
    ww = window.innerWidth;
    wh = window.innerHeight;
    canvas.width = ww;
    canvas.height = wh;
    draw();
}

init();
let fps = 60;