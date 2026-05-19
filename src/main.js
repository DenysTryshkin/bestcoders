const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  closeMenuBtn: document.querySelector('[data-menu-close]'),
  backdrop: document.querySelector('[data-backdrop]'),
  body: document.body,
  header: document.querySelector('.header'),
};

const isMenuReady =
  refs.openMenuBtn && refs.closeMenuBtn && refs.backdrop && refs.body;

function isMenuOpen() {
  return refs.backdrop.classList.contains('is-open');
}

function setMenuState(isOpen) {
  refs.backdrop.classList.toggle('is-open', isOpen);
  refs.body.classList.toggle('no-scroll', isOpen);

  refs.openMenuBtn.setAttribute('aria-expanded', String(isOpen));
}

function toggleMenu() {
  setMenuState(!isMenuOpen());
}

if (isMenuReady) {
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  refs.backdrop.addEventListener('click', event => {
    const isBackdropClick = event.target === refs.backdrop;
    const isMobileNavLink = event.target.classList.contains('mobile-nav__link');

    if (isBackdropClick || isMobileNavLink) {
      setMenuState(false);
    }
  });

  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && isMenuOpen()) {
      setMenuState(false);
    }
  });
}

if (refs.header) {
  window.addEventListener('scroll', () => {
    refs.header.classList.toggle('header--scrolled', window.scrollY > 20);
  });
}