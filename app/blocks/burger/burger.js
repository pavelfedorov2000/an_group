app.burger = {
    name: 'burger',
    description: 'your script description',
    init() {
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        const burgerMenuClose = document.querySelector('.burger-menu__close');
        const html = document.querySelector('html');
        const body = document.querySelector('body');

        burgerBtn.addEventListener('click', () => {
            html.classList.add('disable-fix');
            body.classList.add('_lock');
            burgerMenu.classList.add('active');
        });

        burgerMenuClose.addEventListener('click', () => {
            html.classList.remove('disable-fix');
            body.classList.remove('_lock');
            burgerMenu.classList.remove('active');
        });
    },
};
