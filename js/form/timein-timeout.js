const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

const addTimeinTimeoutEventListeners = () => {
  timein.addEventListener('change', () => {
    timeout.value = timein.value;
  });

  timeout.addEventListener('change', () => {
    timein.value = timeout.value;
  });
};

export { addTimeinTimeoutEventListeners };
