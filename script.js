

// console.log("test");

$(function(){

    // console.log("test");

    //カワウソの表示
    $(window).on('load',function(){
    $("#splash").delay(1000).fadeOut('slow');
    $("#splash_logo").delay(1000).fadeOut('slow');
     });

    //魚たべる
    $(".sakana_icon").on("click",function(){
        $(".sakana_icon").toggleClass('eat');

     //さかな泳ぐ
        $(".sakana_mure").toggleClass('oyogu');

    //かわうそびっくり
        $(".kawauso").toggleClass('biku');
        
    })


    /* -- リナさん編集 -- */



    $('.imgBox').on('mouseover',function(){
        $(this).css('opacity',0.5);
    })
    .on('mouseleave',function(){
    
    $(this).css('opacity',1);
    })
})