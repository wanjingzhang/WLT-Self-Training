var soundJump = new Audio('mp3/wing.ogg');
var soundScore = new Audio('mp3/point.ogg');
var soundHit = new Audio('mp3/hit.ogg');
var soundDie = new Audio('mp3/die.ogg');
var soundSwoosh = new Audio('mp3/swooshing.ogg');

var channel_max = 10; //频道数量
var audiochannels = new Array();
for (a = 0; a < channel_max; a++){
    audiochannels[a] = new Array();
    audiochannels[a]['channel'] = new Audio();
    audiochannels[a]['finished'] = -1;
}

/**
 * 找到一个未被占用的频道，并且设置来源播放。
 * @param {*} s 
 */
function play_sound(s) {
    for (a = 0; a < channel_max; a++){
        var thistime = new Date();
        if (audiochannels[a]['finished'] < thistime.getTime()) { //频道播放完了吗
            audiochannels[a]['finished'] = thistime.getTime() + s.duration * 1000;
            audiochannels[a]['channel'].src = s.src;
            audiochannels[a]['channel'].load();
            audiochannels[a]['channel'].play();
            break;
        }
    }
}