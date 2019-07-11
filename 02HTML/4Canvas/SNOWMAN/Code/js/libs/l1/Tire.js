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

var ship = {
    x: 0,
    y: 0,
    deg: 0
}

function init() {
    ship.deg = 45;
}

function update() {
    ship.x += 0.1;
    ship.y += 0.5;
}
function draw() {
    ctx.fillStyle = 'black'; 
    ctx.fillRect(0, 0, ww,wh);

    ctx.fillStyle = 'white';
    ctx.fillRect(ship.x, ship.y, 50, 50);

    requestAnimationFrame(draw);
}

init();

setInterval(update, 100);  //update 
requestAnimationFrame(draw);