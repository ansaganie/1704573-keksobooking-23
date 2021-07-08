import { validateTitle, title } from './form-validate-title.js';
import {
  price,
  type,
  validatePrice,
  syncPricePlaceholderAndMinValue
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
import { clearFilter } from '../map/filter.js';

const advertForm = document.querySelector('.ad-form');
const timein = advertForm.querySelector('#timein');
const timeout = advertForm.querySelector('#timeout');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');
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
  syncPricePlaceholderAndMinValue();
  resetValidationMessages();
  clearFilter();
};

const submitForm = (evt) => {
  evt.preventDefault();

  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndCapacityValid = validateRoomNumberAndCapacity();
  const isAddressValid = validateAddress();

  if (isTitleValid && isPriceValid
     && isRoomAndCapacityValid && isAddressValid) {
    sendData(new FormData(advertForm), showSuccessMessage, showErrorMessage);
  }
};

synchronizeRoomNumberAndCapacity();

formResetButton.addEventListener('click', resetForm);

capacity.addEventListener('change', validateRoomNumberAndCapacity);

roomNumber.addEventListener('change', synchronizeRoomNumberAndCapacity);

title.addEventListener('blur', callAndAddInputListener(title, validateTitle));

price.addEventListener('blur', callAndAddInputListener(price, validatePrice));

type.addEventListener('change', syncPricePlaceholderAndMinValue);

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

timeout.addEventListener('change', () => {
  timein.value = timeout.value;
});

formSubmitButton.addEventListener('click', submitForm);

export { resetForm, advertForm };
