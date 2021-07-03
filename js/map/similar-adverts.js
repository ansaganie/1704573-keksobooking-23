import {
  createFeaturesList,
  createPhotosList,
  createRoomAndGuestText,
  updatePropertyOrHide,
  appendChildOrHide
} from './similar-adverts-utils.js';

const TYPES_IN_RUSSIAN = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');

const generateCard = ({ author, offer }) => {
  const newCard = cardTemplate.cloneNode(true);

  newCard.querySelector('.popup__title').textContent = offer.title;
  newCard.querySelector(
    '.popup__text--price',
  ).innerHTML = `${offer.price} <span>₽/ночь</span>`;

  updatePropertyOrHide(
    newCard.querySelector('.popup__text--address'),
    'textContent',
    offer.address,
  );

  updatePropertyOrHide(
    newCard.querySelector('.popup__type'),
    'textContent',
    TYPES_IN_RUSSIAN[offer.type],
  );

  updatePropertyOrHide(
    newCard.querySelector('.popup__text--capacity'),
    'textContent',
    createRoomAndGuestText(offer.rooms, offer.guests),
  );

  updatePropertyOrHide(
    newCard.querySelector('.popup__text--time'),
    'textContent',
    `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`,
  );

  appendChildOrHide(
    newCard.querySelector('.popup__features'),
    createFeaturesList(offer.features),
  );

  updatePropertyOrHide(
    newCard.querySelector('.popup__description'),
    'textContent',
    offer.description,
  );

  const photos = newCard.querySelector('.popup__photos');
  const imgTemplate = photos.querySelector('.popup__photo');
  appendChildOrHide(photos, createPhotosList(offer.photos, imgTemplate));

  updatePropertyOrHide(
    newCard.querySelector('.popup__avatar'),
    'src',
    author.avatar,
  );

  return newCard;
};

export { generateCard };
