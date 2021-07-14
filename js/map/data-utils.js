/**
 * Creates <li> elements of corresponiding features from 'features' array
 * @param {array} features list of strings
 * @returns {DocumentFragment}
 */
const createFeaturesList = (features) => {
  if (!features) {
    return null;
  }

  const bucket = document.createDocumentFragment();

  const listElem = document.createElement('li');
  listElem.classList.add('popup__feature');

  features.forEach((element) => {
    const newListElem = listElem.cloneNode(true);
    newListElem.classList.add(`popup__feature--${element}`);
    bucket.append(newListElem);
  });

  return bucket;
};

/**
 * Generates list of <img> elements with corresponding 'src' value retrived from
 * the imput array 'photosList'
 * @param {array} photos list of strings with images 'src'
 * @param {HTMLElement} img template of <img> element
 * @returns {DocumentFragment}
 */
const createPhotosList = (photos, img) => {
  if (!photos) {
    return null;
  }

  const bucket = document.createDocumentFragment();

  photos.forEach((elem) => {
    const newImg = img.cloneNode(true);
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

  return `${roomsText} ${guestsText} ${guestsText.endsWith('1') ? 'гостя' : 'гостей'}`;
};

/**
 * Updates/initializes the property of given element with the passed object.
 * If the passed object is 'null' or 'undefined' if visually hides the element
 * @param {HTMLElement} element element to be updated
 * @param {string} propertyName attribute name to be updated or initialized
 * @param {string} text value to be set to property
 */
const updatePropertyOrHide = (element, propertyName, text) => {
  if (text === null || text === undefined) {
    element.classList.add('hidden');
    return;
  }
  element[propertyName] = text;
};

/**
 * Appends given DocumentFragment to given element, but if the fragment is null,
 * it hides the element visually
 * @param {HTMLElement} element element to be updated
 * @param {DocumentFragment} fragment fragment of HTML elements
 */
const appendChildOrHide = (element, fragment) => {
  if (fragment === null) {
    element.classList.add('hidden');
  } else {
    element.innerHTML = '';
    element.appendChild(fragment);
  }
};

export {
  createFeaturesList,
  createPhotosList,
  createRoomAndGuestText,
  updatePropertyOrHide,
  appendChildOrHide
};
