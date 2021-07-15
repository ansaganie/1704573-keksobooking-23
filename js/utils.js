const ERROR_MESSAGE_SHOW_TIME = 3000;

// Функция взята из интернета и доработана
// Источник - https://www.freecodecamp.org/news/javascript-debounce-example

const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
};

/**
 * Shows and hides hardcoded server error message and hides it after fixed time
 * @returns {void};
 */
const showServerErrorMessage = (error) => {
  const errorElement = document.body.querySelector('.server-error');
  const errorMessage = errorElement.querySelector('.server-error__message');
  errorMessage.textContent = `Ошибка: ${error.message}`;
  errorElement.classList.remove('hidden');
  setTimeout(() => errorElement.classList.add('hidden'), ERROR_MESSAGE_SHOW_TIME);
};

const isEscPressed = (evt) => evt.key === 'Escape';

export {
  showServerErrorMessage,
  isEscPressed,
  debounce
};
