$(document).ready(function () {
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if ($(this).hasClass('close-menu')) {
            $('.mobile-menu').addClass('transition-menu');
            $('body').addClass('body_fix');
        } else {
            $('body').removeClass('body_fix');
            $('.mobile-menu').removeClass('transition-menu');
        }
    });

});



$(document).ready(function () {

    function initMobileMenu() {
        const isMobile = $(window).width() <= 1020;
        const $items = $('.header-menu > ul > li');

        // Сначала снимаем старые обработчики (важно!)
        $items.children('a').off('click.mobileMenu');

        if (!isMobile) {
            // Если не мобилка — всё закрываем
            $items.removeClass('open-m');
            $items.children('.submenu').removeAttr('style');
            return;
        }

        // Вешаем обработчики только на мобилке
        $items.children('a').on('click.mobileMenu', function (e) {
            const $parent  = $(this).parent('li');
            const $submenu = $parent.children('.submenu');

            if (!$submenu.length) return;

            e.preventDefault();

            const isOpen = $parent.hasClass('open-m');

            if (isOpen) {
                $parent.removeClass('open-m');
                $submenu.stop(true, true).slideUp(300);
            } else {
                // закрываем все остальные
                $items.not($parent).each(function () {
                    $(this)
                        .removeClass('open-m')
                        .children('.submenu')
                        .stop(true, true)
                        .slideUp(300);
                });

                // открываем текущий
                $parent.addClass('open-m');
                $submenu.stop(true, true).slideDown(300);
            }
        });
    }

    // ✅ Запуск при загрузке
    initMobileMenu();

    // ✅ Запуск при изменении размера экрана
    $(window).on('resize', function () {
        initMobileMenu();
    });

});






document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".promo-code-rel").forEach(promo => {

        const openBtn = promo.querySelector(".open-promo-code");
        const form    = promo.querySelector(".copy-promo-form");
        const copyBtn = promo.querySelector(".copy-cod-btn");
        const code    = promo.querySelector(".copy-promo-inp");
        const copied  = promo.querySelector(".promo-copied");

        if (!openBtn || !form || !copyBtn || !code || !copied) return;

        openBtn.addEventListener("click", () => {
            form.classList.toggle("active");
        });

        copyBtn.addEventListener("click", () => {
            const text = code.textContent.trim();

            navigator.clipboard.writeText(text).then(() => {
                copied.classList.add("active");

                setTimeout(() => {
                    copied.classList.remove("active");
                }, 2000);
            });
        });

    });
});





$('.close-coocie').on('click', function () {
    $('.use-of-cookies').toggleClass('use-cookies-close');
})


$('.header-menu ul li').has('.submenu').addClass('submenu-active');


$(document).ready(function () {
    $('.search-block').on('click', function (e) {
        $(this).toggleClass('open-search');
        openSearchMenu(this, 'search-box');
        e.stopPropagation();
    });
    $('.search-box').on('click', function (e) {
        e.stopPropagation();
    });

    function openSearchMenu($this, search_box) {
        let search_block = $($this).find('.' + search_box);
        $(search_block).slideToggle(250);
    }
    $(document).on('click', function () {
        $('.search-box').slideUp();
        $('.search-block').removeClass('open-search')
    })
});






$(document).ready(function () {



    $('.positive-click').on('click', function () {
        $('.negative-click').removeClass('positive-active');
        $(this).addClass('positive-active');
        $('.negative-js').removeClass('positive-open');
        $('.positive-js').addClass('positive-open');
    });


    $('.negative-click').on('click', function () {
        $('.positive-click').removeClass('positive-active');
        $(this).addClass('positive-active');
        $('.negative-js').addClass('positive-open');
        $('.positive-js').removeClass('positive-open');
    });

    $('.open-box-reviews').on('click', function () {
        $('.add-review').addClass('add-review-open');
    });
});


$(document).ready(function () {
    $('.content-more').on('click', function () {
        $(this).toggleClass('content-more-close');
        $('.hidden-link').slideToggle(250);
    });
});



$(document).ready(function () {
    $('.open-ul-carts').on('click', function () {
        const parent = $(this).closest('.bonus-card-ul');

        $(this).toggleClass('content-more-close');
        parent.find('.open-carts-link').slideToggle(250);
    });
});

jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 1700) {
        jQuery('.scrollup').fadeIn('slow');
    } else {
        jQuery('.scrollup').fadeOut('slow');
    }
});
jQuery('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 2500);
    return false;
});





$(function () {
    let Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        let links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };

    Accordion.prototype.dropdown = function (e) {
        let $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {

            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    let accordion = new Accordion($('#accordion'), false);
});





$('.bonus-closed').on('click', function () {
    $('.bonus-free-spins').addClass('bonus-free-closed')
});



document.addEventListener("DOMContentLoaded", () => {
    const ratingWrap = document.querySelector(".add-review-rating");
    if (!ratingWrap) return;

    const stars = ratingWrap.querySelectorAll(".js-rating li");
    const input = ratingWrap.querySelector(".js-rating-input");
    if (!stars.length || !input) return;

    function setRating(value) {
        input.value = String(value);
        stars.forEach((li, i) => {
            li.classList.toggle("is-filled", i < value);
        });
    }

    stars.forEach((li, index) => {
        li.addEventListener("click", () => setRating(index + 1));
    });

    // если нужно выставить начальное значение из input
    setRating(parseInt(input.value || "0", 10));
});


$('.language-click').on('click', function (e) {
    $(this).parent().toggleClass('language-open');
    e.stopPropagation();
});

$('.language-drop ul li').on('click', function () {
    let text_in = $('.language-click').html();
    let selected_text = $(this).html();
    $('.language-click').html(selected_text);
    $(this).html(text_in)
    $('.language-min').removeClass('language-open')
});
$(window).on('click', function (e) {
    let menuSort = $('.language-min');
    if (e.target !== menuSort) {
        menuSort.removeClass('language-open');
    }
});
