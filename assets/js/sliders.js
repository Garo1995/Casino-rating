
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

