import { disableOptions } from './form-utils.js';

const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const PRICE_MAX_VALUE = '1 000 000';
const NUMBER_PATTERN = /^\D+$/;

const advertForm = document.querySelector('.ad-form');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');

const address = advertForm.querySelector('#address');
const title = advertForm.querySelector('#title');
const price = advertForm.querySelector('#price');
const roomNumber = advertForm.querySelector('#room_number');
const guestNumber = advertForm.querySelector('#capacity');

//this is a temporary value shows the coordinates of the center of Tokyo
address.value = '35.65858 139.74543';

const validateRoomAndGuestNumber = () => {
  const roomValue = roomNumber.value;
  const guestValue = guestNumber.value;
  const messageElement = guestNumber.nextElementSibling;

  switch (roomValue) {
    case '1':
      if (guestValue !== '1') {
        messageElement.textContent = '1 комната = 1 гость';
        return false;
      }
      break;
    case '2':
      if (guestValue !== '1' && guestValue !== '2') {
        messageElement.textContent = '2 комнаты = 1 или 2 гостей';
        return false;
      }
      break;
    case '3':
      if (guestValue === '0') {
        messageElement.textContent = '3 комнаты = 1, 2 или 3 гостей';
        return false;
      }
      break;
    case '100':
      if (guestValue !== '0') {
        messageElement.textContent = '100 комнат не для гостей';
        return false;
      }
      break;
  }
  messageElement.textContent = '';
  return true;
};

const synchronizeRoomAndGuestNumber = () => {
  const options = guestNumber.children;
  switch (roomNumber.value) {
    case '1':
      disableOptions(options, '1');
      break;
    case '2':
      disableOptions(options, '1', '2');
      break;
    case '3':
      disableOptions(options, '1', '2', '3');
      break;
    case '100':
      disableOptions(options, '0');
      break;
  }
  validateRoomAndGuestNumber();
};

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

const validatePrice = () => {
  const validity = price.validity;
  const messageElement = price.nextElementSibling;
  if (validity.valueMissing) {
    messageElement.textContent = 'Это обязательное поле';
    return false;
  }

  if (validity.rangeOverflow) {
    messageElement.textContent = `Максимальная цена ${PRICE_MAX_VALUE}`;
    return false;
  }

  if (NUMBER_PATTERN.test(price.value)) {
    messageElement.textContent = 'Цена указывается в цифрах';
    return false;
  }
  messageElement.textContent = '';
  return true;
};

synchronizeRoomAndGuestNumber();

guestNumber.addEventListener('change', validateRoomAndGuestNumber);

roomNumber.addEventListener('change', synchronizeRoomAndGuestNumber);

title.addEventListener('blur', () => {
  validateTitle();
  title.addEventListener('input', validateTitle);
});

price.addEventListener('blur', () => {
  validatePrice();
  price.addEventListener('input', validatePrice);
});

formSubmitButton.addEventListener('click', (evt) => {
  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndGuestNumberValid = validateRoomAndGuestNumber();
  if (!isTitleValid || !isPriceValid || !isRoomAndGuestNumberValid) {
    evt.preventDefault();
  }
});
