

// console.log("test");

$(function(){

    // console.log("test");

    //魚たべる
    $(".sakana_icon").on("click",function(){
        $(".sakana_icon").toggleClass('eat');

     //さかな泳ぐ
        $(".sakana_mure").toggleClass('oyogu');
    })

    /* -- リナさん編集 -- */



    $('.imgBox').on('mouseover',function(){
        $(this).css('opacity',0.5);
    })
    .on('mouseleave',function(){
    
    $(this).css('opacity',1);
    })