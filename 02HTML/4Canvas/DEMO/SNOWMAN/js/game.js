

// scene opening
window.Splash = function () {
    this.banner = new Image();
    if (FB.isOK()) {
        this.banner.src = "images/splash.png"; 
    }
    else {
        this.banner.src = "images/app_rotate_to_play.png"; 
    }
    

    this.init = function () {
        FB.entities = [];
        FB.score.taps = FB.score.coins = 0;

        for (var i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].init();
        }
    }

    this.update = function () {
        for (i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].update();
        }
        if (FB.Input.tapped) {
            FB.changeState('Play');
            FB.Input.trapped = false;
        }
    }

    this.render = function () { 
        FB.Draw.Image(this.banner, (FB.WIDTH - this.banner.width) / 2, (FB.HEIGHT - this.banner.height) / 2); 
    }
}


// scene play
window.Play = function () {
    this.init = function () {
        FB.sled = new FB.Sled();

        // Add entities
        FB.entities.push(new FB.Cloud(30, ~~(Math.random() * FB.HEIGHT / 2)));
        FB.entities.push(new FB.Cloud(~~(Math.random() * (FB.WIDTH * 2)), ~~(Math.random() * FB.HEIGHT / 2)));
        FB.entities.push(new FB.Cloud(~~(Math.random() * (FB.WIDTH * 3)), ~~(Math.random() * FB.HEIGHT / 2)));
        FB.entities.push(new FB.Snow());
        for (i = 0; i < 2; i += 1) {
            FB.entities.push(new FB.Route(FB.WIDTH * i, FB.HEIGHT - 60, FB.WIDTH + 3));
        }

        FB.entities.push(new FB.Tree(~~(Math.random() * FB.WIDTH), FB.HEIGHT - 120));
        FB.entities.push(new FB.Tree(~~(Math.random() * FB.WIDTH + 50), FB.HEIGHT - 120));
        FB.entities.push(new FB.Tree(~~(Math.random() * FB.WIDTH + 100), FB.HEIGHT - 120));

        FB.entities.push(FB.sled);

        FB.entities.push(new FB.Stone(FB.WIDTH, 20));

        FB.entities.push(new FB.Diamond(FB.WIDTH / 2, FB.HEIGHT - 120));

        for (var i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].init();
        }
    }


    this.update = function () {
        FB.distance += 1;
        var level = Math.floor(FB.distance / 2048);
        var levelUp = ((FB.distance % 2048) === 0 ? true : false);

        if (levelUp) {
            var bg = "day";
            var gradients = ["day", "dust", "neight", "dawn"];
            if (level < gradients.length) {
                bg = gradients[level];
            } else if (level === gradients.length) {
                bg = "day";
            }
            FB.bg_grad = bg;
            // console.log("levelUp. FB.bg_grad=" + bg);
        }

        //check for a collision if the user tapped on this game tick;
        var checkCollision = false;
        if (FB.Input.tapped) {
            FB.score.taps += 1;
            checkCollision = true;
        }

        for (var i = 0; i < FB.entities.length; i += 1) {
            FB.entities[i].update();

            if (FB.entities[i].type === 'stone' && FB.entities[i].show === true) { 
                var hit = FB.Collides(FB.sled, FB.entities[i]);
                if (hit) { 
                    FB.entities[i].show = false;
                    FB.score.blood -= FB.score.bloodStep; 
                    console.log('失血' + FB.score.bloodStep);

                    if (FB.score.blood <= 0) {
                        FB.changeState('GameOver');
                        console.log('游戏结束');
                    }
                    break;
                }
            } else if (FB.entities[i].type === 'diamond' && FB.entities[i].show === true) { 
                var hitd = FB.Collides(FB.sled, FB.entities[i]);
                if (hitd) { 
                    // 得分
                    FB.entities[i].show = false;
                    FB.score.coins += FB.score.coinStep;
                    
                    console.log('得分：' + FB.score.coinStep);
                    break;
                }
            }
        }
    }

    this.render = function () {
        FB.Draw.text('得分：' + FB.score.coins, 10, 20, 15, 'black');
        FB.Draw.text('生命值：' + FB.score.blood, FB.WIDTH - 100 , 20, 15, 'black');
    }
}


window.GameOver = function () {
    this.getMedal = function () {
        var score = FB.score.coins;
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

    this.getHighScore = function () {
        var savedscore = getCookie("highscore");
        if (savedscore != "") {
            var hs = parseInt(savedscore) || 0;
            if (hs < FB.score.coins) {
                hs = FB.score.coins
                setCookie("highscore", hs, 999);
            }
            return hs;
        }
        else {
            setCookie("highscore", FB.score.coins, 999);
            return FB.score.coins;
        }
    }

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
            that.highscore = that.getHighScore();
        }, 500);
    }

    this.update = function () {
        if (FB.Input.tapped) {
            var x = FB.Input.x;
            var y = FB.Input.y;

            if ((x >= 102.5 && x <= 102.5 + 115) && (y >= 260 && y <= 260 + 70)) {
                FB.changeState('Splash');
            }
            FB.Input.tapped = false;
        }
        // FB.bird.update();
    }

    this.render = function () {
        if (this.banner) {
            FB.Draw.Image(this.banner, FB.WIDTH/2 -118, 70);
            FB.Draw.Image(this.medal, FB.WIDTH / 2 - 86, 183);
            FB.Draw.Image(this.replay, FB.WIDTH / 2 - 57, 260);
            FB.Draw.text(FB.score.coins, FB.WIDTH / 2 + 70, 185, 15, 'black');
            FB.Draw.text(this.highscore, FB.WIDTH / 2 + 70, 225, 15, 'black');
        }
    }
}