$(function() {
    $('.menu__btn').on('click', function() {
        $('.menu__items').toggleClass('menu__items--active');
    });

    $('.footer-top__title').on('click', function() {
        $(this).next().slideToggle();
        $(this).toggleClass('active');
    });

    $('.related-slider__top').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true

    });

    $('.product-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    });

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