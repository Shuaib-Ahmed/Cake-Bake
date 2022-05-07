// navbar
const hamburger = document.querySelector('.ham-icon');
const cross = document.querySelector('.cross-icon');
const navMenu = document.querySelector('#nav-bar > ul');

hamburger.addEventListener('click', () => {
  navMenu.classList.remove('close-nav');
  cross.classList.remove('hide-cross');
  hamburger.classList.remove('show-ham');

  navMenu.classList.add('open-nav');
  cross.classList.add('show-cross');
  hamburger.classList.add('hide-ham');
});

cross.addEventListener('click', () => {
  navMenu.classList.remove('open-nav');
  cross.classList.remove('show-cross');
  hamburger.classList.remove('hide-ham');

  navMenu.classList.add('close-nav');
  cross.classList.add('hide-cross');
  hamburger.classList.add('show-ham');
});
