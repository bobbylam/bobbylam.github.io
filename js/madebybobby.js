//Collapse the navbar on scroll
$(window).scroll(function() {
    // var $y = $(window).height();
    if ($(".navbar").offset().top > 10) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Page scrolling feature w/ jQuery Easing
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1600, 'easeInOutCubic');
        event.preventDefault();
    });
});