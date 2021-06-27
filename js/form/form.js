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

const advertForm = document.querySelector('.ad-form');
const formSubmitButton = advertForm.querySelector('.ad-form__submit');

const callAndAddInputListener = (elem, func) => {
  const callback = () => {
    func();
    elem.addEventListener('input', func);
  };

  return callback;
};

synchronizeRoomNumberAndCapacity();

capacity.addEventListener('change', validateRoomNumberAndCapacity);

roomNumber.addEventListener('change', synchronizeRoomNumberAndCapacity);

title.addEventListener('blur', callAndAddInputListener(title, validateTitle));

price.addEventListener('blur', callAndAddInputListener(price, validatePrice));

type.addEventListener('change', changePricePlaceholderAndMin);

formSubmitButton.addEventListener('click', (evt) => {
  const isTitleValid = validateTitle();
  const isPriceValid = validatePrice();
  const isRoomAndGuestNumberValid = validateRoomNumberAndCapacity();

  if (!isTitleValid || !isPriceValid || !isRoomAndGuestNumberValid) {
    evt.preventDefault();
  }
});
