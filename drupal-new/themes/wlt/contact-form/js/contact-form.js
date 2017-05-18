(function($, Drupal) {
  Drupal.behaviors.ContactForm = {
    attach: function (context, settings) {
      $('.close-reveal-modal').on('click',function() {
        $('.hs-error-msgs').css('display', 'none');
        $('.hs-input').removeClass('error');
        $('.hbspt-form').find('input[type="text"], select, textarea').each(function() {
          $(this).val('');
        });
        if ($('.hbspt-form').find('form')[0]) {
          $('.hbspt-form').find('form')[0].reset();
        }
        if ($('.thankyou-msg')[0]) {
          window.location = window.location;
        }
      });

      // Grab a reference to our form
      var form = $('.hs-form');
      // Setup a handler to run when the form passes validation
      form.on('hsvalidatedsubmit', function(e) {
        $('.contact-pop-top, .contact-pop-bott').css('display', 'none');

        setTimeout(function() {
          $('.submitted-message').html('');
          $('.submitted-message').append('<div class="thankyou-msg"><img src="//cdn2.hubspot.net/hubfs/1836389/WLT/images/smile-img.png" alt=""><h2>Thanks for getting in touch.</h2><h3>Our team will be in contact shortly.</h3><p>Please check your inbox or junk mailbox in the next few minutes, in case we need more information about your enquiry.</p></div>');
        }, 10);

        setTimeout(function() {
          //$('.hbspt-form').find('form')[0].reset();
          location.reload();
        }, 7000);
      });

      /* setTimeout(function() {
        $('.hbspt-form .field').slice(0,6).wrapAll('<div class="left"></div>');
        $('.hbspt-form .field').slice(6,11).wrapAll('<div class="right"></div>');
      }, 1000); */
    }
  };
})(jQuery, Drupal);
