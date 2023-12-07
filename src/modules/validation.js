const validation = () => {
  const validationNumber = (element) => {
    element.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/\D/g, ''); // Заменяет все символы, кроме цифр, на пустую строку
    });
  };

  const squareInput = document.querySelector('.calc-square');
  const countInput = document.querySelector('.calc-count');
  const dayInput = document.querySelector('.calc-day');
  const phoneInput = document.querySelector('.form-phone'); // Выбираем поле ввода телефона

  validationNumber(squareInput);
  validationNumber(countInput);
  validationNumber(dayInput);
  validationNumber(phoneInput); // Применяем валидацию для поля ввода телефона

  document.addEventListener('DOMContentLoaded', () => {
    const form3 = document.getElementById('form3');

    const validateName = (name) => {
      const regex = /^[А-Яа-яЁё\s-]+$/;
      return regex.test(name);
    };

    const validatePhone = (phone) => {
      const regex = /^[0-9]+$/; // Регулярное выражение, разрешающее только цифры
      return regex.test(phone);
    };

    const validateEmail = (email) => {
      const regex = /^[A-Za-z0-9._!~*'()-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return regex.test(email);
    };

    form3.addEventListener('submit', (event) => {
      const nameInput = document.getElementById('form3-name');
      const phoneInput = document.getElementById('form3-phone');
      const emailInput = document.getElementById('form3-email');

      if (!validateName(nameInput.value)) {
        alert('Пожалуйста, введите корректное имя (кириллица, дефис, пробел)');
        event.preventDefault();
      }

      if (!validatePhone(phoneInput.value)) {
        alert('Пожалуйста, введите корректный номер телефона (только цифры)');
        event.preventDefault();
      }

      if (emailInput.value && !validateEmail(emailInput.value)) {
        alert('Пожалуйста, введите корректный email');
        event.preventDefault();
      }
    });
  });
};

export default validation;
