$(document).ready(function () {
    $(".card-player").hover(
        function() {
            $(this).css('transform','scale(1.2)');
        },
        function() {
            $(this).css('transform','scale(1)');
        }
    );
    $(".card-player-1").on("click", function() {
        console.log("HELLO");
    });
    $(".card-player-2").on("click", function() {
        console.log("HELLO");
    });
});