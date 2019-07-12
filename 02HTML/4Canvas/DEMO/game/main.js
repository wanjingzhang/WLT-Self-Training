var canvas, ctx, ww, wh, ship,ship2,bullets=[];
var time = 0;
var mousePos = {
    x: 0,
    y: 0
}

var degToPi = Math.PI * 2 / 360;

class Ship{
    constructor(args) {
        let def = {
            x: 0,
            y: 0,
            r: 50,
            deg: 50 * degToPi
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    draw() {
        ctx.save();
        ctx.rotate(this.deg); //旋转 物体

        ctx.fillStyle = "white";
        ctx.fillRect(100, -25 / 2, 25, 25); //中心点

        ctx.beginPath();
        ctx.arc(0, 0, this.r, 0, Math.PI * 2); //2pai
        ctx.strokeStyle = "white";
        ctx.lineWidth = 12;


        ctx.stroke();
        // 发光
        ctx.shadowBlur = 20;
        ctx.shadowColor = "white";
        // 线
        var i = 3;
        while (i--) {
            // 绘制一条直线
            ctx.lineWidth = 5;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -this.r);
            ctx.stroke();

            // 旋转画布 360/3=120度
            ctx.rotate(Math.PI * 2 / 3);
        }
        ctx.restore();
    }
}

class Bullet{
    constructor(args) {
        let def = {
            x: 0,
            y: 0,
            v: {
                x: 0,
                y: 0,
            }
        }
        Object.assign(def, args);
        Object.assign(this, def);
    }
    update() {
        this.x += this.v.x;
        this.y += this.v.y;
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, 10, 10);
        ctx.restore();
    }
}

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

    // 船
    ctx.save(); // 储存画布的状态 #1 
    ctx.translate(ww / 2, wh / 2); // 移动 中心点 
    ship.draw();   
    ctx.restore(); // 还原画布的状态 回到上一个存档点 #1 

    bullets.forEach(b => b.draw()); 

    ctx.fillStyle = "white";
    ctx.fillRect(ship.x, ship.y, 50, 50);
    requestAnimationFrame(draw); 
    
}

// 实时更新
function update() { 
    // ship.deg = mousePos.x / 50; 

    if (time % 100 == 0) { 
        // 添加转场动画
        TweenMax.to(ship, 1, {
            deg: mousePos.x/50, // 每分钟 增加 120度 ship.deg + Math.PI,
            ease: Elastic.easeOut
        })
    }


    time++; 
    if (time % 30 == 0) {
        console.log('add Bullet');
        let b = new Bullet({
            x: ww / 2 + Math.cos(ship.deg) * ship.r, // 中心点+ cos角度的分量 * 半径
            y: wh / 2 + Math.sin(ship.deg) * ship.r,
            v: {
                x: Math.cos(ship.deg)*2, // cos 角度的分量 速度2
                y: Math.sin(ship.deg)*2  // sin 角度的分量 速度2
            }
        });
        bullets.push(b);
    }
    bullets.forEach(b => b.update());
}

function init() {
    canvas = document.getElementById('canvas'); 
    ctx = canvas.getContext('2d');
    ww = window.innerWidth;
    wh = window.innerHeight;
    canvas.width = ww;
    canvas.height = wh;
     
    ship = new Ship({
        deg: 45 * degToPi,
        r:120
    })  
    setInterval(update, 30);
    draw();

    canvas.addEventListener("mousemove", function (evt) { 
        mousePos.x = evt.x;
        mousePos.y = evt.y;
    })
}

init();
let fps = 60;