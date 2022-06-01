app.services = {
    name: 'services',
    description: 'your script description',
    init() {
        const servicesTabs = document.querySelectorAll('.services-item__tab');
        const servicesImages = document.querySelectorAll('.services-item__img');
        const servicesContent = document.querySelectorAll('.services-item__content');
        const servicesPrices = document.querySelectorAll('.services-section__price');
        const servicesSectionTitle = document.querySelector('.services-section__title');
        servicesTabs.forEach(service => {
            service.addEventListener('click', () => {
                const target = service.getAttribute('data-service');
                console.log(target);
                document.querySelector('.services-item__tab.tab--active').classList.remove('tab--active');
                service.classList.add('tab--active');
                servicesSectionTitle.textContent = service.textContent;
                servicesImages.forEach(img => {
                    img.classList.remove('active');
                    if (img.getAttribute('data-service-picture') === target) {
                        img.classList.add('active');
                    }
                });
                servicesContent.forEach(descr => {
                    descr.classList.remove('active');
                    if (descr.getAttribute('data-service-content') === target) {
                        descr.classList.add('active');
                    }
                });
                servicesPrices.forEach(price => {
                    price.classList.remove('active');
                    if (price.getAttribute('data-service-price') === target) {
                        price.classList.add('active');
                    }
                });
            });
        });
    },
};
