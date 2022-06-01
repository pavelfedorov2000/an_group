app.team = {
    name: 'team',
    description: 'your script description',
    init() {
        new Swiper(".team-slider", {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 1500,
            slideToClickedSlide: true,
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
            on: {
                slideChange: function () {
                    new LazyLoad();
                },
            },
            breakpoints: {
                1025: {
                    spaceBetween: 32,
                }
            }
        });
    },
};
