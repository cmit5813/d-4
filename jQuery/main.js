$(function(){

//메뉴
    $(".main>li").hover(function(){
        $(".sub").stop().show();
    },function(){
        $(".sub").stop().hide();
    })//

//이미지슬라이드
    $(".move li:gt(0)").hide();

    var n=0;//0 1 2 
    setInterval(function(){

    $(".move li").eq(n).fadeOut();

    if(n==2){
        n=0;
    }else{
        n++;
    }//

    $(".move li").eq(n).fadeIn();
    
    },3000)

//팝업

    $(".pop").click(function(){
        $(".popup").show();
    })//open
    $(".close").click(function(){
        $(".popup").hide();
    })//close

})//jq