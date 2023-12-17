import { animate } from './helpers';

const modalWindow = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        animate(modal, 'opacity', '0', '1', 1500);
        modal.style.display = 'block';
      } else {
        modal.style.display = 'block';
      }
    });
  });

  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      modal.style.transition = 'none';
    } else {
      modal.style.transition = 'opacity 1.5s ease';
    }
  });

  modal.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    }
  });
};

export default modalWindow;