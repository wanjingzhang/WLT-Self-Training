/*
 *  游戏属性状态管理
 */
var SNOW = {
    //游戏初始化时屏幕的大小 
    WIDTH:0,
    HEIGHT:0,
    isNotMobile: false,
    isLandscape: false,
    Body:null,
    canvas: null, //cache canvas,
    relCanvas: null,
    ctx: null, 
    relCtx: null,
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
    Speed: 1, // 移动倍数
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
    userName: '',
    rankings: [],
    state: '',
    Sound: new Sound(),
    popBackground: document.querySelector('.popBackground'),
    inputContent: document.querySelector('.inputContent'),  
    StatsDiv: document.querySelector('.Status'),
    stats : new Stats(),
    init: function () { 
        SNOW.Sound.init();
        var grad; 
        // these will change when the screen is resize
        // SNOW.currentWidth = SNOW.WIDTH;
        // SNOW.currentHeight = SNOW.HEIGHT;
        // this is our canvas element
        SNOW.Body = document.getElementById('body'); 
        SNOW.cacheCanvas = document.getElementById('cacheCanvas');
        SNOW.relCanvas = document.getElementById('canvas');  
        SNOW.ctx = SNOW.cacheCanvas.getContext('2d', { alpha: false });
        SNOW.relCtx = SNOW.relCanvas.getContext('2d', { alpha: false });
        SNOW.ua = navigator.userAgent.toLowerCase();
        SNOW.android = SNOW.ua.indexOf('android') > -1 ? true : false;
        SNOW.ios = (SNOW.ua.indexOf('iphone') > -1 || SNOW.ua.indexOf('ipad') > -1) ? true : false; 
        // SNOW.orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;
        SNOW.stats.setMode(0); // 0: fps, 1: ms 
        // Align top-left
        SNOW.stats.domElement.style.position = 'absolute';
        SNOW.stats.domElement.style.left = '0px';
        SNOW.stats.domElement.style.top = '0px';

        SNOW.StatsDiv.appendChild(SNOW.stats.dom);
        if (SNOW.isNotMobile) {
            SNOW.WIDTH = 800;
            SNOW.HEIGHT = 600;
        } else {
            SNOW.WIDTH = window.innerWidth;
            SNOW.HEIGHT = window.innerHeight;
            //强制让内容超过 
            SNOW.Body.style.height = (SNOW.HEIGHT + 100) + "px";
            window.scrollTo(0, 1);
            //重置成新高度
            SNOW.Body.style.height = SNOW.HEIGHT + "px";
            //非常重要，用于兼容不同机型，防止浏览器窗口移动
            document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
        }

        SNOW.RATIO = SNOW.WIDTH / SNOW.HEIGHT;  
        SNOW.relCanvas.width = SNOW.cacheCanvas.width = SNOW.WIDTH;
        SNOW.relCanvas.height = SNOW.cacheCanvas.height = SNOW.HEIGHT;  
       
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
   
        // console.log('isOK');
        // add events
        SNOW.relCanvas.addEventListener('click', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
                SNOW.Input.set(e);
            } 
        }, false);

        SNOW.relCanvas.addEventListener('touchstart', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
                SNOW.Input.set(e.touches[0]);
            }
        }, false);

        SNOW.relCanvas.addEventListener('touchmove', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
            }
        }, false);

        SNOW.relCanvas.addEventListener('touchend', function (e) {
            if (SNOW.isOK()) {
                e.preventDefault();
            }
        }, false); 
        
        
        SNOW.changeState("Input"); 
        SNOW.loop();
        
        if (SNOW.isNotMobile) { 
            SNOW.resize();
        }
    }, 
    changeState: function (state) {
        SNOW.state = state;
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
        SNOW.stats.update();
    },
    render: function () {
        SNOW.Draw.rect(0, 0, SNOW.WIDTH, SNOW.HEIGHT, SNOW.gradients[SNOW.bg_grad]);
        var i = SNOW.entities.length;
        while (i--) { 
            SNOW.entities[i].render();
        } 
        SNOW.game.render();
        SNOW.relCtx.drawImage(SNOW.cacheCanvas, 0, 0);
    },
    readData: function () {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                SNOW.rankings = JSON.parse(this.responseText); 
                //return hs; 
            }
        };
        xhttp.open("GET", "http://preview2.williamsleatag.cn/shanghai/WLT/Snowman/data/getTop.php", true);
        xhttp.send();
    },
    postData: function () {
        var xhttp = new XMLHttpRequest();
        var params = '?userName=' + SNOW.userName + '&userScore=' + SNOW.score.coins;
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { 
                // console.log('------success post data-------'); 

                SNOW.readData();
            }
        };
        xhttp.open("POST", "http://preview2.williamsleatag.cn/shanghai/WLT/Snowman/data/insertData.php" + params, true);
        xhttp.send();
    }

}