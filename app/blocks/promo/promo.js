app.promo = {
    name: 'promo',
    description: 'your script description',
    init() {
        const sliderPagination = document.querySelectorAll('.slider-pagination__item');
        const promoSlider = new Swiper('.promo-slider--pc', {
            direction: "vertical",
            mousewheel: true,
            slidesPerView: 1,
            spaceBetween: 250,
            speed: 1000,
            keyboard: {
                enabled: true,
                onlyInViewport: true,
                pageUpDown: true
            },
            mousewheel: {
                sensitivity: 1,
            },
            watchOverflow: true,
            allowTouchMove: false,
            on: {
                slideChange: function (swiper) {
                    document.querySelector('.slider-pagination__item.active').classList.remove('active');
                    sliderPagination[promoSlider.realIndex].classList.add("active");
                    if (promoSlider.realIndex == sliderPagination.length - 1) {
                        setTimeout(() => {
                            window.scrollTo({
                                top: window.innerHeight,
                                behavior: 'smooth',
                            });
                        }, 2000);
                    }
                },
            }
            /* autoplay: {
                delay: 3000,
            }, */
        });
        function sliderPaginationClick() {
            if (sliderPagination.length > 0) {
                for (let i = 0; i < sliderPagination.length; i++) {
                    sliderPagination[i].addEventListener("click", function () {
                        document.querySelector('.slider-pagination__item.active').classList.remove('active');
                        sliderPagination[i].classList.add('active');
                        promoSlider.slideTo(i, 1000);
                        promoMobileSlider.slideTo(i, 1000);
                    });
                }
            }
        }
        sliderPaginationClick();

        const promoMobileSlider = new Swiper('.promo-slider--touch', {
            slidesPerView: 1,
            spaceBetween: 30,
            on: {
                slideChange: function () {
                    document.querySelector('.slider-pagination__item.active').classList.remove('active');
                    sliderPagination[promoMobileSlider.realIndex].classList.add("active");
                },
            },
        });

        const promoBtn = document.querySelector('.promo__btn');
        promoBtn.addEventListener('click', () => {
            window.scrollTo({
                top: document.getElementById(promoBtn.getAttribute('data-scroll-target')).offsetTop,
                behavior: 'smooth'
            });
        });
    },
};
