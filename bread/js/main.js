$(document).ready(function(){
    /**********visual************* */
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        effect: "fade", /* fade 효과 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */

    $('.visual .ctrl_btn button.stop').on('click',function(){
        swiper.autoplay.stop();
        $(this).hide()
        $('.visual .ctrl_btn button.play').show()
    })
    $('.visual .ctrl_btn button.play').on('click',function(){
        swiper.autoplay.start();
        $(this).hide()
        $('.visual .ctrl_btn button.stop').show()
    })

    /*******************promotion******************** */

    const promotion_swiper = new Swiper('.promotion .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                769: {    /* 769px 이상일때 적용 */
                    slidesPerView: 2,
                    spaceBetween: 16,
                },
                1025: {   /* 1025px 이상일때 적용 */
                    slidesPerView: 3,
                    spaceBetween: 28,
                },
                1321: {    /* 1321px 이상일때 적용 */
                    slidesPerView: 4,
                    spaceBetween: 28,
                },
            },
            
    });


    /************** products ******************** */
    const products_swiper = new Swiper('.products .swiper', { /* 팝업을 감싼는 요소의 class명 */
            slidesPerView: 3, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
            spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
            breakpoints: {
                769: {    /* 769px 이상일때 적용 */
                    slidesPerView: 3,
                    spaceBetween: 16,
                },
                1025: {   /* 1025px 이상일때 적용 */
                    slidesPerView: 4,
                    spaceBetween: 25,
                },
                1321: {    /* 1321px 이상일때 적용 */
                    slidesPerView: 5,
                    spaceBetween: 25,
                },
            },
            
    });

    /************************** SNS **************************** */
    const sns_swiper = new Swiper('.sns .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 4, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
            slidesPerView: 4,
            spaceBetween: 0,
            },
            1025: {   /* 1025px 이상일때 적용 */
                slidesPerView: 6,
                spaceBetween: 0,
            },
            1321: {    /* 1321px 이상일때 적용 */
                slidesPerView: 8, 
                spaceBetween: 0,
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: false,
	},
        
    /*$('.sns ul li img').on('mouseenter',function(){
        $(this).addClass()
    })*/

    });
    



}) //$(document).ready(function)

