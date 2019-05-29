
var soundJump = document.getElementById('soundJump');
var soundScore = new Audio('music/point.ogg');
var soundHit = new Audio('music/hit.ogg');
var soundDie = new Audio('music/die.ogg');
var soundSwoosh = new Audio('music/swooshing.ogg');

var channel_max = 10; //频道数量
var audiochannels = new Array();
for (a = 0; a < channel_max; a++){
    audiochannels[a] = new Array();
    audiochannels[a]['channel'] = new Audio();
    audiochannels[a]['finished'] = -1;
    console.log("audio", a, audiochannels[a]['channel'] );
}

/**
 * 找到一个未被占用的频道，并且设置来源播放。
 * @param {*} s 播放源
 */
function play_sound(s) {
    console.log(s ,'playsound');
    for (a = 0; a < channel_max; a++){
        var thistime = new Date();
        if (audiochannels[a]['finished'] < thistime.getTime()) { //频道播放完了吗
            audiochannels[a]['finished'] = thistime.getTime() + s.duration * 1000;
            audiochannels[a]['channel'].src = s.src;
            audiochannels[a]['channel'].load();
            var playPromise = audiochannels[a]['channel'].play();
            if (playPromise !== undefined) {
                playPromise.then(function () {
                    console.log("Automatic playback stared~!")
                }).catch(function (error) {
                    console.log("Automatic playback failed")
                });
            }
            break;
        }
    }
}