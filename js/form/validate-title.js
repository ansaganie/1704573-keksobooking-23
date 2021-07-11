const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;

const title = document.querySelector('#title');

const validateTitle = () => {
  const validity = title.validity;
  const messageElement = title.nextElementSibling;
  const length = title.value.length;

  if (validity.valueMissing) {
    messageElement.textContent = 'Это обязательное поле';
    return false;
  }

  if (validity.tooShort) {
    messageElement.textContent = `Минимум 30 символов, не хватает еще ${
      TITLE_MIN_LENGTH - length
    }`;
    return false;
  }

  if (validity.tooLong) {
    messageElement.textContent = `Максимум ${TITLE_MAX_LENGTH} символов`;
    return false;
  }

  messageElement.textContent = '';
  return true;
};

export { title, validateTitle };
