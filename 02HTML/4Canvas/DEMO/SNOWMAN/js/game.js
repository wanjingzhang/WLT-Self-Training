

// scene opening
window.Splash = function () {
    this.banner = new Image();
    if (FB.isLandscape() && FB.isMobile.any()) {
        this.banner.src = "images/app_rotate_to_play.png"; 
    }
    else {
        this.banner.src = "images/splash.png";
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
                    // 失血
                    // FB.changeState('GameOver');
                    FB.entities[i].show = false;
                    FB.score.blood -= 20; 
                    console.log('失血');
                    break;
                }
            } else if (FB.entities[i].type === 'diamond' && FB.entities[i].show === true) { 
                var hitd = FB.Collides(FB.sled, FB.entities[i]);
                if (hitd) { 
                    // 得分
                    FB.entities[i].show = false;
                    FB.score.coins++;
                    
                    console.log('得分 共计：' + FB.score.coins);
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
        console.log(score);
    }

    this.init = function () {

    }

    this.update = function () {

    }

    this.render = function () {

    }
}