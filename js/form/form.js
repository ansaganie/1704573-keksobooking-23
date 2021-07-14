import { onTitleInput, title } from './validate-title.js';
import {
  price,
  type,
  onPriceInput,
  onTypeChange
} from './validate-price-type.js';
import {
  onCapacityChange,
  onRoomNumberChange,
  capacity,
  roomNumber
} from './validate-room-capacity.js';
import { resetMap } from '../map/map.js';
import { onAddressChange } from './validate-address.js';
import { showErrorMessage, showSuccessMessage } from './success-error.js';
import { sendData } from '../api.js';
import { clearFilter } from '../map/filter.js';
import { debounce } from '../utils.js';
import { clearFileInputs, addImageInputEventListeners } from './photos.js';
import './timein-timeout.js';

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
  onTypeChange();
  resetValidationMessages();
  clearFilter();
  clearFileInputs();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const isTitleValid = onTitleInput();
  const isPriceValid = onPriceInput();
  const isRoomAndCapacityValid = onCapacityChange();
  const isAddressValid = onAddressChange();

  if (
    isTitleValid
    && isPriceValid
    && isRoomAndCapacityValid
    && isAddressValid
  ) {
    sendData(new FormData(advertForm), showSuccessMessage, showErrorMessage);
  }
};

onRoomNumberChange();
addImageInputEventListeners();

capacity.addEventListener('change', onCapacityChange);

roomNumber.addEventListener('change', onRoomNumberChange);

title.addEventListener('input', debounce(onTitleInput));

price.addEventListener('input', debounce(onPriceInput));

type.addEventListener('change', onTypeChange);

formSubmitButton.addEventListener('click', onFormSubmit);

formResetButton.addEventListener('click', onResetButtonClick);

export { onResetButtonClick as resetForm, advertForm };
