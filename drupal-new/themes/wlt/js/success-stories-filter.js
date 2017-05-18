(function($, Drupal) {
  Drupal.behaviors.successStories = {
    attach: function (context, settings) {
      // On Success Stories select filter change, automatically submit the form.
      $('#views-exposed-form-success-stories-success-stories').not('.processed').addClass('processed').on('change', 'select', function() {
        $('#views-exposed-form-success-stories-success-stories button').trigger('click');
      });
    }
  };
})(jQuery, Drupal);
