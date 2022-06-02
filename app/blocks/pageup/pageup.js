app.pageup = {
  name: 'pageup',
  description: 'your script description',
  init() {
    const pageUp = document.querySelector('.pageup');
    pageUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  },
};
