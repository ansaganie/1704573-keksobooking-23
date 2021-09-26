import {
  createFeaturesList,
  createPhotosList,
  createRoomAndGuestText,
  updatePropertyOrHide,
  appendChildOrHide
} from './data-utils.js';

const TYPES_IN_RUSSIAN = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const cardTemplate = document
  .querySelector('#card')
  .content
  .querySelector('.popup');

const generateCard = ({ author, offer }) => {
  const newCard = cardTemplate.cloneNode(true);
  const {guests, checkin, checkout, photos } = offer;

  newCard.querySelector('.popup__title').textContent = offer.title;
  newCard.querySelector(
    '.popup__text--price',
  ).textContent = `${offer.price} ₽/ночь`;

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
    createRoomAndGuestText(offer.rooms, guests),
  );

  updatePropertyOrHide(
    newCard.querySelector('.popup__text--time'),
    'textContent',
    `Заезд после ${checkin}, выезд до ${checkout}`,
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

  const photosElement = newCard.querySelector('.popup__photos');
  const imgTemplate = photosElement.querySelector('.popup__photo');
  appendChildOrHide(photosElement, createPhotosList(photos, imgTemplate));

  updatePropertyOrHide(
    newCard.querySelector('.popup__avatar'),
    'src',
    author.avatar,
  );

  return newCard;
};

export { generateCard };
