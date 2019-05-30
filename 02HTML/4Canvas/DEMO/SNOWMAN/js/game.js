

// scene opening
window.Splash = function () {
    this.banner = new Image(); 
    if (SNOW.isOK()) {
        this.banner.src = "images/splash.png"; 
    }
    else {
        this.banner.src = "images/app_rotate_to_play.png"; 
    }
    
    this.init = function () {
        SNOW.entities = [];
        SNOW.bg_grad = "day";
        SNOW.score.taps = 0;
        SNOW.score.coins = 0; 
        SNOW.score.blood = 100; 

        for (var i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].init();
        }
    }

    this.update = function () {
        for (i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].update();
        }
        if (SNOW.Input.tapped) {
            SNOW.changeState('Input');
            SNOW.Input.trapped = false;
        }
    }

    this.render = function () { 
        SNOW.Draw.Image(this.banner, (SNOW.WIDTH - this.banner.width) / 2, (SNOW.HEIGHT - this.banner.height) / 2); 
    }
}

// scene opening
window.Input = function () {
    this.banner = new Image(); 
    this.banner.src = "images/name.png"; 
    this.init = function () {
        SNOW.entities = []; 

        for (var i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].init();
        }
    } 

    this.update = function () {
        for (i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].update();
        } 

        if (SNOW.Input.tapped) {
            SNOW.changeState('Play');
            SNOW.Input.trapped = false;
        }
    }

    this.render = function () {
        SNOW.Draw.Image(this.banner, (SNOW.WIDTH - this.banner.width) / 2, (SNOW.HEIGHT - this.banner.height) / 2);
    }
}

 
/**
 * scene play 开始游戏
 */
window.Play = function () {
    this.init = function () { 
        SNOW.sled = new SNOW.Sled( 100  ,  92  );

        // Add entities
        SNOW.entities.push(new SNOW.Cloud(30, ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Cloud(~~(Math.random() * (SNOW.WIDTH * 2)), ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Cloud(~~(Math.random() * (SNOW.WIDTH * 3)), ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Snow());
        for (i = 0; i < 2; i += 1) {
            SNOW.entities.push(new SNOW.Route(SNOW.WIDTH * i, SNOW.HEIGHT - 80  , SNOW.WIDTH ));
        }

        SNOW.entities.push(new SNOW.Tree(Math.random() , SNOW.HEIGHT - 140));
        SNOW.entities.push(new SNOW.Tree(Math.random() + 50, SNOW.HEIGHT - 140));
        SNOW.entities.push(new SNOW.Tree(Math.random()  + 100, SNOW.HEIGHT - 140));

        SNOW.entities.push(SNOW.sled);
 
        SNOW.entities.push(new SNOW.Stone(SNOW.WIDTH, SNOW.HEIGHT -80,20 ));
        SNOW.entities.push(new SNOW.Stone(SNOW.WIDTH + 50 , SNOW.HEIGHT -80,20 ));

        SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2), SNOW.HEIGHT - 160));
        SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2 + 50), SNOW.HEIGHT - 170));
        SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2 + 100), SNOW.HEIGHT - 160));
 
        SNOW.entities.push(new SNOW.Diamond(50, SNOW.HEIGHT - 170 ));
        SNOW.entities.push(new SNOW.Diamond(100, SNOW.HEIGHT - 170));
        
        SNOW.entities.push(new SNOW.Tree(200, SNOW.HEIGHT - 80));
        SNOW.entities.push(new SNOW.Tree(250, SNOW.HEIGHT - 80));

        for (var i = 0; i < SNOW.entities.length; i += 1) {
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

        for (var i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].update();

            if (SNOW.entities[i].type === 'stone' && SNOW.entities[i].show === true) { 
                var hit = SNOW.Collides(SNOW.sled, SNOW.entities[i]);
                if (hit) { 
                    SNOW.entities[i].show = false;
                    SNOW.score.blood -= SNOW.score.bloodStep; 
                    console.log('失血' + SNOW.score.bloodStep);
                    play_sound(soundHit);
                    if (SNOW.score.blood <= 0) {
                        SNOW.changeState('GameOver');
                        console.log('游戏结束');
                        play_sound(soundDie);
                    }
                    break;
                }
            } else if (SNOW.entities[i].type === 'diamond' && SNOW.entities[i].show === true) { 
                var hitd = SNOW.Collides(SNOW.sled, SNOW.entities[i]);
                if (hitd) { 
                    // 得分
                    SNOW.entities[i].show = false;
                    SNOW.score.coins += SNOW.score.coinStep;
                    play_sound(soundScore); 
                    
                    var level = ~~(SNOW.score.coins / 10); 
                    var bg = SNOW.gradients[level % 4];
                     
                    SNOW.bg_grad = bg;
                    SNOW.Speed = level+1;
                    
                    console.log('得分：' + SNOW.score.coinStep);
                    console.log('level',level, 'speed',SNOW.Speed,'bg',bg);
                    break;
                }
            }
        }
    }

    this.render = function () {
        SNOW.Draw.text('得分：' + SNOW.score.coins, 10, 20, 15, 'black');
        SNOW.Draw.text('生命值：' + SNOW.score.blood, SNOW.WIDTH - 100 , 20, 15, 'black');
    }
}


