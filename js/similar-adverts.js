import { getRandomAdvert } from './data.js';
import {
  createFeaturesList,
  createPhotosList,
  createRoomAndGuestText
} from './similar-adverts-utils.js';

const RANDOM_ADVERT_COUNT = 10;

const cardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const randomAdverts = new Array(RANDOM_ADVERT_COUNT)
  .fill(null)
  .map(getRandomAdvert);

const similarListFragment = new Array();

randomAdverts.forEach((advert) => {
  const newCard = cardTemplate.cloneNode(true);
  const offer = advert.offer;

  newCard.querySelector('.popup__title').textContent = offer.title;
  newCard.querySelector('.popup__text--address').textContent = offer.address;
  newCard.querySelector(
    '.popup__text--price',
  ).innerHTML = `${offer.price} <span>₽/ночь</span>`;
  newCard.querySelector('.popup__type').textContent = offer.type;
  newCard.querySelector('.popup__text--capacity').textContent =
    createRoomAndGuestText(offer.rooms, offer.guests);
  newCard.querySelector(
    '.popup__text--time',
  ).textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  const features = newCard.querySelector('.popup__features');
  features.textContent = '';
  features.appendChild(createFeaturesList(offer.features));

  newCard.querySelector('.popup__description').textContent = offer.description;

  const photos = newCard.querySelector('.popup__photos');
  const imgTemplate = photos.querySelector('.popup__photo');
  photos.textContent = '';
  photos.appendChild(createPhotosList(offer.photos, imgTemplate));

  newCard.querySelector('.popup__avatar').src = advert.author.avatar;
  similarListFragment.push(newCard);
});

mapCanvas.appendChild(similarListFragment[0]);

