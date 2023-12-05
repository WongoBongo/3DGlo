const modal = () => {
  const modal = document.querySelector('.popup');
  const buttons = document.querySelectorAll('.popup-btn');
  const closeBtn = document.querySelector('.popup-close');

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

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('resize', () => {
    const isMobile = window.innerWidth < 768;

    // Если это мобильное устройство, отключаем анимацию
    if (isMobile) {
      modal.style.transition = 'none';
    } else {
      modal.style.transition = 'opacity 1.5s ease';
    }
  });
};

export default modal;
