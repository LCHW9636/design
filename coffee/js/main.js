/*
    파일명 : main.js
    작성자 : 이찬우
    작성일 : 2024.03.14
    설명   : 메인페이지에서 사용된 jqeury (header 제외)
*/
$(document).ready(function(){

    const swiper = new Swiper('.swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 3000,
		disableOnInteraction: true,
	},
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    /**********************************************************************
        아래로 스크롤하면 header가 숨겨짐 (transtorm으로)
        위로 스크롤하면 header가 나타남 (transform으로 움직임)
        이전스크롤값(10) - 현재 스크롤값(100) : 아래로 스크롤 중
        이전스크롤값(100) 현재스크롤값(10) : 위로 스크롤 중
     **********************************************************************/

    let scroll_dir //방향 - 0보다 크면 위로 스크롤 
    let scroll_prev = 0 //이전 스크롤 값
    let scroll_curr  // 현재 스크롤 값

    function scroll_chk(){
        scroll_prev = scroll_curr
        scroll_curr = $(window).scrollTop()
        scroll_dir = scroll_prev - scroll_curr
        console.log(scroll_dir)
        if(scroll_curr > 50){
            $('header').addClass('fixed')
            if(scroll_dir > 0){ //위로 스크롤 - 나타나야함
                $('header').attr('style','transform: translate(0, 0)')
                else{
                    $('header').attr('transform: translate(0, -100px)')
                }

        }else{// 아래로 스크롤 - 사라져야함
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //처음 로딩됐을때 1번 실행
    $(window).scroll(function(){
        scroll_chk()
    })
});
})//$(document).ready