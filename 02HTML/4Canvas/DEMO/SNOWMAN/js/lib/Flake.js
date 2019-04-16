FB.Flake = function (y) {
    this.x = Math.round(Math.random() * FB.WIDTH);
    this.y = -10 + y;
    this.drift = Math.random();
    this.speed = Math.round(Math.random() * 2) + 1;
    this.width = Math.random() * 3;
}