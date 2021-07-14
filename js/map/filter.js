import { drawPopups } from './map.js';
import { adverts } from '../api.js';

const PRICE_LOW = 10000;
const PRICE_MIDDLE = 10000;
const PRICE_HIGH = 50000;

const priceFilters = {
  'any' : () => true,
  'low' : (priceGiven) => priceGiven < PRICE_LOW && priceGiven >= 0,
  'middle' : (priceGiven) => priceGiven >= PRICE_MIDDLE && priceGiven < PRICE_HIGH,
  'high' : (priceGiven) => priceGiven >= PRICE_HIGH,
};

const mapFilters = document.querySelector('.map__filters');
const type = mapFilters.querySelector('#housing-type');
const price = mapFilters.querySelector('#housing-price');
const rooms = mapFilters.querySelector('#housing-rooms');
const guests = mapFilters.querySelector('#housing-guests');
const features = mapFilters.querySelector('#housing-features');

const retrieveFeaturesNames = (inputs) => {
  const result = [];
  for (const elem of inputs) {
    if (elem.checked) {
      result.push(elem.value);
    }
  }

  return result;
};

const doFilter = (data) => data
  .filter((advert) => {
    const offer = advert.offer;

    if (offer.type !== type.value && type.value !== 'any') {
      return false;
    }

    if (!priceFilters[price.value](offer.price)) {
      return false;
    }

    if (
      offer.rooms !== undefined
      && offer.rooms !== +rooms.value
      && rooms.value !== 'any'
    ) {
      return false;
    }

    if (
      offer.guests !== undefined
      && offer.guests !== +guests.value
      && guests.value !== 'any'
    ) {
      return false;
    }

    const featuresNames = retrieveFeaturesNames(features.children);

    if (featuresNames.length > 0 && offer.features === undefined) {
      return false;
    }

    for (const elem of featuresNames) {
      if (!offer.features.includes(elem)) {
        return false;
      }
    }

    return true;
  });

const clearFilter = () => {
  mapFilters.reset();
  drawPopups(adverts);
};

export { doFilter, clearFilter, mapFilters };
