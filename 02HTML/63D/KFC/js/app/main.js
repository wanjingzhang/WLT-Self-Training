var main = Bone.extend({}, Bone.Events, {
    init: function () {
        var _self = this;
        this.$main = $('#main');

        model.init();
        gesture.init(this.$main);


        this.stage = new C3D.Stage();
        this.stage.size(640, window.innerHeight).update();
        this.$main.append(this.stage.el);

        this.root = new C3D.Sprite();
        this.root.position(0, 0, -600).update();
        this.stage.addChild(this.root);

        pano.init(this.root);

        $(window).on('resize', function () {
            _self.resize();
        });
        this.resize();


        this.initControl();
    },

    drag: {lon: 0, lat: 0},
    aim: {lat: 0, lon: 0},
    fix: {lon: 0, lat: 0},
    lock: true,
    initControl: function () {
        var _self = this;
        gesture.on('move', function (obj) {
            if (!_self.lock) {
                _self.drag.lon = (_self.drag.lon - obj.ax * 0.2) % 360;
                _self.drag.lat = Math.max(-90, Math.min(90, _self.drag.lat + obj.ay * 0.2));
            }
        });

        var orienter = new Orienter();
        orienter.handler = function (obj) {
            _self.aim.lat = obj.lat;
            _self.aim.lon = -obj.lon;

            if (_self.lock) {
                _self.fix.lat = -_self.aim.lat;
                _self.fix.lon = -_self.aim.lon;
            }
        };
        orienter.init();

        this.animate = this.animate.bind(this);

        _self.animateOn();
    },

    animateOn: function () {
        this.lock = false;
        this.animate();
    },

    animateOff: function () {
        this.lock = true;
        if (this.animateId) cancelAnimationFrame(this.animateId);
    },

    animateId: null,
    animate: function () {
        this.animateId = requestAnimationFrame(this.animate);

        var _lon = (this.aim.lon + this.fix.lon + this.drag.lon) % 360;
        var _lat = (this.aim.lat + this.fix.lat + this.drag.lat) * 0.35;

        if (_lon - this.root.rotationY > 180) this.root.rotationY += 360;
        if (_lon - this.root.rotationY < -180) this.root.rotationY -= 360;
        this.root.rotationY += (_lon - this.root.rotationY) * 0.3;
        this.root.rotationX += (_lat - this.root.rotationX) * 0.15;
        this.root.updateT();

        this.checkDots(this.root.rotationY);
    },

    checkDots: function (ry) {
        var _ry = ry % 360;
        _ry = _ry < 0 ? _ry + 360 : _ry;
        for (var i = 0, l = this.root.actors.children.length; i < l; i++) {
            var _actor = this.root.actors.children[i];
            if (_actor.r0 > _ry - 30 && _actor.r0 < _ry + 30) {
                if (_actor.info.alpha == 0) {
                    JT.kill(_actor.info);
                    JT.to(_actor.info, 0.3, {
                        x:_actor.data.info.x, y:_actor.data.info.y, scaleX: 1, scaleY: 1, alpha:1, ease: JT.Quad.Out, onUpdate: function () {
                            this.target.updateT().updateV();
                        }
                    });
                }
            } else {
                if (_actor.info.alpha == 1) {
                    JT.kill(_actor.info);
                    JT.to(_actor.info, 0.3, {
                        x:0, y:0, scaleX: 0, scaleY: 0, alpha:0, ease: JT.Quad.Out, onUpdate: function () {
                            this.target.updateT().updateV();
                        }
                    });
                }
            }
        }
    },

    timeId: null,
    resize: function () {
        var _self = this;
        if (this.timeId) clearTimeout(this.timeId);
        this.timeId = setTimeout(function () {
            _self.stage.size(640, window.innerHeight).update();
        }, 100);
    },

});

main.init();