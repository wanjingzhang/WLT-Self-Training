// scene opening
window.Input = function () { 
    this.init = function () {
        SNOW.entities = []; 
        SNOW.entities.push(new SNOW.Nameinput(SNOW.WIDTH / 2, SNOW.HEIGHT / 2, 236, 90));
        SNOW.entities[0].init();
    } 

    this.update = function () {  
        SNOW.entities[0].update();
        if (SNOW.Input.tapped) {
            SNOW.changeState('Splash');
            SNOW.Input.trapped = false;
        } 
    }

    this.render = function () {  
    }
}

// scene let's start
window.Splash = function () {
    this.banner = new Image(); 
    if (SNOW.isOK()) {
        this.banner.src = "images/splash.png"; 
    } 
    this.init = function () {
        // clear GC
        SNOW.GC(); 
        
        SNOW.entities = []; 
        SNOW.bg_grad = "day";
        SNOW.score.taps = 0;
        SNOW.score.coins = 0; 
        SNOW.score.blood = 100;  
    }

    this.update = function () { 
        if (SNOW.Input.tapped) {
            SNOW.changeState('Play');
            SNOW.Input.trapped = false;
        }
    }

    this.render = function () { 
        SNOW.Draw.Image(this.banner, ~~((SNOW.WIDTH - this.banner.width) / 2), ~~((SNOW.HEIGHT - this.banner.height) / 2)) ; 
    }
}
 
/**
 * scene play 开始游戏
 */
window.Play = function () {
    this.init = function () { 
        
        SNOW.entities = [];  
        SNOW.sled = new SNOW.Sled(100, 92);  
        // Add entities
        SNOW.entities.push(new SNOW.Cloud(30, ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Cloud(~~(Math.random() * (SNOW.WIDTH * 2)), ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Cloud(~~(Math.random() * (SNOW.WIDTH * 3)), ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Snow());  
        SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2), SNOW.HEIGHT - 170));  
        SNOW.entities.push(new SNOW.Diamond(SNOW.WIDTH + 50, SNOW.HEIGHT - 170 ));
        SNOW.entities.push(new SNOW.Diamond(SNOW.WIDTH + 100, SNOW.HEIGHT - 170));
        
        SNOW.entities.push(new SNOW.Stone(SNOW.WIDTH, SNOW.HEIGHT -80,20 ));
        SNOW.entities.push(new SNOW.Stone(SNOW.WIDTH + 50, SNOW.HEIGHT - 80, 20));
        
        SNOW.entities.push(SNOW.sled);
        SNOW.entities.push(new SNOW.Tree(Math.random() , SNOW.HEIGHT - 140));
        SNOW.entities.push(new SNOW.Tree(Math.random() + 50, SNOW.HEIGHT - 140));
        SNOW.entities.push(new SNOW.Tree(Math.random()  + 100, SNOW.HEIGHT - 140));
        
        SNOW.entities.push(new SNOW.Route(0, SNOW.HEIGHT - 80  , SNOW.WIDTH ));  
        var i = SNOW.entities.length;
        while (i--) {
            SNOW.entities[i].init();
        }  
    }  

    this.update = function () {  
        //check for a collision if the user tapped on this game tick;
        var checkCollision = false;
        if (SNOW.Input.tapped) {
            SNOW.score.taps += 1;
            checkCollision = true;
        }
        var i = SNOW.entities.length;
        while (i--) { 
            SNOW.entities[i].update();
            if (i < 4 && i >8) { break; };
            if ( SNOW.entities[i].show === true) { 
                var hit = SNOW.Collides(SNOW.sled, SNOW.entities[i]);
                if (hit) { 
                    if (SNOW.entities[i].type === 'stone') {
                        SNOW.entities[i].show = false;
                        SNOW.score.blood -= SNOW.score.bloodStep;  
                        SNOW.Sound.play_sound(1); 
                        if (SNOW.score.blood <= 0) { 
                            SNOW.changeState('GameOver'); 
                            SNOW.postData();  
                            // SNOW.Sound.play_sound(3);  
                        }
                        break; 
                    } else {
                        // 得分
                        SNOW.Sound.play_sound(0);  
                        SNOW.entities[i].show = false;
                        SNOW.score.coins += SNOW.score.coinStep; 
                        var level = ~~(SNOW.score.coins / 10); 
                        var bg = SNOW.gradients[level % 4]; 
                        SNOW.bg_grad = bg;
                        SNOW.Speed = level + 1; 
                        break;
                    } 
                }
            } 
        }     
    }

    this.render = function () {
        SNOW.Draw.text('SCORE '+ SNOW.score.coins, 100, 20, 15, 'orange'); 
        SNOW.Draw.rect(SNOW.WIDTH - 130, 8, 42, 12, "white"); // bg
        SNOW.Draw.rect(SNOW.WIDTH - 129, 9, ~~(40*SNOW.score.blood/100), 10, "orange");
        SNOW.Draw.text('HP' , SNOW.WIDTH - 146, 20, 15, 'orange');
    }
}
 
window.GameOver = function () {
    var play = false;  
    this.init = function () { 
        var that = this;
        play = false;
        var gameoverInterval; 
        gameoverInterval = setInterval(function () {
            clearInterval(gameoverInterval);
            that.banner = new Image();
            that.banner.src = "images/top.png";  
            play = true;
        }, 500); 
        SNOW.Sound.removeEvent();
    }

    this.update = function () {  
        if (SNOW.Input.tapped && play == true) {  
            var x = SNOW.Input.x ;
            var y = SNOW.Input.y; 
            if((SNOW.isNotMobile && (x > 0.65 && x < 0.753) && (y > 0.538 && y < 0.641) ) ||  (!SNOW.isNotMobile) ){  
                SNOW.GC(); 
                SNOW.changeState('Splash');
            }  
        } 
    } 

    this.render = function () {
        if (this.banner) {
            SNOW.Draw.Image(this.banner, SNOW.WIDTH / 2 - 165, SNOW.HEIGHT / 2 - 120);
            
            var vx = SNOW.WIDTH / 2 - 95;
            var vy = SNOW.HEIGHT / 2 - 44;
            var pst = 18;
            var l = SNOW.rankings.length
            SNOW.Draw.text(SNOW.score.coins, SNOW.WIDTH / 2 + 160, SNOW.HEIGHT / 2 - 170 + 125, 15, 'black');
            if (l !== 0) {
                for (var i = 0;i<l;i++){ 
                    SNOW.Draw.text(SNOW.rankings[i].userName, vx, vy, 15, 'black');
                    SNOW.Draw.text(SNOW.rankings[i].userScore, vx + 100, vy, 15, 'black');
                    vy += pst;
                }  
            } 
        }
    }
}