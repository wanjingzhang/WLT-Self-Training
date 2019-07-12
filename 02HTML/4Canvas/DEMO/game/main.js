var canvas, ctx,ww,wh;

function draw() {
    ctx.fillStyle = "#001d2e";
    ctx.fillRect(0, 0, ww, wh);

    var span = 50;
    ctx.beginPath();
    for (var i = 0; i < ww; i += span){ // 竖线 ||
        ctx.moveTo(i, 0);
        ctx.lineTo(i, wh);
    }
    for (var i = 0; i < wh; i += span) { // 横线 =
        ctx.moveTo(0, i);
        ctx.lineTo(ww, i);
    }
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.stroke();

    // ctx.fillStyle = "white";
    // ctx.fillRect(ship.x, ship.y, 50, 50);
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