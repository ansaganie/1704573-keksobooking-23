import { isEsc } from '../utils.js';

const CAPTURE = {
  'once' : true,
};

const destroyElement = (element) => (evt) => {
  if (element.parentNode && (isEsc(evt.key) || evt.type === 'click')) {
    element.parentNode.removeChild(element);
  }
};

const showSuccessMessage = ()  => {
  const success = document.querySelector('#success')
    .content
    .querySelector('.success')
    .cloneNode(true);
  success.addEventListener('click', destroyElement(success), CAPTURE);
  document.addEventListener('keydown', destroyElement(success), CAPTURE);

  document.body.appendChild(success);
};

const showErrorMessage = ()  => {
  const error = document.querySelector('#error')
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
