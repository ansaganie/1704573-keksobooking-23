import { resetForm } from './form/form.js';

const DATA_FETCH_LINK = 'https://23.javascript.pages.academy/keksobooking/data';
const DATA_PUSH_LINK = 'https://23.javascript.pages.academy/keksobooking';

const getData = (renderPopups, showErrorMessage) => {
  fetch(DATA_FETCH_LINK)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Data was not retreived');
      } else {
        return response;
      }
    })
    .then((response) => response.json())
    .then((adverts) => {
      renderPopups(adverts);
    })
    .catch(() => {
      showErrorMessage();
    });
};

const sendData = (formData, success, error) => {
  fetch(
    DATA_PUSH_LINK,
    {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      resetForm();
      success();
    } else {
      error();
    }
  }).catch(() => error());
};

export { getData, sendData };
