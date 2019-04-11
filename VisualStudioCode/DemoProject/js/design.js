var windowSize = '';
var windowWidth = 0;
var actualSize = 0;
var newWindowSize;

$(document).ready(function (){
    loadHero();
    checkBrowserSize(); 
});

function checkBrowserSize() {
    windowWidth = window.outerWidth;
    var contentWidth = $('body').width();
    var sizeDiff = windowWidth - contentWidth;
    actualSize = windowWidth - sizeDiff;

    if (actualSize > 800) { newWindowSize = 'large'; }
    if (actualSize <= 800 && actualSize > 500) { newWindowSize = 'medium'; }
    if (actualSize <= 500) { newWindowSize = 'small'; }
    
    $('#h1').html(windowWidth + ' (' + contentWidth + '+' + sizeDiff + ') is' + newWindowSize);
}

function loadHero() {
    $('#hero').load('content/a_hero_content.html');
}

var elem = document.querySelector('expr');