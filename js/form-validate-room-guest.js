import { disableOptions } from './form-utils.js';

const roomNumber = document.querySelector('#room_number');
const guestNumber = document.querySelector('#capacity');

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

export {
  validateRoomAndGuestNumber,
  synchronizeRoomAndGuestNumber,
  guestNumber,
  roomNumber
};
