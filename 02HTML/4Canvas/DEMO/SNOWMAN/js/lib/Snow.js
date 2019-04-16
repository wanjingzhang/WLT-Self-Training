FB.Snow = function () {
    this.init = function () {
        FB.snow = [];
        for (var i = 0; i < FB.snowMax; i++) {
            FB.snow.push(new FB.Flake(Math.round((i * 50) * Math.random())));
        }
        console.log("FB.snow =" + FB.snow);

    }

    this.update = function () {
        for (var i = 0; i < FB.snowMax; i++) {
            FB.snow[i].y += FB.snow[i].speed;
            if (FB.snow[i].y > FB.HEIGHT)
                FB.snow[i].y = -5;
            FB.snow[i].x += FB.snow[i].drift;
            if (FB.snow[i].x > FB.WIDTH)
                FB.snow[i].x = 0;
        }
    }

    this.render = function () {
        for (var i = 0; i < FB.snowMax; i++) {
            FB.Draw.circle(FB.snow[i].x, FB.snow[i].y, FB.snow[i].width, "rgb(255,255,255)");
        }
    }
}