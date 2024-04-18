$(document).ready(function(){
    /**********visual************* */
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 2500,
		disableOnInteraction: true,
	},

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
		renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
		    return '<span class="' + className + '">' + (index + 1) + "</span>";
		},
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .swiper-button-next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .swiper-button-prev',  
	},

});
    swiper.autoplay.stop();  /* 일시정지 기능 */
    swiper.autoplay.start();  /* 재생 기능 */
    $('.visual .ctrl_btn button.stop').on('click',function(){
        swiper.autoplay.stop();
    })
    $('.visual .ctrl_btn button.play').on('click',function(){
        swiper.autoplay.start();
    })

    const service_swiper = new Swiper('.service .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		320: {    /* 640px 이상일때 적용 */
			slidesPerView: 2,
			spaceBetween: 12,
		},
		640: {    /* 640px 이상일때 적용 */
			slidesPerView: 4,
			spaceBetween: 15,
		},
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 6,
			spaceBetween: 20,
		},
		1024: {   /* 1024px 이상일때 적용 */
			slidesPerView: 8,
			spaceBetween: 40,
		},
		1280: {    /* 1280px 이상일때 적용 */
			slidesPerView: 8,
			spaceBetween: 40,
		},
	},
	centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	navigation: {
		nextEl: '.service .swiper-button-next',
		prevEl: '.service .swiper-button-prev',
	},
	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.service .swiper-pagination', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
});

		const commu_swiper = new Swiper('.commu .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: 4, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
		spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
		breakpoints: {
			640: {    /* 640px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 19,
			},
			768: {    /* 768px 이상일때 적용 */
				slidesPerView: 4,
				spaceBetween: 19,
			},
			1024: {   /* 1024px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 19,
			},
			1280: {    /* 1280px 이상일때 적용 */
				slidesPerView: 3,
				spaceBetween: 19,
			},
		},
		centeredSlides: false, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
		loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		autoplay: {  /* 팝업 자동 실행 */
			delay: 250000000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		});

		$('.shortcut .family_site .open').on('click', function(){
			$('.shortcut .family_site').addClass('on')
		})
		$('.shortcut .family_site .close').on('click', function(){
			$('.shortcut .family_site').removeClass('on')
		})




}) //$(document).ready(function)

