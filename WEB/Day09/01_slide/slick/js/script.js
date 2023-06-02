$(function () {
    
    // 슬라이드 시작!
    $('.slide-container').slick({
        dots: true,
        arrows: true, 
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToscroll: 1,

        autoplay: true,
        autoplaySpeed: 4000,

        pauseOnDotHover: false,
        pauseOnFocus: false,
        pauseOnHover: false,

        /* 효과 */
        //fade: true,

        /* 반응형 */
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
    
        ]
    })
})