var pano = Bone.extend({}, Bone.Events, {
    init: function (stage) {
        var _self = this;

        this.stage = stage;

        var starSky = new C3D.Sprite();
        starSky.name('starSky').position(0, 0, 0).rotation(0, 0, 0).update();
        var _starMax = 100;
        for (var i = 0; i < _starMax; i++) {
            var _lon = model.random(0, 360);
            var _lat = model.random(-80, 80);
            var _l = model.random(1000, 3000);
            var _alon = _lon / 180 * Math.PI;
            var _alat = _lat / 180 * Math.PI;
            var _x = Math.cos(_alat) * _l * Math.sin(_alon);
            var _y = Math.sin(_alat) * _l;
            var _z = -Math.cos(_alat) * _l * Math.cos(_alon);

            var _p = new C3D.Plane();
            _p.size(34, 34).sort('Y','X','Z').position(_x, _y, _z).rotation(_lat, -_lon, 0).material({
                image: './images/star.png',
                bothsides: false,
            }).update();

            // var _p = C3D.create({
            //     type: 'sprite', position: [_x, _y, _z], rotation: [0, -_lon, 0], children: [
            //         {
            //             type: 'plane', rotation: [_lat, 0, 0], size: [34, 34], material: [{
            //             image: './images/star.png',
            //             bothsides: false,
            //         }]
            //         }
            //     ]
            // });
            starSky.addChild(_p);
        }
        this.stage.addChild(starSky);

        setInterval(function () {
            var _star = starSky.children[Math.floor(Math.random() * _starMax)];
            JT.kill(_star);
            JT.fromTo(_star, 0.5, {alpha: 1}, {
                alpha: 0, yoyo: true, repeat: 1, onUpdate: function () {
                    this.target.updateV();
                }
            })
        }, 1000 / 20);


        var actorData = [
            {
                name: 'p1', lon: 180, lat: -35,
                actor: {w: 161, h: 166, x: 0, y: 0, url: 'p1.png'},
                info: {w: 161, h: 121, x: -120, y: 60, url: 'p1t.png'}
            },
            {
                name: 'p2', lon: 220, lat: 30,
                actor: {w: 179, h: 171, x: 0, y: 0, url: 'p2.png'},
                info: {w: 161, h: 122, x: -120, y: 60, url: 'p2t.png'}
            },
            {
                name: 'p3', lon: 40, lat: 20,
                actor: {w: 166, h: 158, x: 0, y: 0, url: 'p3.png'},
                info: {w: 244, h: 186, x: 100, y: 50, url: 'p3t.png'}
            },
            {
                name: 'p4', lon: 140, lat: 10,
                actor: {w: 154, h: 163, x: 0, y: 0, url: 'p4.png'},
                info: {w: 201, h: 147, x: -70, y: 80, url: 'p4t.png'}
            },
            {
                name: 'p5', lon: 80, lat: -25,
                actor: {w: 152, h: 154, x: 0, y: 0, url: 'p5.png'},
                info: {w: 196, h: 164, x: 130, y: 50, url: 'p5t.png'}
            },
            {
                name: 'p6', lon: 260, lat: -30,
                actor: {w: 156, h: 171, x: 0, y: 0, url: 'p6.png'},
                info: {w: 166, h: 142, x: -70, y: 80, url: 'p6t.png'}
            },
            {
                name: 'p7', lon: 300, lat: 20,
                actor: {w: 244, h: 161, x: 0, y: 0, url: 'p7.png'},
                info: {w: 202, h: 126, x: 120, y: 80, url: 'p7t.png'}
            },
        ];
        var actors = new C3D.Sprite();
        actors.name('actors').position(0, 0, 0).update();
        var _len = actorData.length;
        $.each(actorData, function (i, obj) {
            var _data = obj;
            var _lon = _data.lon;
            var _lat = _data.lat;
            var _l = 800;
            var _alon = _lon / 180 * Math.PI;
            var _alat = _lat / 180 * Math.PI;
            var _x = Math.cos(_alat) * _l * Math.sin(_alon);
            var _y = Math.sin(_alat) * _l;
            var _z = -Math.cos(_alat) * _l * Math.cos(_alon);
            var _item = C3D.create({
                type: 'sprite',
                name: _data.name,
                position: [_x, _y, _z],
                rotation: [0, -_lon, 0],
                scale: [2],
                children: [
                    {
                        type: 'plane',
                        name: 'actor',
                        position: [_data.actor.x, _data.actor.y, 0],
                        size: [_data.actor.w, _data.actor.h],
                        material: [{image: './images/' + _data.actor.url, bothsides: false}],
                    },
                    {
                        type: 'plane',
                        name: 'info',
                        // position: [_data.info.x, _data.info.y, 10],
                        scale: [0, 0, 1],
                        size: [_data.info.w, _data.info.h],
                        visibility: [{alpha: 0}],
                        material: [{image: './images/' + _data.info.url, bothsides: false}],
                    },
                ]
            });

            JT.to(_item, 3, {
                y: '+=50',
                ease: JT.Quad.InOut,
                repeat: -1,
                yoyo: true,
                delay: Math.random() * 3,
                onUpdate: function () {
                    this.target.updateT();
                }
            });

            _item.on('touchend', function () {
                if (Math.abs(gesture.dx) > 10 || Math.abs(gesture.dy) > 10) return;
                _self.trigger('item', i);
            });
            _item.r0 = _lon;
            _item.data = _data;

            actors.addChild(_item);
        });
        this.stage.addChild(actors);


        var otherData = [
            {w: 136, h: 136, url: 'other1.png'},
            {w: 95, h: 104, url: 'other2.png'},
            {w: 111, h: 108, url: 'other3.png'},
            {w: 103, h: 79, url: 'other4.png'},
            {w: 80, h: 75, url: 'other5.png'},
        ];
        var others = new C3D.Sprite();
        others.name('others').position(0, 0, 0).update();
        var _len = otherData.length;
        for (var i = 0, _max = 5; i < _max; i++) {
            var _id = i % _len;
            var _data = otherData[_id];
            var _lon = model.random(0, 360);
            var _lat = model.random(30, -30);
            var _l = 1600;
            var _alon = _lon / 180 * Math.PI;
            var _alat = _lat / 180 * Math.PI;
            var _x = Math.cos(_alat) * _l * Math.sin(_alon);
            var _y = Math.sin(_alat) * _l;
            var _z = -Math.cos(_alat) * _l * Math.cos(_alon);
            var _item = C3D.create({
                type: 'plane',
                size: [_data.w, _data.h],
                position: [_x, _y, _z],
                rotation: [0, -_lon, 0],
                scale: [2],
                material: [{image: './images/' + _data.url, bothsides: false}],
            });

            others.addChild(_item);
        }
        this.stage.addChild(others);


        var home = C3D.create({
            type: 'plane',
            size: [360, 1060],
            position: [0, 0, -800],
            scale: [2],
            material: [{image: './images/home.png', bothsides: false}]
        });
        this.stage.addChild(home);

        var curve = C3D.create({
            type: 'plane',
            size: [2551, 304],
            position: [0, -600, -800],
            scale: [2],
            material: [{image: './images/curve.png', bothsides: false}]
        });
        this.stage.addChild(curve);

    },
});
