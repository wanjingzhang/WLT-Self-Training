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
        this.initialVy = SNOW.HEIGHT - 120;
        this.vy = SNOW.HEIGHT - 120; //y position
        this.oldVx = 50;
        this.vx = this.oldVx;
        this.jump = - 7.6; //jump height
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
            this.velocity = this.jump;
        } else if (this.play) {
            this.velocity += this.gravity;
            this.vy = ~~(this.vy + this.velocity);

            // 当挑起状态时 角色前进加速度
            if (this.vy < (this.initialVy + 20) && this.vx < (SNOW.WIDTH / 2)) {
                //在屏幕范围内
                this.vx += 1;
            }
            // 跳下回到原来状态则 恢复初始状态
            if (this.vy > this.initialVy) {
                this.vy = this.initialVy;
                this.play = false;
            }
            // SNOW.Sound.play_sound(0); 
        } else if (!this.play) {
            // 当不在点击状态 慢慢恢复到原来状态  
            this.vx > this.oldVx ? this.vx-- : null;
            // 上下位置加上正弦移动
            // this.step = this.step + this.amplitude + ~~(Math.cos(this.step)); 
            //this.vy = initialVy + (10 * ));
        }
    }
    this.render = function () {
        SNOW.Draw.Sprite(this.img, this.ix, this.iy, this.disWid, this.disHei, this.vx, this.vy, this.width, this.height, this.rotation);
    }
}