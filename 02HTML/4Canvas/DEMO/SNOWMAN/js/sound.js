 
var Sound = {
    soundAry: { wing: 12, point: 30, hit: 50, die: 62},
    channel_max: 10, //频道数量  
    audioElement: document.createElement('audio'),
    playing:false,

    init: function () {
        this.audioElement.setAttribute("id", 'acient');
        this.audioElement.setAttribute('src', 'music/acient.mp3')
        this.audioElement.load();
        this.audioElement.play(); 
        this.audioElement.muted = true; 
        this.audioElement.addEventListener('ended', Sound.audioEnded); 
        document.body.appendChild(this.audioElement); 
    },

    play_sound: function(t) { 
        this.audioElement.muted = false;
        this.audioElement.currentTime = t;
    },

    triggerPlay: function() {
        
        // 
        this.playing = true;
    }, 

    audioEnded: function() {
        this.audioElement.play();
        // this.audioElement.muted = true; 
    } 
}



 

