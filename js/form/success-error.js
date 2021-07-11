import { isEscPressed } from '../utils.js';

const CAPTURE = {
  'once' : true,
};

const success = document.querySelector('#success')
  .content
  .querySelector('.success');

const error = document.querySelector('#error')
  .content
  .querySelector('.error');

const onSuccessOrErrorClick = (element) => () => {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
};

const onSuccessOrErrorKeydown = (element) => (evt) => {
  if (element.parentNode && isEscPressed(evt)) {
    element.parentNode.removeChild(element);
  }
};


const showSuccessMessage = ()  => {
  const successClone = success.cloneNode(true);

  successClone.addEventListener('click', onSuccessOrErrorClick(successClone), CAPTURE);
  document.addEventListener('keydown', onSuccessOrErrorKeydown(successClone), CAPTURE);

  document.body.appendChild(successClone);
};

const showErrorMessage = ()  => {
  const errorClone = error.cloneNode(true);
  const errorButton = errorClone.querySelector('.error__button');

  errorClone.addEventListener('click', onSuccessOrErrorClick(errorClone), CAPTURE);
  errorButton.addEventListener('click', onSuccessOrErrorClick(errorClone), CAPTURE);
  document.addEventListener('keydown', onSuccessOrErrorKeydown(errorClone), CAPTURE);

  document.body.appendChild(errorClone);
};

export {
  showSuccessMessage,
  showErrorMessage
};
