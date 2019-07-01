// scene opening
window.Input = function () { 
    this.init = function () {
        SNOW.entities = []; 
        SNOW.entities.push(new SNOW.Nameinput(SNOW.WIDTH / 2, SNOW.HEIGHT / 2, 600, 224));
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
        if (SNOW.level < 3) { 
            SNOW.level++;
            SNOW.Speed++;  
        }    
    }

    this.update = function () { 
        if (SNOW.Input.tapped) {
            SNOW.changeState('Play');
            SNOW.Input.trapped = false;
        }
    }

    this.render = function () { 
        SNOW.Draw.Image(this.banner, ~~((SNOW.WIDTH - this.banner.width) / 2), ~~((SNOW.HEIGHT - this.banner.height) / 2)); 
        SNOW.Draw.text('LEVEL ' + SNOW.level, SNOW.WIDTH / 2, SNOW.HEIGHT / 2, 12, 'black');
    }
}
 
/**
 * scene play 开始游戏
 */
window.Play = function () {
    this.init = function () { 
        
        SNOW.entities = [];
        // Add entities
        SNOW.entities.push(new SNOW.Cloud(30, ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Cloud(~~(Math.random() * (SNOW.WIDTH * 2)), ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.entities.push(new SNOW.Cloud(~~(Math.random() * (SNOW.WIDTH * 3)), ~~(Math.random() * SNOW.HEIGHT / 2)));
        SNOW.sled = new SNOW.Sled(100, 92); 
        SNOW.lock = new SNOW.Lock(SNOW.WIDTH, SNOW.HEIGHT - 120);
        
        SNOW.entities.push(new SNOW.Snow());  

        // 设置
        var i = 3;
        SNOW.diamonds = [];
        while (i--) {
            var diamond = new SNOW.Diamond(SNOW.WIDTH, SNOW.HEIGHT - 120, i);
            SNOW.diamonds.push( diamond );
            SNOW.entities.push( diamond );  
        } 
        
        SNOW.entities.push(new SNOW.Stone(SNOW.WIDTH, SNOW.HEIGHT -80,20 ));
        SNOW.entities.push(new SNOW.Stone(SNOW.WIDTH + 50, SNOW.HEIGHT - 80, 20));
         
        SNOW.entities.push(SNOW.lock);
        SNOW.entities.push(SNOW.sled);
        SNOW.entities.push(new SNOW.Tree(Math.random() , SNOW.HEIGHT - 140));
        SNOW.entities.push(new SNOW.Tree(Math.random() + 50, SNOW.HEIGHT - 140));
        SNOW.entities.push(new SNOW.Tree(Math.random() + 100, SNOW.HEIGHT - 140)); 
        
        SNOW.entities.push(new SNOW.Route(0, SNOW.HEIGHT - 80  , SNOW.WIDTH ));  
        var i = SNOW.entities.length;
        while (i--) {
            SNOW.entities[i].init();
        }  
        
        console.log(SNOW.entities);
 
    }  

    this.update = function () {  
        if (!SNOW.diamonds[0].show && !SNOW.diamonds[1].show && !SNOW.diamonds[2].show) {
            SNOW.distance.current++;
            console.log( "current=" + SNOW.distance.current );
            var i = 3;  
            while (i--) { 
                SNOW.diamonds[i].respawn();  
            } 
            if (SNOW.distance.current > (SNOW.distance.step / 2) && SNOW.hp.locks > 0) {
                SNOW.lock.respawn();
                // console.log('SNOW.distance.current=' + SNOW.distance.current + "show Lock ~~");
            }
        }  
        if (SNOW.distance.current >= SNOW.distance.step && SNOW.level <= 3 && SNOW.hp.blood > 0) { // 大于最多屏， 升级一次
            if (SNOW.level === 3) {
                // 第三关过完结束上传游戏数据  
                SNOW.changeState('GameOver',true);
                SNOW.postData();
                SNOW.resetGame();
            } else { 
                SNOW.changeState('Splash');
                SNOW.resetGame(SNOW.level);
            } 
        } 

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
                    switch (SNOW.entities[i].type) {
                        case 'stone':
                            SNOW.entities[i].show = false;
                            SNOW.hp.blood -= SNOW.hp.bloodStep;  
                            SNOW.Sound.play_sound(1); 
                            if (SNOW.hp.blood <= 0) { 
                                SNOW.changeState('GameOver'); 
                                SNOW.postData();  
                                // SNOW.Sound.play_sound(3);  
                            }
                            break;
                        case 'diamond':
                            // 得分
                            SNOW.Sound.play_sound(0);  
                            SNOW.entities[i].show = false;
                            SNOW.score.coins += SNOW.score.coinStep;  
                            break;  
                        case 'lock':
                            SNOW.entities[i].show = false;
                            SNOW.hp.blood > 100 ?
                            SNOW.hp.blood += SNOW.hp.bloodStep:null;
                    }
 
                }
            } 
        }     
    }

    this.render = function () {
        SNOW.Draw.text('SCORE '+ SNOW.score.coins, 100, 20, 15, 'orange'); 
        // SNOW.Draw.rect(SNOW.WIDTH - 130, 8, 42, 12, "white"); // bg
        // SNOW.Draw.rect(SNOW.WIDTH - 129, 9, ~~(40*SNOW.hp.blood/100), 10, "orange");
        // SNOW.Draw.text('HP' , SNOW.WIDTH - 146, 20, 15, 'orange');
    }
}
 
window.GameOver = function (com) {
    var play = false;  
    this.init = function () { 
        var that = this;
        play = false;
        var gameoverInterval; 
        gameoverInterval = setInterval(function () {
            clearInterval(gameoverInterval);
            that.banner = new Image();
            if (com === true) {
                that.banner.src = "images/com.png";  
            } else {
                that.banner.src = "images/top.png";   
            }
            
            play = true;
        }, 500); 
        SNOW.Sound.removeEvent();
    }

    this.update = function () {  
        if (SNOW.Input.tapped && play == true) {  
            var x = SNOW.Input.x ;
            var y = SNOW.Input.y;  
            if( SNOW.isNotMobile && (x > 0.65 && x < 0.753) && (y > 0.538 && y < 0.641)  ){  
                SNOW.GC(); 
                SNOW.changeState('Splash');
                SNOW.resetGame(-1);
            } else if (!SNOW.isNotMobile) {
                SNOW.GC();
                SNOW.changeState('Splash');
                SNOW.resetGame(-1);
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