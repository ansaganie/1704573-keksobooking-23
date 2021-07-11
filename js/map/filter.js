import { drawPopups } from './map.js';
import { adverts } from '../api.js';

const priceFilters = {
  'any' : () => true,
  'low' : (priceGiven) => priceGiven < 10000 && priceGiven >= 0,
  'middle' : (priceGiven) => priceGiven >= 10000 && priceGiven < 50000,
  'high' : (priceGiven) => priceGiven >= 50000,
};

const mapFilters = document.querySelector('.map__filters');
const type = mapFilters.querySelector('#housing-type');
const price = mapFilters.querySelector('#housing-price');
const rooms = mapFilters.querySelector('#housing-rooms');
const guests = mapFilters.querySelector('#housing-guests');
const features = mapFilters.querySelector('#housing-features');

const retrieveFeaturesNames = (array) => {
  const result = [];
  for (const elem of array) {
    if (elem.checked) {
      result.push(elem.value);
    }
  }

  return result;
};

const doFilter = (data) => {
  const filtered = data
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

      const featuresArray = retrieveFeaturesNames(features.children);

      if (featuresArray.length > 0 && offer.features === undefined) {
        return false;
      }

      for (const elem of featuresArray) {
        if (!offer.features.includes(elem)) {
          return false;
        }
      }

      return true;
    });
  return filtered;
};

const clearFilter = () => {
  mapFilters.reset();
  drawPopups(adverts);
};

export { doFilter, clearFilter, mapFilters };
