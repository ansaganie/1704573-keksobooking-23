import { isEscPressed } from '../utils.js';

const CAPTURE = {
  'once' : true,
};

const success = document.querySelector('#success');
const error = document.querySelector('#error');

const destroyElement = (element) => (evt) => {
  if (element.parentNode && (isEscPressed(evt) || evt.type === 'click')) {
    element.parentNode.removeChild(element);
  }
};

const showSuccessMessage = ()  => {
  success
    .content
    .querySelector('.success')
    .cloneNode(true);
  success.addEventListener('click', destroyElement(success), CAPTURE);
  document.addEventListener('keydown', destroyElement(success), CAPTURE);

  document.body.appendChild(success);
};

const showErrorMessage = ()  => {
  error
    .content
    .querySelector('.error')
    .cloneNode(true);

  const errorButton = error.querySelector('.error__button');

  error.addEventListener('click', destroyElement(error), CAPTURE);
  errorButton.addEventListener('click', destroyElement(error), CAPTURE);
  document.addEventListener('keydown', destroyElement(error), CAPTURE);

  document.body.appendChild(error);
};

export {
  showSuccessMessage,
  showErrorMessage
};
