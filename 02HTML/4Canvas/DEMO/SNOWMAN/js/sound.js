
var soundJump = new Audio('music/wing.mp3');
var soundScore = new Audio('music/point.mp3');
var soundHit = new Audio('music/hit.mp3');
var soundDie = new Audio('music/die.mp3'); 

var channel_max = 10; //频道数量
var audiochannels = new Array();
for (a = 0; a < channel_max; a++){ 
    // audiochannels[a]['channel'] = new Audio();
    // audiochannels[a]['finished'] = -1;

    var audioElement = document.createElement('audio');
    audioElement.setAttribute("id", "audio"+a);
    document.body.appendChild(audioElement);
    audiochannels.push(audioElement);
    audiochannels[a]['finished'] = -1;
    audiochannels[a]['channel'] = audioElement;

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
            audiochannels[a]['channel'].volume = 1;
            var playPromise = audiochannels[a]['channel'].play();
            if (playPromise !== undefined) {
                playPromise.then(function () {
                    console.log("Automatic playback stared~!") 
                }).catch(function (error) {
                    // console.log The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.
                    // Auto-play was prevented
                    // Show a UI element to let the user manually start playback
                    console.log("Automatic playback failed");
                    console.log(playPromise);
                });
            }
            break;
        }
    }
}