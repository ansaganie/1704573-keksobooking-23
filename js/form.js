import { price, validatePrice } from './form-validate-price.js';
import { type, TYPE_MIN_PRICE } from './form-validate-type.js';
import { title, validateTitle } from './form-validate-title.js';
import {
  validateRoomAndGuestNumber,
  synchronizeRoomAndGuestNumber,
  roomNumber,
  guestNumber
} from './form-validate-room-guest.js';

const advertForm = document.querySelector('.ad-form');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');

const address = advertForm.querySelector('#address');

//const timein = advertForm.querySelector('#timein');
//const timeout = advertForm.querySelector('#timeout');

//this is a temporary value shows the coordinates of the center of Tokyo
address.value = '35.65858 139.74543';

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

type.addEventListener('change', () => {
  price.placeholder = TYPE_MIN_PRICE[type.value];
  price.min = TYPE_MIN_PRICE[type.value];
});

formSubmitButton.addEventListener('click', (evt) => {
  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndGuestNumberValid = validateRoomAndGuestNumber();
  if (!isTitleValid || !isPriceValid || !isRoomAndGuestNumberValid) {
    evt.preventDefault();
  }
});
