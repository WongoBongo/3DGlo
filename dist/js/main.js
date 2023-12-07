/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validation */ \"./modules/validation.js\");\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('8 december 2023');\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_modules_validation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const menuBtn = document.querySelector('.menu');\n  const menu = document.querySelector('menu');\n  const closeBtn = menu.querySelector('.close-btn');\n  const menuItems = menu.querySelectorAll('ul>li>a');\n  const handleMenu = () => {\n    // if (!menu.style.transform) {\n    //   menu.style.transform = 'translateX(0)';\n    // } else {\n    //   menu.style.transform = '';\n    // }\n    menu.classList.toggle('active-menu')\n  };\n  menuBtn.addEventListener('click', handleMenu);\n  closeBtn.addEventListener('click', handleMenu);\n  // for (let i = 0; i < menuItems.length; i++) {\n  //   menuItems[i].addEventListener('click', handleMenu);\n  // }\n  menuItems.forEach(menuItems => menuItems.addEventListener('click', handleMenu));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector('.popup');\r\n  const buttons = document.querySelectorAll('.popup-btn');\r\n  const closeBtn = document.querySelector('.popup-close');\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener('click', () => {\r\n      const isMobile = window.innerWidth < 768;\r\n\r\n      if (!isMobile) {\r\n        modal.style.opacity = '0';\r\n        modal.style.transition = 'opacity 1.5s ease-in-out';\r\n        modal.style.display = 'block';\r\n\r\n        setTimeout(() => {\r\n          modal.style.opacity = '1';\r\n        }, 0);\r\n      } else {\r\n        modal.style.display = 'block';\r\n      }\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n  });\r\n\r\n  window.addEventListener('resize', () => {\r\n    const isMobile = window.innerWidth < 768;\r\n\r\n    // Если это мобильное устройство, отключаем анимацию\r\n    if (isMobile) {\r\n      modal.style.transition = 'none';\r\n    } else {\r\n      modal.style.transition = 'opacity 1.5s ease';\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n  console.log(deadline)\r\nconst timerHours = document.getElementById('timer-hours');\r\nconst timerMinutes = document.getElementById('timer-minutes');\r\nconst timerSeconds = document.getElementById('timer-seconds');\r\n\r\nconst getTimeRemaining = () => {\r\n  let dateStop = new Date(deadline).getTime();\r\n  let dateNow = new Date().getTime();\r\n  let timeRemaining = (dateStop - dateNow) / 1000;\r\n  let hours = Math.floor((timeRemaining / 60 / 60) % 24);\r\n  let minutes = Math.floor((timeRemaining / 60) % 60);\r\n  let seconds = Math.floor(timeRemaining % 60);\r\n  \r\n  return { timeRemaining, hours, minutes, seconds };\r\n};\r\nconst updateClock = () => {\r\n  const getTime = getTimeRemaining();\r\n  \r\n  timerHours.textContent = getTime.hours;\r\n  timerMinutes.textContent = getTime.minutes;\r\n  timerSeconds.textContent = getTime.seconds;\r\n  if(getTime.timeRemaining > 0) {\r\n      setTimeout(updateClock, 1000)\r\n  } else {\r\n    timerHours.textContent = 0,\r\n    timerMinutes.textContent = 0\r\n    timerSeconds.textContent = 0\r\n    \r\n  }\r\n};\r\nupdateClock()\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ }),

/***/ "./modules/validation.js":
/*!*******************************!*\
  !*** ./modules/validation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validation = () => {\r\n    const validationNumber = (element) => {\r\n      element.addEventListener('input', (event) => {\r\n        event.target.value = event.target.value.replace(/\\D/g, ''); // Заменяет все символы, кроме цифр, на пустую строку\r\n      });\r\n    };\r\n  \r\n    const squareInput = document.querySelector('.calc-square');\r\n    const countInput = document.querySelector('.calc-count');\r\n    const dayInput = document.querySelector('.calc-day');\r\n    const phoneInput = document.querySelector('.form-phone'); // Выбираем поле ввода телефона\r\n  \r\n    validationNumber(squareInput);\r\n    validationNumber(countInput);\r\n    validationNumber(dayInput);\r\n    validationNumber(phoneInput); // Применяем валидацию для поля ввода телефона\r\n  \r\n    document.addEventListener('DOMContentLoaded', () => {\r\n      const form3 = document.getElementById('form3');\r\n  \r\n      const validateName = (name) => {\r\n        const regex = /^[А-Яа-яЁё\\s-]+$/;\r\n        return regex.test(name);\r\n      };\r\n  \r\n      const validatePhone = (phone) => {\r\n        const regex = /^[0-9]+$/; // Регулярное выражение, разрешающее только цифры\r\n        return regex.test(phone);\r\n      };\r\n  \r\n      const validateEmail = (email) => {\r\n        const regex = /^[A-Za-z0-9._!~*'()-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/;\r\n        return regex.test(email);\r\n      };\r\n  \r\n      form3.addEventListener('submit', (event) => {\r\n        const nameInput = document.getElementById('form3-name');\r\n        const phoneInput = document.getElementById('form3-phone');\r\n        const emailInput = document.getElementById('form3-email');\r\n  \r\n        if (!validateName(nameInput.value)) {\r\n          alert('Пожалуйста, введите корректное имя (кириллица, дефис, пробел)');\r\n          event.preventDefault();\r\n        }\r\n  \r\n        if (!validatePhone(phoneInput.value)) {\r\n          alert('Пожалуйста, введите корректный номер телефона (только цифры)');\r\n          event.preventDefault();\r\n        }\r\n  \r\n        if (emailInput.value && !validateEmail(emailInput.value)) {\r\n          alert('Пожалуйста, введите корректный email');\r\n          event.preventDefault();\r\n        }\r\n      });\r\n    });\r\n  };\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validation);\r\n  \n\n//# sourceURL=webpack:///./modules/validation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;