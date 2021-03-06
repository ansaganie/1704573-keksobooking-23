import { resetForm } from './form/form.js';
import { activateMapFilters } from './page-state.js';

const MAIN_DIRECTORY = 'https://23.javascript.pages.academy/keksobooking';
const api = {
  send: '',
  get: '/data',
};

let adverts;

const getData = (onSuccess, onError) => {
  fetch(MAIN_DIRECTORY + api.get)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Похожие объявления не загружены');
      } else {
        return response;
      }
    })
    .then((response) => response.json())
    .then((data) => {
      adverts = data;
      onSuccess();
      activateMapFilters();
    })
    .catch(onError);
};

const sendData = (formData, onSuccess, onError) => {
  fetch(
    MAIN_DIRECTORY + api.send,
    {
      method: 'POST',
      credentials: 'same-origin',
      body: formData,
    },
  ).then((response) => {
    if (response.ok) {
      resetForm();
      onSuccess();
    } else {
      onError();
    }
  }).catch(onError);
};

export { getData, sendData, adverts };
