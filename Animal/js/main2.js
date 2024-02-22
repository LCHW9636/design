$(document).ready(function(){
    /* html문서가 로딩 된 다음에 실행해 */

    /* 
        1차 메뉴 (.header .depth1 > li) 에 마우스를 오버하면
        오버한 li (this) 에 sub_over 클래스를 추가
        header에는 menu_over 클래스 추가 
    */
    $('.header .depth1 > li').on('mouseenter', function(){
        $(this).addClass('sub_over')
        $('.header').addClass('menu_over')
    })
    $('.header .depth1 > li').on('mouseleave', function(){
        $(this).removeClass('sub_over')
        $('.header').removeClass('menu_over')
    })
})