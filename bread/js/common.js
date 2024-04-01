$(document).ready(function(){

    // 메뉴에 마우스를 오버하면 header에 menu_over클래스 추가
    let device_status
    let window_w
    function device_chk(){
        window_w = $(window).width()
        if(window_w > 1024){ //윈도우 너비가 1024보다 크다면 pc
            device_status = 'pc'
        }else{ //윈도우 너비가 1024이하라면 = 모바일
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //문서가 로딩되고 1번 실행
    $(window).resize(function(){
        device_chk() //문서가 리사이즈 될 때마다 1번씩 실행
    })
   
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin',function(){
        if(device_status == 'pc'){
        $('.header').addClass('menu_over')
        $('.header .gnb ul.depth1 > li').removeClass('on')
        $(this).addClass('on')
        }
    })
    $('.header').on('mouseleave',function(){
        if(device_status == 'pc'){
        $('.header .gnb ul.depth1 > li').removeClass('on')
        $('.header').removeClass('menu_over')
        }
    })

    /*****************************
      모바일 메뉴
     ********************************/
    
    $(".header .gnb ul.depth1 > li > a").on('click',function(e){
        if(device_status == 'mobile'){
            e.preventDefault(); // a태그의 href를 작동 시키지 않음
            $(this).parent().toggleClass('on')
        }
    })

    $('.header .gnb .gnb_open').on('click',function(){
        $('.header').addClass('menu_open')
        $("html, body").css({overflow : "hidden", height : $(window).height()}).bind("scroll touchmove mousewheel", function(e){e.preventDefault();e.stopPropagation();return false;},function(){passive:false});
    })
    $('.header .gnb .gnb_close').on('click',function(){
        $('.header').removeClass('menu_open')
        $("html, body").css({overflow : "visible", height : "auto"}).unbind('scroll touchmove mousewheel');
    })
    
    
})