 
var soundAry = ['wing', 'point','hit','die'];
var channel_max = 10; //频道数量 
var audios = [];
var event = new MouseEvent('click');
for (a = 0,lenth = soundAry.length; a < lenth; a++){   
    var audioElement = document.createElement('audio');
    audioElement.setAttribute("id", soundAry[a]);
    audioElement.setAttribute('src', 'music/' + soundAry[a] +'.mp3')
    audioElement.load();  
    audios.push(audioElement);
    document.body.appendChild(audios[a]);
     
}

/**
 * 找到一个未被占用的频道，并且设置来源播放。
 * @param {*} s 播放源
 */
function play_sound(e) { 
    var playPromise = document.getElementById(SNOW.sound).play();
    if (playPromise !== undefined) {
        playPromise.then(function () {
            console.log("Automatic playback stared~!")
        }).catch(function (error) { 
            console.log("Automatic playback failed");
            console.log(playPromise);
        });
    }  
}