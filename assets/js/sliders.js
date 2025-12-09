
let bannerSwiper = new Swiper(".banner-slide", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1200,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".banner-pagination",
        clickable: true,
    },
});


let reviewsSwiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 34,
    allowTouchMove: false,
    pagination: {
        el: ".reviews-pagination",
        clickable: true,
    },
    breakpoints: {

        0: {
            allowTouchMove: true,
        },
        1020: {
            allowTouchMove: false,
        }
    }
});

