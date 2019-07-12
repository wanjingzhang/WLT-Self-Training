var canvas, ctx, ww, wh, ship;

function draw() {
    ctx.fillStyle = "#001d2e";
    ctx.fillRect(0, 0, ww, wh);

    // 背景线格
    var span = 50; // 跨度
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

    ctx.save(); // 储存画布的状态 #1

    ctx.translate(ww/2,wh/2); // 移动 中心点 
    // 船
    ctx.beginPath();
    ctx.arc(0, 0, ship.r, 0, Math.PI * 2); //2pai
    ctx.strokeStyle = "white";
    ctx.lineWidth = 20;
    ctx.stroke();
    
    // 线
    var i = 3;
    while (i--) {
        // 绘制一条直线
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -ship.r);
        ctx.stroke(); 

        // 旋转画布 360/3=120度
        ctx.rotate(Math.PI*2/3);
    }
     
    ctx.restore(); // 还原画布的状态 回到上一个存档点 #1 

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
    ship = {
        x: 0,
        y: 0,
        deg: 0,
        r: 100
    }
    draw();
}

init();
let fps = 60;