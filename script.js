// script.js
const updateDateTime = () => {
    const greeting = document.getElementById('greeting');
    const currentDay = document.getElementById('current-day');
    const currentTime = document.getElementById('current-time');
    const daysToNewYear = document.getElementById('days-to-new-year');
  
    const dateNow = new Date();
  
    const currentHours = dateNow.getHours();
  
    let greetingText;
  
    if (currentHours >= 23 || currentHours < 3) {
      greetingText = 'Доброй ночи';
    } else if (currentHours < 12) {
      greetingText = 'Доброе утро';
    } else if (currentHours < 18) {
      greetingText = 'Добрый день';
    } else {
      greetingText = 'Добрый вечер';
    }
  
    const currentDayOfWeek = dateNow.toLocaleDateString('ru-RU', { weekday: 'long' });
  
    const daysToNewYearCount = Math.ceil((new Date(`January 1, ${dateNow.getFullYear() + 1}`) - dateNow) / (24 * 60 * 60 * 1000));
  
    greeting.textContent = greetingText;
    currentDay.textContent = 'Сегодня: ' + currentDayOfWeek;
    currentTime.textContent = 'Текущее время: ' + dateNow.toLocaleTimeString('ru-RU');
    daysToNewYear.textContent = 'До нового года осталось ' + daysToNewYearCount + ' дней';
  };
  
  updateDateTime();
  setInterval(updateDateTime, 1000);
  