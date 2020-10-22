//leftlist_slide
$(function(){
    $('.ul1 span').click(function(){
        $('.ul1').toggleClass('slide')
    })
    $('.ul2 span').click(function(){
        $('.ul2').toggleClass('slide')
    })
    $('.ul3 span').click(function(){
        $('.ul3').toggleClass('slide')
    })
    $('.ul4 span').click(function(){
        $('.ul4').toggleClass('slide')
    })
    $('.ul5 span').click(function(){
        $('.ul5').toggleClass('slide')
    })
})

//leftlist_slide_rwd
$(function(){
    $('.rwdtop button').click(function(){
        $('aside').toggleClass('slide')
        $('main').toggleClass('slide_r')
    })
    $('article').click(function(){
        $('aside').removeClass('slide')
        $('main').removeClass('slide_r')
    })
})

//選單滑動效果
$(function(){
    //環境參數
    $('.ul1 span').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti1").offset().top - 80
        }, 500)
    });
    $('.ul1 li:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti1_1").offset().top - 80
        }, 500)
    });
    $('.ul1 li:nth-child(3)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti1_2").offset().top - 80
        }, 500)
    });
    //帳號相關
    $('.ul2 span').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_1").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(3)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_2").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(4)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_3").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(5)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_4").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(6)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_5").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(7)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_6").offset().top - 80
        }, 500)
    });
    $('.ul2 li:nth-child(8)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti2_7").offset().top - 80
        }, 500)
    });
    //帳務相關
    $('.ul3 span').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti3").offset().top - 80
        }, 500)
    });
    $('.ul3 li:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti3_1").offset().top - 80
        }, 500)
    });
    //後臺相關
    $('.ul4 span').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti4").offset().top - 80
        }, 500)
    });
    $('.ul4 li:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti4_1").offset().top - 80
        }, 500)
    });
    //附錄
    $('.ul5 span').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti5").offset().top - 80
        }, 500)
    });
    $('.ul5 li:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti5_1").offset().top - 80
        }, 500)
    });
    $('.ul5 li:nth-child(3)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti5_2").offset().top - 80
        }, 500)
    });
    $('.ul5 li:nth-child(4)').click(function() {
        $('html,body').animate({
            scrollTop: $(".ti5_3").offset().top - 80
        }, 500)
    });
})