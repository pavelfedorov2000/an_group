app.blog = {
    name: 'blog',
    description: 'your script description',
    init() {
        if (document.querySelector('.blog-page')) {
            const blogItems = document.querySelectorAll('.blog-page__article');
            const blogMoreBtn = document.querySelector('.blog-page__btn');
            const visibleNum = 6;
            const visibleItems = Array.from(blogItems).slice(0, visibleNum);
            visibleItems.forEach(item => {
                item.style.display = 'block';
            });
            const arrItems = Array.from(blogItems);
            arrItems.splice(0, visibleNum);
            blogMoreBtn.addEventListener('click', () => {
                const activeTab = document.querySelector('.page__tab.tab--active');
                arrItems.splice(0, visibleNum);
                if (activeTab.getAttribute('data-filter') !== 'all') {
                    const filteredItems = arrItems.slice(0, visibleNum).filter(item => item.getAttribute('data-category') === activeTab.getAttribute('data-filter'));
                    visibleItems.filter(item => item.getAttribute('data-category') === activeTab.getAttribute('data-filter'));
                    filteredItems.forEach(item => item.style.display = 'block');
                } else {
                    arrItems.slice(0, visibleNum).forEach(item => {
                        item.style.display = 'block';
                    });
                }
                if (arrItems.length == 0) {
                    blogMoreBtn.style.display = 'none';
                }
            });

            const filterTabs = document.querySelectorAll('.page__tab');

            filterTabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    document.querySelector('.page__tab.tab--active').classList.remove('tab--active');
                    tab.classList.add('tab--active');
                    const attr = tab.getAttribute('data-filter');
                    const filteredItems = Array.from(visibleItems).filter(item => item.getAttribute('data-category') === attr);
                    if (index != 0) {
                        document.querySelectorAll('.blog-page__article').forEach(item => item.style.display = 'none');
                        arrItems.slice(0, visibleNum).filter(item => item.getAttribute('data-category') === attr).forEach(item => item.style.display = 'block');
                        filteredItems.forEach(item => item.style.display = 'block');
                        document.querySelectorAll('.blog-page__article').forEach(item => {
                            item.style.gridColumn = 'unset';
                            item.style.gridRow = 'unset';
                        });
                    } else {
                        visibleItems.forEach(item => item.style.display = 'block');
                    }
                });
            });
        }
    },
};
