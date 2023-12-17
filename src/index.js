import timer from './modules/timer';
import menu from './modules/menu';
import modal from './modules/modal';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';
import addDots from './modules/addDots';
import calc from './modules/calc';

document.addEventListener('DOMContentLoaded', () => {
  menu();
  addDots();
  timer('18 december 2023');

  modal();
  validation();
  tabs();
  slider();
  calc();
});
