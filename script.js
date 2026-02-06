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
    // swiper slider
    let swiperFeatured = new Swiper('.max-width', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,
        }
    }
})
})
