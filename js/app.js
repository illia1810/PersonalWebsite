$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar1').addClass("fixing");
        }else{
            $('.navbar1').removeClass("fixing");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Go to the top of page
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    //open menu on small screen
    $('.menu-btn').click(function() {
        $('.navbar1 .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing text animation
    let typed = new Typed(".typing", {
        strings:["Front-End Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    $('.skills-btn').click(function() {
        $("span").addClass("addingBar");
        $("abbr").addClass("addingProcent");
    });
});