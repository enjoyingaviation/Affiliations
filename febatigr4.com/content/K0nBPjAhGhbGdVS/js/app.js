$(document).ready(function () {

    //footer slide
    var media = window.matchMedia('(max-width: 1025px)')

    if (media.matches) {
        $(".footer__slide").each(function (index, item) {
            $(item).on('click', function () {
                $(this).siblings(".footer__links").slideToggle();
                $(this).toggleClass("active");
            });
        });
    }

    /*SCROLL*/
    $(".scroll").on("touchend, click", function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $('.scroll_to').offset().top
        }, 1000);
    });

    // sliderMobi

    var comment = $("#slick")

    if (media.matches) {
        comment.slick({
            autoplay: false,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    }
});