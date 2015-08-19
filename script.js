$(document).ready(function() {
    $button = $('.button')
    $button.mouseenter(function() {
        $(this).fadeTo('fast', .75);
        });
    $button.mouseleave(function() {
        $(this).fadeTo('fast', 1);
        });
});
