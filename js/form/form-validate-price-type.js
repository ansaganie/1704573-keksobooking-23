const PRICE_MAX_VALUE = '1 000 000';
const NUMBER_PATTERN = /^\D+$/;
const TYPE_MIN_PRICE = {
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000,
};

const type = document.querySelector('#type');
const price = document.querySelector('#price');

const validatePrice = () => {
  const validity = price.validity;
  const messageElement = price.nextElementSibling;

  if (validity.valueMissing) {
    messageElement.textContent = 'Это обязательное поле';
    return false;
  }

  if (validity.rangeOverflow) {
    messageElement.textContent = `Максимальная цена ${PRICE_MAX_VALUE}`;
    return false;
  }

  if (validity.rangeUnderflow) {
    messageElement.textContent = `Минимальная цена ${TYPE_MIN_PRICE[type.value]}`;
    return false;
  }

  if (NUMBER_PATTERN.test(price.value)) {
    messageElement.textContent = 'Цена указывается в цифрах';
    return false;
  }

  messageElement.textContent = '';
  return true;
};

const changePricePlaceholderAndMin = () => {
  price.placeholder = TYPE_MIN_PRICE[type.value];
  price.min = TYPE_MIN_PRICE[type.value];
};

export {
  price,
  type,
  validatePrice,
  changePricePlaceholderAndMin
};
