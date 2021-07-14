const PRICE_MAX_VALUE = '1 000 000';
const NUMBER_PATTERN = /^\D+$/;
const TYPE_MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const type = document.querySelector('#type');
const price = document.querySelector('#price');
const validationMessage = price.nextElementSibling;

const onPriceInput = () => {
  const validity = price.validity;

  if (validity.valueMissing) {
    validationMessage.textContent = 'Это обязательное поле';
    return false;
  }

  if (validity.rangeOverflow) {
    validationMessage.textContent = `Максимальная цена ${PRICE_MAX_VALUE}`;
    return false;
  }

  if (validity.rangeUnderflow) {
    validationMessage.textContent = `Минимальная цена ${
      TYPE_MIN_PRICE[type.value]
    }`;
    return false;
  }

  if (NUMBER_PATTERN.test(price.value)) {
    validationMessage.textContent = 'Цена указывается в цифрах';
    return false;
  }

  validationMessage.textContent = '';
  return true;
};

const onTypeChange = () => {
  price.placeholder = TYPE_MIN_PRICE[type.value];
  price.min = TYPE_MIN_PRICE[type.value];
};

export {
  price,
  type,
  onPriceInput,
  onTypeChange
};
