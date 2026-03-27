const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  backdrop: document.querySelector('[data-backdrop]'),
  body: document.body,
 header: document.querySelector('.header')
};

function toggleMenu() {
  refs.backdrop.classList.toggle('is-open');
  refs.body.classList.toggle('no-scroll');
}

refs.openMenuBtn.addEventListener('click', toggleMenu);
refs.closeMenuBtn.addEventListener('click', toggleMenu);

refs.backdrop.addEventListener('click', e => {
  if (e.target === refs.backdrop) {
    toggleMenu();
  }

  if (e.target.classList.contains('mobile-nav__link')) {
    toggleMenu();
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    refs.header.classList.add('header--scrolled');
  } else {
    refs.header.classList.remove('header--scrolled');
  }
});
