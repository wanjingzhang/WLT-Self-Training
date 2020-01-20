var pano = Bone.extend({}, Bone.Events, {
    init: function (stage) {
        var _self = this;

        this.stage = stage;   

        var starSky = new C3D.Sprite();
        starSky.name('starSky').position(0, 0, 0).rotation(0, 0, 0).update();
        var _starMax = 48;
        for (var i = 0; i < _starMax; i++) {
            var _lon = model.random(0, 360);
            var _lat = model.random(-80, 80);
            var _l = model.random(1000, 2000);
            var _alon = _lon / 180 * Math.PI;
            var _alat = _lat / 180 * Math.PI;
            var _x = Math.cos(_alat) * _l * Math.sin(_alon);
            var _y = Math.sin(_alat) * _l;
            var _z = -Math.cos(_alat) * _l * Math.cos(_alon);

            var _p = new C3D.Plane();
            if (i < 25) {
                _p.size(113, 113).sort('Y','X','Z').position(_x, _y, _z).rotation(_lat, -_lon, 0).material({
                    image: './images/star1.png',
                    bothsides: false,
                }).update();
            } else if (i < 28){
                _p.size(112, 112).sort('Y', 'X', 'Z').position(_x, _y, _z).rotation(_lat, -_lon, 0).material({
                    image: './images/star2.png',
                    bothsides: false,
                }).update();
            } else {
                _p.size(107, 107).sort('Y', 'X', 'Z').position(_x, _y, _z).rotation(_lat, -_lon, 0).material({
                    image: './images/star3.png',
                    bothsides: false,
                }).update();
            } 
            starSky.addChild(_p);
        }
        this.stage.addChild(starSky);
        setInterval(function () {
            var _star = starSky.children[Math.floor(Math.random() * _starMax)];
            JT.kill(_star);
            JT.fromTo(_star, 0.5, { alpha: 1 }, {
                alpha: 0, yoyo: true, repeat: 1, onUpdate: function () {
                    this.target.updateV();
                }
            })
        }, 1000 / 20);

        var shoeShapedGoldSky = new C3D.Sprite();
        shoeShapedGoldSky.name('shoeShapedGoldSky').position(0, 0, 0).rotation(0, 0, 0).update();
        var _shoeShapedMax = 4;
        for (var i = 0; i < _shoeShapedMax; i++) {
            var _lon = model.random(0, 360);
            var _lat = model.random(-20, 40);
            var _l = model.random(900, 1200);
            var _alon = _lon / 180 * Math.PI;
            var _alat = _lat / 180 * Math.PI;
            var _x = Math.cos(_alat) * _l * Math.sin(_alon);
            var _y = Math.sin(_alat) * _l;
            var _z = -Math.cos(_alat) * _l * Math.cos(_alon);

            var _p = new C3D.Plane(); 
            _p.size(149, 105).sort('Y', 'X', 'Z').position(_x, _y, _z).rotation(_lat, -_lon, 0).material({
                image: './images/yb.png',
                bothsides: false,
            }).update(); 
            shoeShapedGoldSky.addChild(_p);
        }
        this.stage.addChild(shoeShapedGoldSky);


        var mainScenceData = [
            { w: 290, h: 290, lon: 20, lat: -32, url: 'm1.png' },
            // right bottom winds
            { w: 575, h: 401, lon:50, lat:40, url: 'm2.png' },
            { w: 783, h: 421, lon:30, lat:48, url: 'm4.png' },
            { w: 783, h: 426, lon: 60, lat: 52, url: 'm3.png' },
            // left bottom winds
            { w: 575, h: 401, lon: 330, lat: 42, url: 'm2.png' },
            { w: 783, h: 421, lon: 310, lat: 48, url: 'm4.png' },
            { w: 783, h: 426, lon: 330, lat: 54, url: 'm3.png' },

            // middle bottom winds
            { w: 783, h: 421, lon: 42, lat: 58, url: 'm4.png' },  
            { w: 303, h: 272, lon: 355, lat: 45, url: 'm5.png' },
            { w: 301, h: 301, lon: 280, lat: -16, url: 'm7.png' },

            // around winds
            { w: 783, h: 421, lon: 120, lat: 52, url: 'm4.png' },
            { w: 783, h: 426, lon: 150, lat: 44, url: 'm3.png' },
            
            { w: 783, h: 426, lon: 190, lat: 44, url: 'm3.png' },
            { w: 303, h: 272, lon: 220, lat: 50, url: 'm5.png' },

            { w: 783, h: 426, lon: 260, lat: 52, url: 'm3.png' },
            { w: 783, h: 421, lon: 240, lat: 44, url: 'm4.png' },
            // lantern
            { w: 351, h: 485, lon: 190, lat: -20, url: 'm6.png' },
            { w: 301, h: 301, lon: 220, lat: 26, url: 'm7.png' },

            //red cloud
            { w: 688, h: 335, lon: 335, lat: 14, url: 'm8.png' },
            { w: 688, h: 335, lon: 24, lat: 24, url: 'm8.png' },
            { w: 288, h: 140, lon: 190, lat: 20, url: 'm9.png' },
            { w: 288, h: 140, lon: 260, lat: -10, url: 'm9.png' },
            { w: 367, h: 221, lon: 40, lat: -18, url: 'm10.png' },
            { w: 367, h: 221, lon: 230, lat: 0, url: 'm10.png' },
            { w: 367, h: 221, lon: 120, lat: -28, url: 'm10.png' },

            // shoes-shaped coin
            { w: 149, h: 105, lon: 120, lat: -14, url: 'yb.png' },
            { w: 149, h: 105, lon: 340, lat: -10, url: 'yb.png' },
            { w: 149, h: 105, lon: 60, lat: -20, url: 'yb.png' },


            // top
            { w: 575, h: 401, lon: 40, lat: -52, url: 'm2.png' },
        ];
        var mainScence = new C3D.Sprite();
        mainScence.name('others').position(0, 0, 0).update();
        var _len = mainScenceData.length;
        for (var i = 0, _max = _len; i < _max; i++) {
            var _id = i % _len;
            var _data = mainScenceData[_id];
            var _lon = _data.lon;
            var _lat = _data.lat;
            var _l = 2000;
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
                material: [{ image: './images/' + _data.url, bothsides: false }],
            });

            mainScence.addChild(_item);
        }
        this.stage.addChild(mainScence); 


        var actorData = [
            {
                name: 'p1', lon: 310, lat: -25, nickname:"鼠",
                actor: { w: 236 , h: 260, x: 0, y: 0, url: 's1.png'},
                info: {w: 161, h: 121, x: -80, y: 80, url: 'p1t.png'}
            },
            {
                name: 'p2', lon: 310, lat: 20,nickname:"牛",
                actor: { w: 334, h: 277, x: 0, y: 0, url: 's2.png'},
                info: {w: 161, h: 122, x: -120, y: 80, url: 'p2t.png'}
            },
            {
                name: 'p3', lon: 270, lat: 5,nickname:"虎",
                actor: { w: 352 , h: 245, x: 0, y: 0, url: 's3.png'},
                info: {w: 244, h: 186, x: 100, y: 50, url: 'p3t.png'}
            },
            {
                name: 'p4', lon: 240, lat: -23,nickname:"兔",
                actor: { w: 299 , h: 300, x: 0, y: 0, url: 's4.png'},
                info: {w: 201, h: 147, x: -120, y: 90, url: 'p4t.png'}
            },
            {
                name: 'p5', lon: 240, lat: 17,nickname:"龙",
                actor: { w: 227, h: 330, x: 0, y: 0, url: 's5.png'},
                info: {w: 196, h: 164, x: 130, y: 50, url: 'p5t.png'}
            },
            {
                name: 'p6', lon: 200, lat: 0,nickname:"蛇",
                actor: { w: 308 , h: 284, x: 0, y: 0, url: 's6.png'},
                info: {w: 166, h: 142, x: -70, y: 80, url: 'p6t.png'}
            },
            {
                name: 'p7', lon: 160, lat: -20,nickname:"马",
                actor: { w: 295, h: 261, x: 0, y: 0, url: 's7.png'},
                info: {w: 202, h: 126, x: 120, y: 80, url: 'p7t.png'}
            },
            {
                name: 'p8', lon: 160, lat: 20,nickname:"羊",
                actor: { w: 365 , h: 296, x: 0, y: 0, url: 's8.png' },
                info: { w: 201, h: 147, x: -90, y: 90, url: 'p4t.png' }
            },
            {
                name: 'p9', lon: 120, lat: 5,nickname:"猴",
                actor: { w: 258 , h: 209, x: 0, y: 0, url: 's9.png' },
                info: { w: 196, h: 164, x: 160, y: 80, url: 'p5t.png' }
            },
            {
                name: 'p10', lon: 90, lat: -20,nickname:"鸡",
                actor: { w: 297 , h: 283, x: 0, y: 0, url: 's10.png' },
                info: { w: 166, h: 142, x: -80, y: 80, url: 'p6t.png' }
            },
            {
                name: 'p11', lon: 90, lat: 20,nickname:"狗",
                actor: { w: 275 , h: 269, x: 0, y: 0, url: 's11.png' },
                info: { w: 202, h: 126, x: 120, y: 80, url: 'p7t.png' }
            },
            {
                name: 'p12', lon: 60, lat: 0,nickname:"猪",
                actor: { w: 332 , h: 315, x: 0, y: 0, url: 's12.png' },
                info: { w: 202, h: 126, x: 140, y: 110, url: 'p7t.png' }
            }
        ];
        var actors = new C3D.Sprite();
        actors.name('actors').position(0, 0, 0).update();
        var _len = actorData.length;
        $.each(actorData, function (i, obj) {
            var _data = obj;
            var _lon = _data.lon;
            var _lat = _data.lat;
            var _l = 1400;
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

        var home = C3D.create({
            type: 'plane',
            size: [792 , 1632],
            position: [0, 0, -1000],
            scale: [1.3],
            material: [{ image: './images/home2.png', bothsides: false }]
        });
        this.stage.addChild(home);
        home.on("mouseover", function () {
            this.le.scale(1.1).update();
        });
        home.on("mouseout", function () {
            this.le.scale(1).update();
        });
        home.on("touchstart", function () {
            this.le.scale(1.8).update();
        });
        home.on("touchend", function () {
            this.le.scale(1).update();
        });
       

        // add cta event


        // var otherData = [
        //     { w: 301, h: 301, url: 'other1.png'},
        //     { w: 290, h: 290, url: 'other2.png'},
        //     { w: 107, h: 107, url: 'other3.png'},
        //     { w: 140, h: 140, url: 'other4.png'},
        //     { w: 575, h: 401, url: 'other5.png'},
        //     { w: 149, h: 105, url: 'other6.png'}
        // ];
        // var others = new C3D.Sprite();
        // others.name('others').position(0, 0, 0).update();
        // var _len = otherData.length;
        // for (var i = 0, _max = 5; i < _max; i++) {
        //     var _id = i % _len;
        //     var _data = otherData[_id];
        //     var _lon = model.random(0, 360);
        //     var _lat = model.random(30, -30);
        //     var _l = 1600;
        //     var _alon = _lon / 180 * Math.PI;
        //     var _alat = _lat / 180 * Math.PI;
        //     var _x = Math.cos(_alat) * _l * Math.sin(_alon);
        //     var _y = Math.sin(_alat) * _l;
        //     var _z = -Math.cos(_alat) * _l * Math.cos(_alon);
        //     var _item = C3D.create({
        //         type: 'plane',
        //         size: [_data.w, _data.h],
        //         position: [_x, _y, _z],
        //         rotation: [0, -_lon, 0],
        //         scale: [2],
        //         material: [{image: './images/' + _data.url, bothsides: false}],
        //     });

        //     others.addChild(_item);
        // }
        // this.stage.addChild(others); 

        // var curve = C3D.create({
        //     type: 'plane',
        //     size: [2551, 304],
        //     position: [0, -600, -800],
        //     scale: [2],
        //     material: [{image: './images/curve.png', bothsides: false}]
        // });
        // this.stage.addChild(curve);

    },
});
