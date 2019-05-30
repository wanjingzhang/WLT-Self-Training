/*
 *  游戏属性状态管理
 */
var SNOW = {
    //游戏初始化时屏幕的大小 
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
    isNotMobile: false,
    isLandscape: false,
    Body:null,
    canvas: null,
    ctx: null, 
    offset: {
        top: 0,
        left: 0
    },
    entities: [],
    distance: 0,
    sled: null,
    score: {
        taps: 0,
        coins: 0,
        coinStep: 1,
        blood: 100,
        bloodStep:20
    },
    speed: 1,
    RATIO: null,
    Scale: 1,
    bg_grad: "day", 
    gradients: ["day", "dusk", "night", "dawn"],
    game: null,
    //当前的宽高 既是屏幕的宽高
    currentWidth: null,
    currentHeight: null,
    android: null,
    ios: null,
    snow: [],
    snowMax: 20, 
    tapTime: 0,
    tapInterval: null,
    init: function () {
        var grad;
        SNOW.WIDTH = window.innerWidth;
        SNOW.HEIGHT = window.innerHeight;
        // SNOW.Scale = SNOW.WIDTH / 800; 
        // SNOW.speed = ~~(SNOW.Scale * SNOW.speed );
        SNOW.RATIO = SNOW.WIDTH / SNOW.HEIGHT;
        // alert("Ratio:" + SNOW.RATIO + "  Scale:" + SNOW.Scale);
        
        // these will change when the screen is resize
        // SNOW.currentWidth = SNOW.WIDTH;
        // SNOW.currentHeight = SNOW.HEIGHT;
        // this is our canvas element
        SNOW.Body = document.getElementById('body');
        SNOW.canvas = document.getElementById('canvas');
         
        SNOW.ctx = SNOW.canvas.getContext('2d');
        SNOW.ua = navigator.userAgent.toLowerCase();
        SNOW.android = SNOW.ua.indexOf('android') > -1 ? true : false;
        SNOW.ios = (SNOW.ua.indexOf('iphone') > -1 || SNOW.ua.indexOf('ipad') > -1) ? true : false; 
        // SNOW.orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;
 
        SNOW.canvas.width = SNOW.WIDTH;
        SNOW.canvas.height = SNOW.HEIGHT;


        SNOW.highscore = SNOW.readData();
       
        // setup some gradients
        grad = SNOW.ctx.createLinearGradient(0, 0, 0, SNOW.HEIGHT);
        grad.addColorStop(0, '#036');
        grad.addColorStop(0.5, '#69a');
        grad.addColorStop(1, 'yellow');
        SNOW.gradients.dawn = grad;

        grad = SNOW.ctx.createLinearGradient(0, 0, 0, SNOW.HEIGHT);
        grad.addColorStop(0, '#69a');
        grad.addColorStop(0.5, '#9cd');
        grad.addColorStop(1, '#fff');
        SNOW.gradients.day = grad;

        grad = SNOW.ctx.createLinearGradient(0, 0, 0, SNOW.HEIGHT);
        grad.addColorStop(0, '#036');
        grad.addColorStop(0.3, '#69a');
        grad.addColorStop(1, 'pink');
        SNOW.gradients.dusk = grad;

        grad = SNOW.ctx.createLinearGradient(0, 0, 0, SNOW.HEIGHT);
        grad.addColorStop(0, '#036');
        grad.addColorStop(0.7, '#69a');
        grad.addColorStop(1, '#000');
        SNOW.gradients.night = grad;
   
        console.log('isOK');
        // add events
        window.addEventListener('click', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
                SNOW.Input.set(e);
            } 
        }, false);

        window.addEventListener('touchstart', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
                SNOW.Input.set(e.touches[0]);
            }
        }, false);

        window.addEventListener('touchmove', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
            }
        }, false);

        window.addEventListener('touchend', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
            }
        }, false);

        // SNOW.resize();   

        SNOW.changeState("Splash"); 
        SNOW.loop(); 
    }, 
    changeState: function (state) {
        SNOW.game = new window[state]();
        SNOW.game.init();
    },
    loop: function () {
        requestAnimationFrame(SNOW.loop);
        SNOW.update();
        SNOW.render();
    },
    update: function () {
        SNOW.game.update();
        SNOW.Input.tapped = false;
    },
    render: function () {
        SNOW.Draw.rect(0, 0, SNOW.WIDTH, SNOW.HEIGHT, SNOW.gradients[SNOW.bg_grad]);

        for (i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].render();
        }

        SNOW.game.render();
    },
    readData: function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var hs = parseInt(this.responseText);
                if (hs < SNOW.score.coins) {
                    // 当前分数小于最大分数；

                }
                SNOW.highscore = hs;

                console.log('-------' + hs + '-------');
                //return hs; 
            }
        };
        xhttp.open("GET", "http://preview2.williamsleatag.cn/shanghai/WLT/Snowman/data/gettop.php", true);
        xhttp.send();
    }
}