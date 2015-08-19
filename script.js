$(document).ready(function() {
    $('a').mouseenter(function() {
        $(this).fadeTo('fast', .75);
        });
    $('a').mouseleave(function() {
        $(this).fadeTo('fast', 1);
        });
});
