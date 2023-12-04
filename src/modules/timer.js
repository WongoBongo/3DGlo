const timer = (deadline) => {
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const updateClock = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    console.log(dateNow)
    let timeRemaining = Math.floor((dateStop - dateNow) / 1000);

    if (timeRemaining <= 0) {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(intervalId);
      return;
    }

    let hours = Math.floor((timeRemaining / 3600) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    timerHours.textContent = ('0' + hours).slice(-2);
    timerMinutes.textContent = ('0' + minutes).slice(-2);
    timerSeconds.textContent = ('0' + seconds).slice(-2);
  };

  updateClock(); // Вызываем первый раз для избежания мигания нулей

  const intervalId = setInterval(updateClock, 1000);
};

export default timer;
