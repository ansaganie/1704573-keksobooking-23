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

const onSuccessOrErrorKeydown = (element) => (evt) => {
  if (element.parentNode && isEscPressed(evt)) {
    element.parentNode.removeChild(element);
  }
};

const onSuccessOrErrorClick = (element, listener) => () => {
  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }

  document.removeEventListener('keydown', listener);
};

const showSuccessMessage = ()  => {
  const successClone = success.cloneNode(true);
  const onSuccessKeydown = onSuccessOrErrorKeydown(successClone);
  successClone.addEventListener(
    'click',
    onSuccessOrErrorClick(successClone, onSuccessKeydown),
  );

  document.addEventListener('keydown', onSuccessKeydown, CAPTURE);
  document.body.appendChild(successClone);
};

const showErrorMessage = ()  => {
  const errorClone = error.cloneNode(true);
  const onErrorKeydown = onSuccessOrErrorKeydown(errorClone);
  errorClone.addEventListener(
    'click',
    onSuccessOrErrorClick(errorClone, onErrorKeydown),
  );

  document.addEventListener('keydown', onErrorKeydown, CAPTURE);

  document.body.appendChild(errorClone);
};

export {
  showSuccessMessage,
  showErrorMessage
};
