$(document).ready(function(){
    $('.about-section').waypoint(
        // sticky nav
        function(direction){
            if (direction == "down") {
                $('nav').addClass('sticky');
            } else {
                $('nav').removeClass('sticky');
            }
        }, {
            offset: '600px',
        }
    );

    // mooth scroll anchor link
    $('a').click(function(event){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top,
        }, 700);
        event.preventDefault();
    });
});
