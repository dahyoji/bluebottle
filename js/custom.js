$(function () {
    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        spaceBetween: 30,
        effect: "fade",
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
    const main_product_slide = new Swiper('.main_product_slide', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 5,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: '.main_product .next',
            prevEl: '.main_product .prev',
        },
    });

    const MIS = new Swiper('.main_cafe_slide', {
        loop: true,
        effect: 'fade',

        navigation: {
            nextEl: '.main_cafe .next',
            prevEl: '.main_cafe .prev',
        },
    });


});

$(function () {
    $('.main_tab .tab_menu button').on('click', function () {
        let idx = $(this).index(); // 클릭한 것의 번호를 가져와서 저장함
        console.log(idx);

        $('.main_tab .tab_menu button').removeClass('on');
        $(this).addClass('on');

        $('.main_tab .tab_content .con').removeClass('on');
        $('.main_tab .tab_content .con').eq(idx).addClass('on');
    });
});



$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 })
    });

    $(window).on('scroll', function () {
        //스크롤 된 양을 구함.
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 400) {
            $('.to_top').addClass('on')
        } else {
            $('.to_top').removeClass('on')
        }
    });

})