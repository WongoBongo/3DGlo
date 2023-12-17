export const animate = (element, property, from, to, duration) => {
  element.style[property] = from;
  element.style.transition = `${property} ${duration}ms ease-in-out`;

  requestAnimationFrame(() => {
    element.style[property] = to;
  });
};
