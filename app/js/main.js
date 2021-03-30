$(function() {

    $('.product-details__num').styler();

    $('.product-slide__thumb').slick({
        asNavFor: '.product-slide__big',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false
    });
    $('.product-slide__big').slick({
        asNavFor: '.product-slide__thumb',
        draggable: false,
        arrows: false,
        fade: true
    });

    $(".filter-recent__star").rateYo({
        starWidth: "17px",
        ratedFill: "#ffcc00",
        normalFill: "#d6d6d6",
        readOnly: true
    });

    $(".shop-content__star").rateYo({
        starWidth: "17px",
        ratedFill: "#ffcc00",
        normalFill: "#d6d6d6",
        readOnly: true
    });

    $(".product-details__star").rateYo({
        starWidth: "17px",
        ratedFill: "#ffcc00",
        normalFill: "#d6d6d6",
        readOnly: true
    });

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