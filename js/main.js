$(function () {
    // header
    $(window).on('scroll', function () {
        // console.log('스크롤 : ', $(window).scrollTop());   
        if ($(window).scrollTop() > 0) {
            $('.header_wrap').addClass('on');
        } else {
            $('.header_wrap').removeClass('on');
        }
    });

    // main_visual
    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.main_slide').slick({
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_visual .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext')
    });





    //main_content//
    var conP = $('.main_con_left_inner').offset().top;
    // console.log(conP);
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        // console.log(sct, conP);
        if (sct > conP - 700) {
            $('.main_con_left_inner').addClass('on')
        } else {
            $('.main_con_left_inner').removeClass('on')
        }
    });



    //mainContent sec//
    $('.mainContent .img_slide').slick({
        arrows: false,
        fade: true,
        autoplay: true,
    });



    var bgColor = ['#f6fdff', '#efefef', '#d0d9d5']
    $('.main_content_case').css({ background: bgColor[0] })

    $('.img_slide').on('init afterChange', function (e, s, c) {
        // console.log(c);
        $('.mainContent .text_box ul li').eq(c).addClass('on').siblings().removeClass('on');
        $('.main_content_case').css({ background: bgColor[c] })
    });









    //main_app//
    // 모바일 메뉴열었을때 뒤에 스크롤 안되게하는
    $('.header').on('scroll wheel touchmove', function (e) {
        if ($('.header').hasClass('on')) {
            // header에 on이 붙었을때만 이벤트 정지하라
            e.preventDefault();
        };
    });

    AOS.init();


})