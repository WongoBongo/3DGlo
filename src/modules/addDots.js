const addDots = () => {
  const sliderBlock = document.querySelector('.portfolio-content');
  const slides = document.querySelectorAll('.portfolio-item');
  const dotsContainer = document.createElement('ul');
  dotsContainer.classList.add('portfolio-dots');

  slides.forEach(() => {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
  });

  sliderBlock.appendChild(dotsContainer);
};

export default addDots;
