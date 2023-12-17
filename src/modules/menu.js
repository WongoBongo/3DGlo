const menu = () => {
  const menuBtn = document.querySelector('.menu');
  const menu = document.querySelector('menu');
  const closeBtn = menu.querySelector('.close-btn');
  const menuItems = menu.querySelector('ul');

  const toggleMenu = () => {
    menu.classList.toggle('active-menu');
  };

  menuBtn.addEventListener('click', toggleMenu);
  document.addEventListener('click', (e) => {
    if (e.target === closeBtn || e.target.closest('ul>li>a')) {
      toggleMenu();
    }
  });


};

export default menu;
