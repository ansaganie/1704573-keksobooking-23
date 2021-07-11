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
const validationMessages = document.querySelectorAll('.validation-message');

const resetValidationMessages = () => {
  validationMessages.forEach((message)=> {
    message.textContent = '';
  });
};

const onResetButtonClick = () => {
  advertForm.reset();
  resetMap();
  syncPricePlaceholderAndMinValue();
  resetValidationMessages();
  clearFilter();
  clearFileInputs();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndCapacityValid = validateRoomNumberAndCapacity();
  const isAddressValid = validateAddress();

  if (
    isTitleValid
    && isPriceValid
    && isRoomAndCapacityValid
    && isAddressValid
  ) {
    sendData(new FormData(advertForm), showSuccessMessage, showErrorMessage);
  }
};

synchronizeRoomNumberAndCapacity();
addTimeinTimeoutEventListeners();
addImageInputEventListeners();

capacity.addEventListener('change', validateRoomNumberAndCapacity);

roomNumber.addEventListener('change', synchronizeRoomNumberAndCapacity);

title.addEventListener('input', debounce(validateTitle));

price.addEventListener('input', debounce(validatePrice));

type.addEventListener('change', syncPricePlaceholderAndMinValue);

formSubmitButton.addEventListener('click', onFormSubmit);

formResetButton.addEventListener('click', onResetButtonClick);

export { onResetButtonClick as resetForm, advertForm };
