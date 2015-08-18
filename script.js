$(document).ready(function() {
    $goodreads = $('#goodreads')
    $goodreads.mouseenter(function() {
        $goodreads.fadeTo('fast', .75);
        });
    $goodreads.mouseleave(function() {
        $goodreads.fadeTo('fast', 1);
        });
});
