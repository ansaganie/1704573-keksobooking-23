import { createPopups } from './map.js';
import { showServerErrorMessage } from './utils.js';

const DATA_FETCH_LINK = 'https://23.javascript.pages.academy/keksobooking/data';

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
    createPopups(adverts);
  })
  .catch(() => {
    showServerErrorMessage();
  });
