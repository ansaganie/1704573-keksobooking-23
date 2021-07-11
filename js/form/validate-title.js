const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;

const title = document.querySelector('#title');
const validationMessage = title.nextElementSibling;

const validateTitle = () => {
  const validity = title.validity;
  const length = title.value.length;

  if (validity.valueMissing) {
    validationMessage.textContent = 'Это обязательное поле';

    return false;
  }

  if (validity.tooShort) {
    validationMessage.textContent =
    `Минимум 30 символов, не хватает еще ${TITLE_MIN_LENGTH - length}`;

    return false;
  }

  if (validity.tooLong) {
    validationMessage.textContent = `Максимум ${TITLE_MAX_LENGTH} символов`;

    return false;
  }

  validationMessage.textContent = '';

  return true;
};

export { title, validateTitle };
