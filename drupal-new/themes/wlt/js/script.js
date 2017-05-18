(function($, Drupal) {
  //nav hamburger to change to x
  $(document).on('touchstart click', '.navbar-toggle', function(e){
    if ( $('.navbar-collapse').attr('aria-expanded') === 'true' ) {
        $('.navbar-default').addClass('hamburger-active');
        $('body').css('position','fixed');//bootstrap stop background moving 
    } else {
        $('.navbar-default').removeClass('hamburger-active');
        $('body').css('position','static');//bootstrap stop background moving 
    }
  });
  //---------- end nav hamburger to change to x


  //wrap table in div to add scroll on small devices 
  $('table').wrapAll('<div class="table-responsive"></div>');
  //----------- end wrap table in div to add scroll on small devices 

  /** navigation scroll from black to white**/
  // set scroll to value
  var navChange = 200;
  var navBar = $('.navbar-default');

  $(window).on('scroll',function() {
    var stop = Math.round($(window).scrollTop());
    if (stop > navChange) {
      navBar.addClass('nav-change');
    } else {
      navBar.removeClass('nav-change');
    }
  });
  /** ----- end navigation scroll from black to white**/

  var mq = window.matchMedia('(min-width:930px)');
  if (mq.matches) {
    if ( $('.media-contacts-block').length ) {
      //media section to scroll with page
      var socialIconsTop = $('.media-contacts-block').offset(),
          socialIconsTopNew = Number(socialIconsTop.top) - 80,
          socialIconsWidth = $('.media-contacts-block').width();
      
      $(window).on('scroll',function() {
        var windowTop = $(this).scrollTop(),
            socialIconsMaxScroll = $(document).outerHeight() - (Number($("#block-letstalk").outerHeight() + $('.footer').outerHeight()) + Number(180)) - $('.media-contacts-block').outerHeight();//180 is margin above footer and fixed top position
        if ( windowTop >= socialIconsTopNew && windowTop < socialIconsMaxScroll) {
          $('.media-contacts-block').removeClass('absolute').addClass('fixed').css({'left':socialIconsTop.left + 'px', 'width':socialIconsWidth + 'px'});
        } else if (windowTop >= socialIconsMaxScroll) {
            $('.media-contacts-block').removeClass('fixed').addClass('absolute').css({left:'auto'})
        } else {
          $('.media-contacts-block').removeClass('fixed').attr('style','');
        }
      });
    }
  }
  //---------- end media section to scroll with page     

  //hover states for locations
  // Set up elements to be array
  var mapLinks = [].slice.call(document.querySelectorAll('.map-link'));

  //Loop through array and add listeners
  for(var k=0; k<mapLinks.length; k++) {
    mapLinks[k].addEventListener('click', topLinkClick, false);
    mapLinks[k].addEventListener('touchstart', topLinkClick, false);
  }

  function topLinkClick(index) {
    //this finds the index of the object in the above array. 
    var indexTarget = (index.target) ? mapLinks.indexOf(index.target) : index;
    if(indexTarget == 0){
      mapSwap('locations-americas', 'americas-location-image');
    }
    if(indexTarget == 1){
      mapSwap('locations-emea', 'emea-location-image');
    }
    if(indexTarget == 2){
      mapSwap('locations-apac', 'apac-location-image');
    }
  }

  function mapSwap(address, locationMap) {
    $('.display-information').removeClass('display-information');
    $('#' + address).add('.' + locationMap).addClass('display-information');
  }
  //------------- end hover states for locations


  //columns for hr form
  $('.yamlform-submission-our-supplier-network-form .form-item').wrapAll('<div class="supplier-form"></div>');
  $('.yamlform-submission-contact-hr-form .form-item:lt(4)').wrapAll('<div class="left"></div>');
  $('.yamlform-submission-contact-hr-form .form-item').slice(4,7).wrapAll('<div class="right"></div>');

  //columns for sitemap
  $('.content > ul > li').slice(0,2).wrapAll('<div class="left col"></div>');
  $('.content > ul > li').slice(0,1).wrapAll('<div class="middle col"></div>');
  $('.content > ul > li').slice(0,3).wrapAll('<div class="right col"></div>');

  var titleElement = $(".copy").find("h1")[0];
  if(titleElement) {
    var titleText = titleElement.innerHTML;
    titleElement.innerHTML = "";
    titleElement.style.opacity = '1.0';
  }

  var showText = function (target, message, index, interval) {   
    if(titleElement) {
      if (index < message.length) {
        var messageIndex = message[index];
        $(titleElement).append(messageIndex);
        index++;
        setTimeout(function() {
          showText(target, message, index, interval);
        }, interval);
      }
    }
  }

  function whichTransitionEvent() {
    var t,
        el = document.createElement("fakeelement");

    var transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

  var transitionEvent = whichTransitionEvent();

  var float = $(".navbar-nav").css('float');
  if(float == 'right') {
    //Transition menu buttons on load
    $( ".navbar-nav" ).find( ".dropdown" ).each(function( index ) {
      var length = $( ".navbar-nav" ).find( ".dropdown" ).length;
      if(index == length-1) {
        $(this).one(transitionEvent,
          function(event) {
            showText(".copy", titleText, 0, 20);
          });
      }
      $(this).addClass('menu-innit');
    });
  } else {
    setTimeout(function() {
      showText(".copy", titleText, 0, 20);
    }, 1000)
  }
  //$('img[usemap]').rwdImageMaps();
})(jQuery, Drupal);