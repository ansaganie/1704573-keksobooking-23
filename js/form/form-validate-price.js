
const PRICE_MAX_VALUE = '1 000 000';
const NUMBER_PATTERN = /^\D+$/;

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

  if (NUMBER_PATTERN.test(price.value)) {
    messageElement.textContent = 'Цена указывается в цифрах';
    return false;
  }
  messageElement.textContent = '';
  return true;
};

export { price, validatePrice };
