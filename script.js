$(document).ready(function() {
    $('.about-title').mouseenter(function() {
        $('.about-body').slideDown('slow');
        });
    $('.about').mouseleave(function() {
        $('.about-body').slideUp('slow');
        });
});
