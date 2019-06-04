const menuButton = $('.menu-button');
const mobileMenu = $('.mobile-menu-container');

$(document).on('click', '.menu-button', function () {
    const $this = $(this);
    $this.toggleClass('active');
    mobileMenu.slideToggle();
});

$(document).on('click', '.mob-menu-item', function () {
    mobileMenu.slideUp();
    menuButton.removeClass('active');
});


function initMobile() {
    console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
    mobileMenu.hide();
    menuButton.removeClass('active');
    console.log("is-desktop");
 }



$(function() {
    $('.slick').slick({
        autoplay: true,
        arrows: false,
        speed: 1000,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    })
});

$(function(){
    $('.clientReviews__client').slick({
        autoplay: true,
        arrows: false,
        speed: 1500,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


$(function() {
    $('.box__content').hide().first().show();

    $('.box').on('click', '.box__title', function(){
        const $this = $(this);

        $this
            .find('.box__arrow')
            .toggleClass('box__arrow_open')
            .end()
            .next('.box__content')
            .slideToggle()
            .end()
            .closest('.box__item')
            .siblings('.box__item')
            .children('.box__content')
            .slideUp(100)
            .end()
            .find('.box__arrow')
            .removeClass('box__arrow_open');
    })
});

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    offset: 50
});

const headerBox = document.getElementById("header-box");
const appsWork = document.getElementById("apps");
const img1 = document.getElementById("howAppsWork_move-1");
const img2 = document.getElementById("howAppsWork_move-2");
const img3 = document.getElementById("howAppsWork_move-3");
const coords = appsWork.getBoundingClientRect();

console.log(appsWork)



function getCoords(el) {
    const coords = el.getBoundingClientRect();
    return {
        top: Math.round(window.pageYOffset + coords.top)
    }
}

const c = getCoords(appsWork)

console.log(c)

window.onscroll = function(){
    if(window.pageYOffset !== 0) {
        headerBox.classList.add('header-dark')
    } else if (window.pageYOffset === 0) {
        headerBox.classList.remove('header-dark')
    };

    if(window.pageYOffset >= coords.top - 150) {
        img1.classList.add('howAppsWork__col_mov');
        img2.classList.add('howAppsWork__col_mov-1');
        img3.classList.add('howAppsWork__col_mov-2');
    }
};




/*const headerBox = document.getElementById("header-box");

console.log(headerBox)

function getCoords(el) {
    const coords = el.getBoundingClientRect();
    return {
        top: Math.round(window.pageYOffset + coords.top),
    }
}

const c = getCoords(headerBox)

headerBox.addEventListener('resize', function(e){
    const target = e.target;
    const coords = getCoords(target);
    if(coords.top != 0) {
        headerBox.classList.add('header-dark')
    }
    return false

});*/

/*const c = getCoords(headerBox)

function addClass(e) {
    if(c !== 0) {
        e.classList.add('header-dark')
    }
    return false
}

addClass(headerBox)

console.log(c)*/
