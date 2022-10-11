$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky")
        }else{
            $('.navbar').removeClass("sticky")
        }
        if(this.scrollY > 500){
            $('.scroll_up_btn').addClass("show")
        }else{
            $('.scroll_up_btn').removeClass("show")
        }
    });

    // slide up script
    $('.scroll_up_btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // typing animation script 
    var typed = new Typed(".typing",{
        strings: ["UI Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // toggle menubar
    $('.menu_btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu_btn i').toggleClass("active")
    })
});