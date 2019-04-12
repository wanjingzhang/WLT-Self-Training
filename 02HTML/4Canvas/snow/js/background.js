var canvas = null;
var context = null;
var bufferCanvas = null;
var bufferCanvasCtx = null;
var flakeArray = [];
var flakeTimer = null;
var maxFlakes = 200;
var viewportwidth;
var viewportheight;

function Flake() {
    this.x = Math.round(Math.random() * context.canvas.width);
    this.y = -10;
    this.drift = Math.random();
    this.speed = Math.round(Math.random() * 2) + 1;
    this.width = (Math.random() * 3) + 2;
    this.endY = (Math.random() * 50) + 120;
}

function init() {
    canvas = document.getElementById('canvasSnow');
    context = canvas.getContext("2d");
    getBrowserHeight();
    context.canvas.width = viewportwidth;

    // initialize the rects
    flakeTimer = setInterval(addFlake, 400);

    animate();
}

function getBrowserHeight() {
    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

    if (typeof window.innerWidth != 'undefined') {
        viewportwidth = window.innerWidth,
            viewportheight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)

    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0) {
        viewportwidth = document.documentElement.clientWidth,
            viewportheight = document.documentElement.clientHeight
    }

    // older versions of IE

    else {
        viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
            viewportheight = document.getElementsByTagName('body')[0].clientHeight
    }
}

function addFlake() {
    flakeArray[flakeArray.length] = new Flake();
    if (flakeArray.length == maxFlakes)
        clearInterval(flakeTimer);
}

// function blank() {
//     bufferCanvasCtx.fillStyle = "rgba(22,22,22,0) ";
//     bufferCanvasCtx.fillRect(0, 0, bufferCanvasCtx.canvas.width, bufferCanvasCtx.canvas.height);
// }

function animate() {
    Update();
    Draw();

    requestAnimationFrame(animate);
}

function Update() {
    for (var i = 0; i < flakeArray.length; i++) {
        if (flakeArray[i].y < context.canvas.height - flakeArray[i].endY) {
            flakeArray[i].y += flakeArray[i].speed;
            if (flakeArray[i].y > context.canvas.height)
                flakeArray[i].y = -5;
            flakeArray[i].x += flakeArray[i].drift;
            if (flakeArray[i].x > context.canvas.width)
                flakeArray[i].x = 0;
        }
    }
}

function Draw() {
    context.save();

    // // create a clipping region
    // bufferCanvasCtx.beginPath();
    // bufferCanvasCtx.fillStyle="black";
    // bufferCanvasCtx.fillRect(0,0,bufferCanvas.width,bufferCanvas.height);
    // bufferCanvasCtx.arc(bufferCanvas.width/2,bufferCanvas.height/2,bufferCanvas.height/3,0,2*Math.PI);
    // bufferCanvasCtx.clip();


    context.clearRect(0, 0, viewportwidth, viewportheight);
    context.beginPath();
    context.fillStyle = "rgba(1,255,255,1)";
    for (var i = 0; i < flakeArray.length; i++) {
        context.moveTo(flakeArray[i].x, flakeArray[i].y);
        context.arc(flakeArray[i].x, flakeArray[i].y, flakeArray[i].width, 0, Math.PI * 2, true);

    }

    context.fill();

    // copy the entire rendered image from the buffer canvas to the visible one 
    context.closePath();
    context.restore();
}

window.addEventListener("load", init);