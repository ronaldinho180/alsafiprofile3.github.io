


$(document).ready(function(){



    //var html = $('html'),
    //    H = html.outerHeight(true),
    //    S = $(window).scrollTop(),
    //    P = S/H;
    //
    //$(window).scroll(function() {
    //    S = $(window).scrollTop();
    //    P = S/H;
    //});
    //
    //$(window).resize(function() {
    //    if ( toggle.is(':checked') ) {
    //        H = html.outerHeight(true);
    //        $(window).scrollTop(P*H);
    //    }
    //});
    //
    //toggle.change(function() {
    //    H = html.outerHeight(true);
    //    S = $(window).scrollTop();
    //    P = S/H;
    //});

    new WOW().init();


    $("nav>ul>li:first-child").click(function (){
        //$(this).animate(function(){
        $('html, body').animate({
            scrollTop: $("#about-container").offset().top
        }, 1000);
        //});
    });

    $("nav>ul>li:nth-child(2)").click(function (){
        //$(this).animate(function(){
        $('html, body').animate({
            scrollTop: $("#activities-container").offset().top
        }, 1000);
        //});
    });

    $("nav>ul>li:nth-child(3)").click(function (){
        //$(this).animate(function(){
        $('html, body').animate({
            scrollTop: $("#info-container").offset().top
        }, 1000);
        //});
    });

    $("nav>ul>li:nth-child(4)").click(function (){
        //$(this).animate(function(){
        $('html, body').animate({
            scrollTop: $("#signup-container").offset().top
        }, 1000);
        //});
    });

    $('#menu').click(function(){
        $('nav ul').slideToggle('slow', function(){
            $(this).css('display') == 'none' ? $(this).removeClass('showNav').addClass('hideNav').removeAttr('style') : $(this).removeClass('hideNav').addClass('showNav').removeAttr('style');
        });
    })


});