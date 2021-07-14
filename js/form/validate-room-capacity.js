const ROOM_AND_CAPACITY = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const ROOM_CAPACITY_ERROR_MESSAGE = {
  1: '1 комната = 1 гость',
  2: '2 комнаты = 1 или 2 гостей',
  3: '3 комнаты = 1, 2 или 3 гостей',
  100: '100 комнат не для гостей',
};

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const validationMessage = capacity.nextElementSibling;

const onCapacityChange = () => {
  const roomValue = roomNumber.value;
  const guestValue = capacity.value;

  if (!ROOM_AND_CAPACITY[roomValue].includes(guestValue)) {
    validationMessage.textContent = ROOM_CAPACITY_ERROR_MESSAGE[roomValue];
    return false;
  } else {
    validationMessage.textContent = '';
    return true;
  }
};

const onRoomNumberChange = () => {
  for (const option of capacity.children) {
    if (!ROOM_AND_CAPACITY[roomNumber.value].includes(option.value)) {
      option.disabled = true;
    } else {
      option.selected = true;
      option.disabled = false;
    }
  }

  onCapacityChange();
};

export {
  onCapacityChange,
  onRoomNumberChange,
  capacity,
  roomNumber
};
