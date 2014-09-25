jQuery(function($) {

    /**
     * Prevent Double Submit jQuery plugin.
     *
     * Ensure a form submits only once by preventing double submit behavior.
     */

    /**
     * This is the primary method for initializing behavior. Usually you just need to call this method on the form.
     */
    $.fn.preventDoubleSubmit = function() {
        var $form = this;
        $form.on('submit', function(e) {
            e.preventDefault();
            $form.preventDoubleSubmitTrigger();
        });
        return $form;
    };


    /**
     *  Helper method to trigger native js form submit with extra logic wrapped around it.
     *
     *  Expose method to make it available for other scripts. Can be helpful for cases where you don't want to bind to the
     *  submit event.
     */
    $.fn.preventDoubleSubmitTrigger = function() {
        var $form = this;
        var form = this.get(0);
        if (!$form.data('submitted')) {
            $form.data('submitted', true);
            // Trigger native submit event on DOM form element (not jQuery object).
            form.submit();
        }
        return $form;
    };

    // Automatically initialize Prevent Double Submit behavior based on class attribute.
    $(".prevent-double-submit").each(function() {
        var $form = $(this);
        $form.preventDoubleSubmit();
    });
});