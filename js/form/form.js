import { validateTitle, title } from './validate-title.js';
import {
  price,
  type,
  validatePrice,
  syncPricePlaceholderAndMinValue
} from './validate-price-type.js';
import {
  validateRoomNumberAndCapacity,
  synchronizeRoomNumberAndCapacity,
  capacity,
  roomNumber
} from './validate-room-capacity.js';
import { resetMap } from '../map/map.js';
import { validateAddress } from './validate-address.js';
import { showErrorMessage, showSuccessMessage } from './success-error.js';
import { sendData } from '../api.js';
import { clearFilter } from '../map/filter.js';
import { debounce } from '../utils.js';
import { clearFileInputs, addImageInputEventListeners } from './photos.js';
import { addTimeinTimeoutEventListeners } from './timein-timeout.js';

const advertForm = document.querySelector('.ad-form');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');
const formResetButton = advertForm.querySelector('.ad-form__reset');

const callAndAddInputListener = (elem, func) => {
  const callback = () => {
    func();
    elem.addEventListener('input', debounce(func));
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
  clearFileInputs();
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

capacity.addEventListener('change', validateRoomNumberAndCapacity);

roomNumber.addEventListener('change', synchronizeRoomNumberAndCapacity);

title.addEventListener('blur', callAndAddInputListener(title, validateTitle));

price.addEventListener('blur', callAndAddInputListener(price, validatePrice));

type.addEventListener('change', syncPricePlaceholderAndMinValue);

addTimeinTimeoutEventListeners();
addImageInputEventListeners();

formSubmitButton.addEventListener('click', submitForm);
formResetButton.addEventListener('click', resetForm);

export { resetForm, advertForm };
