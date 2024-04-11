$(document).ready(function(){

    let scroll_dir //방향 - 0보다 크면 위로 스크롤
    let scroll_prev //이전 스크롤값
    let scroll_curr //현재 스크롤값

    function scroll_chk(){
        scroll_prev = scroll_curr
        scroll_curr = $(window).scrollTop()
        scroll_dir = scroll_prev - scroll_curr
        console.log(scroll_dir)
        if(scroll_curr > 250){
            $('header').addClass('fixed')
            if(scroll_dir > 0){ //위로스크롤 - 나타나야함
                $('header').attr('style','transform: translate(0, 0)')
                /*transform: translate(0, -100px); */
            }else{ //아래로스크롤 - 사라져야함.
                $('header').attr('style','transform: translate(0, -100px)')
                $('header .gnb .depth1 > li').removeClass('on')
                $('header').removeClass('menu_over')
            }
        }else{
            $('header').removeClass('fixed')
            $('header').attr('style','transform: translate(0, 0)')
        }
    }
    scroll_chk()  //처음 로딩됐을때 1번 실행
    $(window).scroll(function(){ //스크롤 할때마다 1번 실행
        scroll_chk() 
    })

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