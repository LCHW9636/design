$(document).ready(function(){
    /* html 문서가 로딩 된 다음에 실행하는 명령어*/

    /*
        1차 메뉴 (.header .depth1 > li) 에 마우스를 오버하면
        오버한 li (this)에 sub_over 클래스를 추가 
        header에는 menu_over 클래스 추가
        옆의 메뉴로 이동하면 이전메뉴가 아웃 처리되어야함
        모든 li에 있는 클래스를 지우고 지금 오버한 것만 다시 클래스를 줌
    */
   $('.header .gnb ul.depth1 > li').on('mouseenter', function(){
     $('.header .gnb ul.depth1 > li').removeClass('sub_over')  
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
   $('.header .gnb').on('mouseleave', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
    $('.header .tnb .search').on('focusin', function(){
        $('.header .gnb ul.depth1 > li').removeClass('sub_over')  
        $('.header').removeClass('menu_over')
    })

    /* swiper */
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

         autoplay: {  /* 팝업 자동 실행 */
         delay: 1000,
         disableOnInteraction: true,
         },
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .prev',  
        },

    });
    
    

    /* .visual .ctrl_btn .stop 정지 버튼을 클릭하면
    팝업은 정지됨, stop사라짐, play버튼이 나타남
    .visual .ctrl_btn .play 재생버튼을 클릭하면
    팝업은 재생되고, stop버튼은 나타나고, play사라짐 */

    $('.visual .ctrl_btn .stop').on('click',function(){
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').show()
    })
    $('.visual .ctrl_btn .play').on('click',function(){
        swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').show()
    })

    /*
        .lost .list > ul > li 클릭하면 li에 active 클래스 추가
        이전에 active클래스가 있던 li의 avctive는 삭제 
    */
    $('.lost .list > ul > li').on('click',function(){
        $('.lost .list > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    /* 입양 팝업 */
    const adopt_swiper = new Swiper('.adopt .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 0, /* 팝업과 팝업 사이 여백 */
    loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	breakpoints: {
		768: {    /* 768px 이상일때 적용 */
			slidesPerView: 3,
		},
        1024: {    /* 768px 이상일때 적용 */
			slidesPerView: 4, /* 사이즈제한 */
		},
        1320: {    /* 768px 이상일때 적용 */
			slidesPerView: 'auto', /* 사이즈제한 */
		},
	},
	navigation: {
		nextEl: '.adopt .next',
		prevEl: '.adopt .prev',
	},
});
// adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
// adopt_swiper.autoplay.start();  /* 재생 기능 */
$('.adopt .ctrl_btn .stop').on('click',function(){
    adopt_swiper.autoplay.stop();  /* 일시정지 기능 */
    $(this).hide()
    $('.adopt .ctrl_btn .play').show()
})
$('.adopt .ctrl_btn .play').on('click',function(){
    adopt_swiper.autoplay.start();  /* 재생 기능 */
    $(this).hide()
    $('.adopt .ctrl_btn .stop').show()
})

/* 관련사이트
    site_open을 클릭하면 목록이 나타남
        site_list 목록이 나타남
        site_open 사라짐
        site_close 나타남
    site_close를 클릭하면 목록이 사라짐
        site_list 목록이 사라짐
        site_open 나타남
        site_close 사라짐*/

    $('.footer .familly_site .site_open').on('click',function(){
        $('footer .familly_site .site_list').slideDown()
        $(this).hide()
        $('.footer .familly_site .site_close').show()
    })
    $('.footer .familly_site .site_close').on('click',function(){
        $('footer .familly_site .site_list').slideUp()
        $(this).hide()
        $('.footer .familly_site .site_open').show()
    })
    /*
        메뉴열기를 클릭하면 header에 menu_open 추가
        메뉴닫기를 클릭하면 header에 menu_close가 삭제
    */
   $('.header .gnb .gnb_open').on('click',function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
   })
   $('.header .gnb .gnb_close').on('click',function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
   })

   /*
    1차메뉴 a를 클릭하면
        - a에 href링크 작동안함
        - depth2는 slidedown으로 나타나게
        - 클릭한 a의 부모 li에  sub_open 클래스를 추가
        만약에 이미 열려있는 메뉴라면 닫음.
        (열린메뉴를 판단하는 기준 - li에 sub_open이 있나 없나)
        --같은 버튼이 열기/닫기를 동시에 하는 경우
   */
    $(".header .gnb ul.depth1 > li:has(.depth2) > a").on("click", function(e){
        e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
        if($(this).parent().hasClass('sub_open') == true){ //sub_open있다면
            console.log('sub_open있음')
            $(this).parent().removeClass('sub_open')
            $(this).parent().find('ul.depth2').slideUp()
        }else{
            console.log('sub_opend없음')
            $(this).parent().addClass('sub_open')
            $(this).parent().find('ul.depth2').slideDown()
        }
    });
}) //$(document).ready