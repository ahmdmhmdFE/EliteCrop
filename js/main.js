$(function () {
    'use srtict';
    // slider height
    let winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));
    // slider height
    
    // featured work shuffle
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-imgs .col-md').css('opacity', '1');
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '0.2');
            $($(this).data('class')).parent().css('opacity', '1');
        }
    });
    // featured work shuffle
});