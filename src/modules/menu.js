const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');

  const handleMenu = (e) => {
    if (e.target === menuBtn || e.target === closeBtn || e.target.closest('ul>li>a')) {
      menu.classList.toggle('active-menu');
    }
  };

  document.addEventListener('click', handleMenu);
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
  });
};

export default menu;
