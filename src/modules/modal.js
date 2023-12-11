const modalWindow = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isMobile = window.innerWidth < 768;

      if (!isMobile) {
        modal.style.opacity = '0';
        modal.style.transition = 'opacity 1.5s ease-in-out';
        modal.style.display = 'block';

        setTimeout(() => {
          modal.style.opacity = '1';
        }, 0);
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
