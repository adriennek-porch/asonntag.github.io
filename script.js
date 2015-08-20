$(document).ready(function() {
    $('a').mouseenter(function() {
        $(this).fadeTo('fast', .75);
        });
    $('a').mouseleave(function() {
        $(this).fadeTo('fast', 1);
        });
    $('.head').mouseenter(function() {
        $(this).next('.content').slideDown('slow');
        });
    $('.head').mouseleave(function() {
        $(this).next('.content').slideUp('slow');
        });
});
