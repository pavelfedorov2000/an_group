app.cases = {
    name: 'cases',
    description: 'your script description',
    init() {
        document.querySelectorAll('.cases-slider').forEach(slider => {
            new Swiper('.cases-slider', {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 30,
                speed: 1000,
                disableOnInteraction: true,
                /* autoplay: {
                    delay: 1000,
                }, */
                on: {
                    slideChange: function () {
                        new LazyLoad();
                    },
                },
            });
        });

        const casesTabs = document.querySelectorAll('.cases__tab');
        casesTabs.forEach((tab, i) => {
            tab.addEventListener('click', () => {
                document.querySelector('.cases__tab.tab--active').classList.remove('tab--active');
                tab.classList.add('tab--active');
                document.querySelector('.cases-slider.active').classList.remove('active');
                document.getElementById(tab.getAttribute('data-case-category')).classList.add('active');
            });
        });
    },
};
