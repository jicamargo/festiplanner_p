// app/javascript/menu_toggle.js

document.addEventListener('turbo:load', () => {
  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden', 'animate__animated', 'animate__fadeOutUp');
        mobileMenu.classList.add('animate__animated', 'animate__fadeInDown');
      } else {
        mobileMenu.classList.remove('animate__fadeInDown');
        mobileMenu.classList.add('animate__fadeOutUp');
        mobileMenu.addEventListener('animationend', () => {
          mobileMenu.classList.add('hidden');
        }, { once: true });
      }
    });
  }
});
