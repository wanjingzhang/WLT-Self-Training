

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
    this.init = function () {
        SNOW.entities = []; 
        SNOW.entities.push(new SNOW.Nameinput(SNOW.WIDTH / 2, SNOW.HEIGHT / 2, 236, 90));
         
        for (var i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].init();
        }
    } 

    this.update = function () { 
        for (i = 0; i < SNOW.entities.length; i += 1) {
            SNOW.entities[i].update();
            if (SNOW.Input.tapped && SNOW.entities[i].type == 'Nameinput') {  
                    SNOW.changeState('Play'); 
                    SNOW.Input.trapped = false;  
            }
        }  
    }

    this.render = function () { 
        // SNOW.Draw.rect(SNOW.WIDTH /2 - this.banner.width/2, SNOW.HEIGHT/2 - this.banner.height, this.banner.width, this.banner.height, "red");
        // SNOW.Draw.rect(SNOW.WIDTH / 2 - 57, (SNOW.HEIGHT / 2 - 140 + 210), 115, 70, 'red');
    }
}

 
/**
 * scene play 开始游戏
 */
window.Play = function () {
    this.init = function () { 
        SNOW.entities = []; 
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

        SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2), SNOW.HEIGHT - 170));
        // SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2 + 50), SNOW.HEIGHT - 170));
        // SNOW.entities.push(new SNOW.Diamond(~~(SNOW.WIDTH / 2 + 100), SNOW.HEIGHT - 160));
 
        SNOW.entities.push(new SNOW.Diamond(50, SNOW.HEIGHT - 170 ));
        SNOW.entities.push(new SNOW.Diamond(100, SNOW.HEIGHT - 170));
        
        // SNOW.entities.push(new SNOW.Tree(200, SNOW.HEIGHT - 80));
        // SNOW.entities.push(new SNOW.Tree(250, SNOW.HEIGHT - 80));

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
                        SNOW.postData(); 
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
                    SNOW.Speed = level + 1;
                    
                    // post 得分 
                    
                    console.log('得分：' + SNOW.score.coinStep);
                    console.log('level',level, 'speed',SNOW.Speed,'bg',bg);
                    break;
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
         
        setTimeout(function () { 
            that.banner = new Image();
            that.banner.src = "images/top.png"; 

            play = true;
        }, 500);
    }

    this.update = function () { 

        if (SNOW.Input.tapped && play == true) {   
            // SNOW.changeState('Splash');   
            var x = SNOW.Input.x;
            var y = SNOW.Input.y;
            console.log(x,y);
            //SNOW.Input.tapped = false;
        }
        // SNOW.bird.update();
    }

    this.render = function () {
        if (this.banner) {
            SNOW.Draw.Image(this.banner, SNOW.WIDTH / 2 - 165, SNOW.HEIGHT / 2 - 120);
            
            var vx = SNOW.WIDTH / 2 - 95;
            var vy = SNOW.HEIGHT / 2 - 44;
            SNOW.Draw.text(SNOW.score.coins, SNOW.WIDTH / 2 + 160, SNOW.HEIGHT / 2 - 170 + 125, 15, 'black');
            for (var i = 0, len = SNOW.rankings.length; i < len; i++) { 
                SNOW.Draw.text(SNOW.rankings[i].userName, vx, vy, 15, 'black');
                SNOW.Draw.text(SNOW.rankings[i].userScore, vx + 100, vy, 15, 'black');
                vy += 18;
            };
             
            // SNOW.Draw.rect(SNOW.WIDTH / 2 - 57, (SNOW.HEIGHT / 2 - 140 + 210), 115, 70, 'red');
        }
    }
}