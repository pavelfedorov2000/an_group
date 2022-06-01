app.reviewsSlider = {
    name: 'reviewsSlider',
    description: 'your script description',
    init() {
        new Swiper('.reviews-slider', {
            loop: true,
            //preloadImages: false,
            //lazy: true,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 15,
            speed: 1000,
            /* autoplay: {
                delay: 3000,
            }, */
            /* pagination: {
                el: '.swiper - pagination',
                clickable: true,
            }, */
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1025: {
                    slidesPerView: 'auto',
                    spaceBetween: 0,
                },
            },
            on: {
                slideChange: function () {
                    new LazyLoad();
                },
            },
        });
    },
};
