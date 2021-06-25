import { price, validatePrice } from './form-validate-price.js';
import { validateTitle, title } from './form-validate-title.js';
import {
  validateRoomNumberAndCapacity,
  synchronizeRoomNumberAndCapacity,
  capacity,
  roomNumber
} from './form-validate-room-capacity.js';

const advertForm = document.querySelector('.ad-form');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');
const address = advertForm.querySelector('#address');

const callAndAddInputListener = (elem, func) => {
  const callback = () => {
    func();
    elem.addEventListener('input', func);
  };
  return callback;
};

//this is a temporary value shows the coordinates of the center of Tokyo
address.value = '35.65858 139.74543';

synchronizeRoomNumberAndCapacity();

capacity.addEventListener('change', validateRoomNumberAndCapacity);

roomNumber.addEventListener('change', synchronizeRoomNumberAndCapacity);

title.addEventListener('blur', callAndAddInputListener(title, validateTitle));

price.addEventListener('blur', callAndAddInputListener(price, validatePrice));

formSubmitButton.addEventListener('click', (evt) => {
  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndGuestNumberValid = validateRoomNumberAndCapacity();

  if (!isTitleValid || !isPriceValid || !isRoomAndGuestNumberValid) {
    evt.preventDefault();
  }
});
