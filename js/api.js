import { createPopups } from './map.js';

const DATA_FETCH_LINK = 'https://23.javascript.pages.academy/keksobooking/data';

fetch(DATA_FETCH_LINK)
  .then((response) => response.json())
  .then((adverts) => {
    createPopups(adverts);
  });
