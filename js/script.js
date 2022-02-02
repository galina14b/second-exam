//Меню-гамбургер =============================================================================================

let humburger = document.getElementById('jsMenuMobile');
let menuList = document.querySelector('.menu');
let humburgSvg = document.querySelector('.hamburger-img');
let crossSvg = document.querySelector('.hamburger-img_cross')


humburger.addEventListener("click", function () {
    menuList.classList.toggle('menu-opened');
    humburgSvg.classList.toggle('hamburger_closed');
    crossSvg.classList.toggle('cross_opened');


});

// Скроллинг по странице ============================================================================================

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

//Слайдер ============================================================================================================

$(window).on( 'load', function (){
    $('.news-section__slider').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1315,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 939,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// Map-section =====================================================================================================

let map;
let marker



function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.67887752357676, lng: -73.94731545147343 },
        zoom: 12,
    });
}

