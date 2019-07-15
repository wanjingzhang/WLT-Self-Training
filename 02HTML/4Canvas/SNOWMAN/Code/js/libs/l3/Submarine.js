SNOW.Submarine = function (width, height) {
    this.init = function () {
        this.img = new Image();
        this.img.src = "images/l3/submarine.svg";
        this.width = 100;
        this.height = 67;
        this.disWid = 420;
        this.disHei = 282;

        this.gravity = 0.25,
        this.ix = 0;
        this.iy = 0;
        this.fr = 0;
        this.initialVy = SNOW.HEIGHT - 100;
        this.vy = SNOW.HEIGHT - 120; //y position
        this.oldVx = 50;
        this.vx = this.oldVx;
        this.jump = - 80; //jump height
        this.velocity = 0;
        this.rotation = 0;
        this.play = false;
        this.type = 'sled';

        this.step = 0;
        this.amplitude = 0.2;
    }

    this.update = function () {
        if (SNOW.Input.tapped && !this.play) {
            // 如果在初始状态下，激活跳起
            this.play = true;
            TweenMax.to(this, 0.5, {
                vy: ~~(this.vy + this.jump),
                onComplete: function (e) {

                    TweenMax.to(this.target, 0.5, {
                        vy: this.target.initialVy,
                        onComplete: function () {
                            this.target.play = false;
                        }
                    })
                }
            });
            SNOW.Sound.play_sound(0);
        }
    }
    this.render = function () {
        SNOW.Draw.Sprite(this.img, this.ix, this.iy, this.disWid, this.disHei, this.vx, this.vy, this.width, this.height, this.rotation);
    }
}