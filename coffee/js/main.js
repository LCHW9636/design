$(document).ready(function(){

    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: true,
        },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });

    const product_swiper = new Swiper('.product .swiper', { /* 팝업을 감싼는 요소의 class명 */
        loop: true, /* 끝나면 처음 팝업이 다시 나옴 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1024: {   /* 1024px 이상일때 적용 */
                slidesPerView: 3,
                spaceBetween: 17,
            },
            1280: {    /* 1280px 이상일때 적용 */
                slidesPerView: 4,
                spaceBetween: 5,
            },
        },
    });


    const social_swiper = new Swiper('.social .swiper', { /* 팝업을 감싼는 요소의 class명 */
    loop: true,
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 2,
			spaceBetween: 17,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 3,
			spaceBetween: 17,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 17,
		},
	},
});
})//$(document).ready