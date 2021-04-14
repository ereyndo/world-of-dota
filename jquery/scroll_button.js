$(document).ready(function(){
    $(".introduction-button").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            let placeToScroll = $(hash).offset().top - $(".header").height();
            $('html, body').animate({
                scrollTop: placeToScroll
            }, 800);
        }
    });
});