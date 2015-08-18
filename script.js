$(document).ready(function() {
    $button = $('.button')
    $button.mouseenter(function() {
        $button.fadeTo('fast', .75);
        });
    $button.mouseleave(function() {
        $button.fadeTo('fast', 1);
        });
});
