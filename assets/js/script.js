//AOS animation
AOS.init({
    duration: 1000,
    once: true,
});


//Slick slider
$(document).ready(function () {
    $('.clients-slick-slider-section').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    AOS.refresh();
});

//Slick slider
$(document).ready(function () {
    $('.front-vault-slick-slider-section').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        infinite: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    AOS.refresh();
});

//sticky header
$(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 101) {
        $('.navbar').removeClass('navbar-fixed');
    }
});

//back to top js
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});