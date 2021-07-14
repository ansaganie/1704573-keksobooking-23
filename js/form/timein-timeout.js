const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const onTimeInChange = () => {
  timeout.value = timein.value;
};

const onTimeOutChange = () => {
  timein.value = timeout.value;
};

timein.addEventListener('change', onTimeInChange);
timeout.addEventListener('change', onTimeOutChange);

