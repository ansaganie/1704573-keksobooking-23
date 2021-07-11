const ADDERSS_PATTERN = /^([0-9]+\.?[0-9]*|\.[0-9]+) ([0-9]+\.?[0-9]*|\.[0-9]+)$/;

const address = document.querySelector('#address');

const validateAddress = () => {
  const messageElement = address.nextElementSibling;

  if (!ADDERSS_PATTERN.test(address.value)) {
    messageElement.textContent = 'Неправильный формат адреса';
    return false;
  }

  return true;
};

export { address, validateAddress };
