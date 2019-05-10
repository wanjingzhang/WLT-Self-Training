SNOW.Flake = function (y) {
    this.x = Math.round(Math.random() * SNOW.WIDTH);
    this.y = -10 + y;
    this.drift = Math.random();
    this.speed = Math.round(Math.random() * 2) + 1;
    this.width = Math.random() * 3;
}

SNOW.Snow = function () {
    this.init = function () {
        SNOW.snow = [];
        for (var i = 0; i < SNOW.snowMax; i++) {
            SNOW.snow.push(new SNOW.Flake(Math.round((i * 50) * Math.random())));
        }
        console.log("SNOW.snow =" + SNOW.snow);

    }

    this.update = function () {
        for (var i = 0; i < SNOW.snowMax; i++) {
            SNOW.snow[i].y += SNOW.snow[i].speed;
            if (SNOW.snow[i].y > SNOW.HEIGHT)
                SNOW.snow[i].y = -5;
            SNOW.snow[i].x += SNOW.snow[i].drift;
            if (SNOW.snow[i].x > SNOW.WIDTH)
                SNOW.snow[i].x = 0;
        }
    }

    this.render = function () {
        for (var i = 0; i < SNOW.snowMax; i++) {
            SNOW.Draw.circle(SNOW.snow[i].x, SNOW.snow[i].y, SNOW.snow[i].width, "rgb(255,255,255)");
        }
    }
}