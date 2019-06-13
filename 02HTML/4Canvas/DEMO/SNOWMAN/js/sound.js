 
var Sound = function() {
     this.soundAry = ['wing', 'point', 'hit', 'die'],
     this.channel_max = 10, //频道数量 
     this.audios = [],
     this.event = new MouseEvent('click'),
     this._listener = function(e) {
             e.target.muted = true;
             e.target.play();
            //  console.log('ended' + e.target.src);
             //  e.target.removeEventListener('ended', _listener, true);
             //  e.target.addEventListener('ended', _listener, true);
         }
     this.init = function () { 
         for(a = 0, lenth = this.soundAry.length; a<lenth; a++){
            var audioElement = document.createElement('audio');
             audioElement.setAttribute("id", this.soundAry[a]); 
             audioElement.setAttribute('src', 'music/' + this.soundAry[a] + '.mp3'); 
             audioElement.load(); 
             this.audios.push(audioElement); 
             document.body.appendChild(this.audios[a]);   
         } 
    },
    this.initPlay = function () { 
        for (a = 0, lenth = this.soundAry.length; a < lenth; a++) { 
            this.audios[a].muted = true;
            this.audios[a].play();
        }
    }, 
    this.removeEvent = function () {
         for (a = 0, lenth = this.soundAry.length; a < lenth; a++) { 
             this.audios[a].removeEventListener('ended', this._listener, true);  
         } 
         },
    this.addEvent = function () {
        for (a = 0, lenth = this.soundAry.length; a < lenth; a++) {
            this.audios[a].addEventListener('ended', this._listener, true);
        }
    }
/**
 * 找到一个未被占用的频道，并且设置来源播放。
 * @param {*} s 播放源
 */
    this.play_sound = function (s) {  
         var current = this.audios[s];
         if (current.muted != false) {
             current.currentTime = 0;   
             current.muted = false;
             
         } 
    } 
}



 

