import { isEsc, removeElementItself } from '../utils.js';

const showSuccessMessage = ()  => {
  const success = document.querySelector('#success')
    .content
    .querySelector('.success');

  document.body.appendChild(success);

  success.addEventListener('click', removeElementItself.bind(null, success));
  document.addEventListener('keydown', (evt) => {
    if (isEsc(evt.key)) {
      removeElementItself(success);
    }
  });
};

export {
  showSuccessMessage
};