window.GameOver = function () {
    this.getMedal = function () {
        var score = SNOW.score.coins;
        var medal;
        console.log(score)
        if (score <= 10)
            medal = "bronze";
        if (score >= 20)
            medal = "silver";
        if (score >= 30)
            medal = "gold";
        if (score >= 40)
            medal = "platinum";

        return medal;
    }

    // this.getHighScore = function () {
    //     var savedscore = getCookie("highscore");
    //     if (savedscore != "") {
    //         var hs = parseInt(savedscore) || 0;
    //         if (hs < SNOW.score.coins) {
    //             hs = SNOW.score.coins
    //             setCookie("highscore", hs, 999);
    //         }
    //         return hs;
    //     }
    //     else {
    //         setCookie("highscore", SNOW.score.coins, 999);
    //         return SNOW.score.coins;
    //     } 
    // } 

    this.init = function () {
        var that = this;
         
        setTimeout(function () { 
            that.banner = new Image();
            that.banner.src = "images/scoreboard.png";
            var m = that.getMedal();
            that.medal = new Image();
            that.medal.src = 'images/medal_' + m + '.png'; 

            that.replay = new Image();
            that.replay.src = "images/replay.png";  
        }, 500);
    }

    this.update = function () {
        console.log('update');
        if (SNOW.Input.tapped) {
            
            var x = SNOW.Input.x;
            var y = SNOW.Input.y;
            console.log('x'+ x);
             console.log('y'+y);

 
            if ((x >= -52 && x <= 52) &&
                (y >=340 && y <= 403) ){
                SNOW.changeState('Splash');
                
            }
            SNOW.Input.tapped = false;
        }
        // SNOW.bird.update();
    }

    this.render = function () {
        if (this.banner) {
            SNOW.Draw.Image(this.banner, SNOW.WIDTH/2 -118, SNOW.HEIGHT/2 - 140  + 10);
            SNOW.Draw.Image(this.medal, SNOW.WIDTH / 2 - 86, SNOW.HEIGHT / 2 - 130 + 113);
            SNOW.Draw.Image(this.replay, SNOW.WIDTH / 2 - 57, SNOW.HEIGHT / 2 - 140 + 210);
            SNOW.Draw.text(SNOW.score.coins, SNOW.WIDTH / 2 + 70, SNOW.HEIGHT / 2 - 140 + 125, 15, 'black');
            SNOW.Draw.text(SNOW.highscore, SNOW.WIDTH / 2 + 70, SNOW.HEIGHT / 2 - 140 + 168, 15, 'black');
            // SNOW.Draw.rect(SNOW.WIDTH / 2 - 57, (SNOW.HEIGHT / 2 - 140 + 210), 115, 70, 'red');
        }
    }
}