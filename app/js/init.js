;(function($) {
    // Init ion range slider
    $("#price-range").ionRangeSlider({
        type: "double",
        grid: false,
        min: 0,
        max: 1000,
        from: 200,
        to: 800,
        prefix: "$",
        hide_min_max: true
    });
    // Init jquery form stayler
    $('.select-stayler, .input-file-stayler, #uploud-main-file, #upload-screenshots').styler();
    $('.trending-product-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: true,
        autoplaySpeed: 1800,
        autoplay:true
      });
})(jQuery);