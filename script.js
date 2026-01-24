document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        const scrollUpBtn = document.querySelector(".scroll-up-btn");
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        }
        else {
            navbar.classList.remove("sticky");
        }
        if (window.scrollY > 500) {
            scrollUpBtn.classList.add("show");
        }
        else {
            scrollUpBtn.classList.remove("show");
        }
    });

    // slide up script
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    scrollUpBtn.addEventListener("click", function () {
        $('html').animate({ scrollTop: 0 })
    })

    //toggle menu/navbar script
    const menuButtons = document.querySelectorAll(".menu-btn");
    const menuBtnI = document.querySelector(".menu-btn i");
    const menu = document.querySelector(".navbar .menu");
    menuButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            if (window.innerWidth < 954) {
                menu.classList.toggle("active");
                menuBtnI.classList.toggle("active");
            }
        });
    })


    // typing animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })

    // owl carousel
    $(document).ready(function () {
        $(".carousel").owlCarousel({
            // margin: 20,
            // loop: true,
            // autoplayTimeOut: 2000,
            // autoplayHoverPause: true,
            // responsive: {
            //     0:{
            //         items: 1,
            //         nav: false
            //     },
            //     600:{
            //         items: 2,
            //         nav: false
            //     },
            //     1000:{
            //         items: 3,
            //         nav: false
            //     }
            // }
        });
    });
})