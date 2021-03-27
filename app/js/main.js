$(function() {



    $('.filter-price__input').ionRangeSlider({
        type: "double",
        prefix: "$",
        onChange: function(data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
    });


    $('.slider__inner').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000
    });

    var mixer = mixitup('.products__content');

    var mixer = mixitup('.design__content');
});