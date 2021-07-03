import { validateTitle, title } from './form-validate-title.js';
import {
  price,
  type,
  validatePrice,
  changePricePlaceholderAndMin
} from './form-validate-price-type.js';
import {
  validateRoomNumberAndCapacity,
  synchronizeRoomNumberAndCapacity,
  capacity,
  roomNumber
} from './form-validate-room-capacity.js';
import { resetMap } from '../map/map.js';
import { validateAddress } from './form-validate-address.js';
import { showErrorMessage, showSuccessMessage } from './success-error.js';
import { sendData } from '../api.js';

const advertForm = document.querySelector('.ad-form');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');
const timein = advertForm.querySelector('#timein');
const timeout = advertForm.querySelector('#timeout');
const formResetButton = advertForm.querySelector('.ad-form__reset');

const callAndAddInputListener = (elem, func) => {
  const callback = () => {
    func();
    elem.addEventListener('input', func);
  };

  return callback;
};

const resetValidationMessages = () => {
  const validationMessages = document.querySelectorAll('.validation-message');
  validationMessages.forEach((message)=> {
    message.textContent = '';
  });
};

const resetForm = () => {
  advertForm.reset();
  resetMap();
  changePricePlaceholderAndMin();
  resetValidationMessages();
};

const submitFrom = (evt) => {
  evt.preventDefault();

  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndGuestNumberValid = validateRoomNumberAndCapacity();
  const isAddressValid = validateAddress();

  if (isTitleValid && isPriceValid
     && isRoomAndGuestNumberValid && isAddressValid) {
    sendData(new FormData(advertForm), showSuccessMessage, showErrorMessage);
  }
};

synchronizeRoomNumberAndCapacity();

formResetButton.addEventListener('click', resetForm);

capacity.addEventListener('change', validateRoomNumberAndCapacity);

roomNumber.addEventListener('change', synchronizeRoomNumberAndCapacity);

title.addEventListener('blur', callAndAddInputListener(title, validateTitle));

price.addEventListener('blur', callAndAddInputListener(price, validatePrice));

type.addEventListener('change', changePricePlaceholderAndMin);

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

formSubmitButton.addEventListener('click', submitFrom);

export {
  resetForm
};
