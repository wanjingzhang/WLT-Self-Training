 
var Sound = function() {
     this.soundAry = ['wing', 'point', 'hit', 'die'],
     this.channel_max = 10, //频道数量 
     this.audios = [],
     this.event = new MouseEvent('click'),
     this.init = function () {
         console.log('this.Sound init');
         for(a = 0, lenth = this.soundAry.length; a<lenth; a++){
            var audioElement = document.createElement('audio');
             audioElement.setAttribute("id", this.soundAry[a]);
            //  audioElement.setAttribute('loop', true);
             audioElement.setAttribute('src', 'music/' + this.soundAry[a] + '.mp3');
             
            //  audioElement.setAttribute('muted', true);
             audioElement.muted = true;
             audioElement.load(); 
             this.audios.push(audioElement);
             audioElement.addEventListener('ended', function _listener (e) {
                 console.log('this.Sound audioEnded');
                 console.log(e.target.src);
                 e.currentTarget.currentTime = 1; 
                 //  e.target.setAttribute('muted', true);
                 e.target.muted = true;
                 e.target.play();
                 e.target.removeEventListener('ended', _listener,true);
             },true);
             document.body.appendChild(this.audios[a]); 
             
         } 
    },
    this.initPlay = function () {
         console.log('this.Sound initPlay ');
         var a = this.soundAry.length;
         while (a--) {  
            this.audios[a].play(); 
        }
    },
    this.audioEnded = function (e) {
        
    },
/**
 * 找到一个未被占用的频道，并且设置来源播放。
 * @param {*} s 播放源
 */
    this.play_sound = function (s) {  
         var current = this.audios[s];
         if (current.muted != false) {
             current.currentTime = 0;
            //current.setAttribute('muted', false); 
             console.log(current);
             current.muted = false;
             
         }
         
         
        // var playPromise = document.getElementById(s).play();
        // if (playPromise !== undefined) {
        //     playPromise.then(function () {
        //         console.log("Automatic playback stared~!")
        //     }).catch(function (error) {
        //         console.log("Automatic playback failed");
        //         console.log(playPromise);
        //     });
        // }
    } 
}



 

