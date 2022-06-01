app.benefits = {
    name: 'benefits',
    description: 'your script description',
    init() {
        new Swiper(".benefits-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
            breakpoints: {
                501: {
                    slidesPerView: 'auto',
                    spaceBetween: 40,
                },
                1025: {
                    slidesPerView: 'auto',
                    spaceBetween: 59,
                }
            },
        });
    },
};
