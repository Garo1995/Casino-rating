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
    $('.nav-menu a').on('click', function () {
        $('body').removeClass('body_fix');
        $('.mobile-menu').removeClass('transition-menu');
        $('.open-menu').removeClass('close-menu');
    })
});


if ($('.header-menu ul li').has('submenu')) {
    $('.submenu').parent().addClass('submenu-active');
}

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
