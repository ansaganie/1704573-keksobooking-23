/**
 * Creates <li> elements of corresponiding features from 'featuresList' array
 * @param {array} featureList list of strings
 * @returns {DocumentFragment}
*/
const createFeaturesList = (featuresList) => {
  const bucket = document.createDocumentFragment();

  const listElem = document.createElement('li');
  listElem.classList.add('popup__feature');

  featuresList.forEach((element) => {
    const newListElem = listElem.cloneNode(true);
    newListElem.classList.add(`popup__feature--${element}`);
    bucket.append(newListElem);
  });

  return bucket;
};

/**
 * Generates list of <img> elements with corresponding 'src' value retrived from
 * the imput array 'photosList'
 * @param {array} photosList list of strings with images 'src'
 * @param {HTMLElement} imgElement template of <img> element
 * @returns {DocumentFragment}
*/
const createPhotosList = (photosList, imgElement) => {
  const bucket = document.createDocumentFragment();
  photosList.forEach((elem) => {
    const newImg = imgElement.cloneNode(true);
    newImg.src = elem;
    bucket.append(newImg);
  });

  return bucket;
};

/**
 * Сomposes a string from the number of rooms and guests with the correct
 * suffix in Russian
 * @param {integer} rooms rooms' number
 * @param {integer} guests guests' number
 * @returns {string}
 */
const createRoomAndGuestText = (rooms, guests) => {
  const roomsText = rooms === 1 ? '1 комната' : `${rooms} комнаты`;
  const guestsText = guests === 0 ? 'не для' : `для ${guests}`;
  return `${roomsText} ${guestsText} ${
    guestsText.endsWith('1') ? 'гостя' : 'гостей'
  }`;
};

export{ createFeaturesList, createPhotosList, createRoomAndGuestText };
