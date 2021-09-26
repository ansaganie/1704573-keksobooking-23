const ADDRESS_PATTERN = /^([0-9]+\.?[0-9]*|\.[0-9]+) ([0-9]+\.?[0-9]*|\.[0-9]+)$/;

const address = document.querySelector('#address');
const validationMessage = address.nextElementSibling;

const onAddressChange = () => {

  if (!ADDRESS_PATTERN.test(address.value)) {
    validationMessage.textContent = 'Неправильный формат адреса';
    return false;
  }

  return true;
};

export { address, onAddressChange };
