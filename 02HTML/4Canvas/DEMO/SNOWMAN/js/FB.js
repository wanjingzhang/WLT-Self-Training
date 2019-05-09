/*
 *  游戏属性状态管理
 */
var FB = {
    WIDTH: window.innerWidth,
    HEIGHT: window.innerHeight,
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
    RATIO: null,
    bg_grad: "day",
    gradients: {},
    game: null,
    // currentWidth: null,
    // currentHeight: null,
    android: null,
    ios: null,
    snow: [],
    snowMax: 20, 
    init: function () {
        var grad;
        FB.RATIO = FB.WIDTH / FB.HEIGHT;
        // these will change when the screen is resize
        // FB.currentWidth = FB.WIDTH;
        // FB.currentHeight = FB.HEIGHT;
        // this is our canvas element
        FB.Body = document.getElementById('body');
        FB.canvas = document.getElementById('canvas');
         
        FB.ctx = FB.canvas.getContext('2d');
        FB.ua = navigator.userAgent.toLowerCase();
        FB.android = FB.ua.indexOf('android') > -1 ? true : false;
        FB.ios = (FB.ua.indexOf('iphone') > -1 || FB.ua.indexOf('ipad') > -1) ? true : false; 
        // FB.orientation = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type;
 
        FB.canvas.width = FB.WIDTH;
        FB.canvas.height = FB.HEIGHT;
       
        // setup some gradients
        grad = FB.ctx.createLinearGradient(0, 0, 0, FB.HEIGHT);
        grad.addColorStop(0, '#036');
        grad.addColorStop(0.5, '#69a');
        grad.addColorStop(1, 'yellow');
        FB.gradients.dawn = grad;

        grad = FB.ctx.createLinearGradient(0, 0, 0, FB.HEIGHT);
        grad.addColorStop(0, '#69a');
        grad.addColorStop(0.5, '#9cd');
        grad.addColorStop(1, '#fff');
        FB.gradients.day = grad;

        grad = FB.ctx.createLinearGradient(0, 0, 0, FB.HEIGHT);
        grad.addColorStop(0, '#036');
        grad.addColorStop(0.3, '#69a');
        grad.addColorStop(1, 'pink');
        FB.gradients.dusk = grad;

        grad = FB.ctx.createLinearGradient(0, 0, 0, FB.HEIGHT);
        grad.addColorStop(0, '#036');
        grad.addColorStop(1, 'black');
        FB.gradients.night = grad;
   
        console.log('isOK');
        // add events
        window.addEventListener('click', function (e) {
            if (FB.isOK()) {
                e.preventDefault();
                FB.Input.set(e);
            } 
        }, false);

        window.addEventListener('touchstart', function (e) {
            if (FB.isOK()) {
                e.preventDefault();
                FB.Input.set(e.touches[0]);
            }
        }, false);

        window.addEventListener('touchmove', function (e) {
            if (FB.isOK()) {
                e.preventDefault();
            }
        }, false);

        window.addEventListener('touchend', function (e) {
            if (FB.isOK()) {
                e.preventDefault();
            }
        }, false);

        // FB.resize();   

        FB.changeState("Splash"); 
        FB.loop(); 
    }, 
    changeState: function (state) {
        FB.game = new window[state]();
        FB.game.init();
    },
    loop: function () {
        requestAnimationFrame(FB.loop);
        FB.update();
        FB.render();
    },
    update: function () {
        FB.game.update();
        FB.Input.tapped = false;
    },
    render: function () {
        FB.Draw.rect(0, 0, FB.WIDTH, FB.HEIGHT, FB.gradients[FB.bg_grad]);

        for (i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].render();
        }

        FB.game.render();
    }
}