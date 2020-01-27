// Tag selector exercise - Write the right tag selectores to style your game
/*YOUR CODE HERE*/
$("button").click(function() {
    $("body").css("background-color", "yellow");
    $("h1").css("color", "blue");
});

// Class selector exercise - Write the right class selectors to start the game
$(".start").click(function() {
    $(".board").show();
    $(".start").hide();
});

// Events - Replace the events to make the Mario jump!
$(".jump").mouseenter(function() {
    $(".mario").css("bottom", "175px");
    $(".jump").text("Leave to go down");
});
$(".jump").mouseleave(function() {
    $(".mario").css("bottom", "60px");
    $(".jump").text("Enter to Jump");
});

//Actions - When the Mario jumps, hide the coin
$(".jump").mouseenter(function() {
    if ($(".coin").is(":visible")) {
        const count = $(".count").text();
        $(".count").text(Number(count) + 1);
    }
    $(".coin").hide();
});

//All together - Make a new coin when the button new coin is double clicked
$(".new-coin").dblclick(function() {
    $(".coin").show();
});
