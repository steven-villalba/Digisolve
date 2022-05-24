// $(document).ready(function(){
//     $("h1").click(function(){
//         $(this).css("color","#ff0000")
//     });
// });

$(document).ready(function(){
    $(".about-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky-nav");
        }
        else {
            $("nav").removeClass("sticky-nav");
        }
    });

    // Animation on scroll

    $(".js--about-section").waypoint(function(direction){
        $(".js--about-box").addClass("animate__animated animate__fadeIn");
    }, {
        offset: "50%"
    });

    $(".js--services-section").waypoint(function(direction){
        $(".js--icon-row").addClass("animate__animated animate__zoomIn");
    }, {
        offset: "50%"
    });

    $(".js--package-section").waypoint(function(direction){
        $(".js--package-box").addClass("animate__animated animate__pulse");
    });
});

