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
const features = Array.from(mapFilters.querySelectorAll('input[name=features]'));

const filterSelectedFeatures = (inputs) => inputs.filter((input) => input.checked);

const filterType = (offer, selectedType) => {
  if (offer.type !== selectedType && selectedType !== 'any') {
    throw new Error();
  }
};

const filterPrice = (offer, selectedPrice) => {
  if (!priceFilters[selectedPrice](offer.price)) {
    throw new Error();
  }
};

const filterRooms = (offer, selectedRooms) => {
  if (
    offer.rooms !== undefined
    && offer.rooms !== +selectedRooms
    && selectedRooms !== 'any'
  ) {
    throw new Error();
  }
};

const filterGuests = (offer, selectedGuests) => {
  if (
    offer.guests !== undefined
    && offer.guests !== +selectedGuests
    && selectedGuests !== 'any'
  ) {
    throw new Error();
  }
};

const filterFeatures = (offer, featureValues) => {
  if (featureValues.length > 0 && offer.features === undefined) {
    throw new Error();
  }

  featureValues.forEach((elem) => {
    if (!offer.features.includes(elem.value)) {
      throw new Error();
    }
  });
};

const doFilter = (data) => {
  const selectedFeatures = filterSelectedFeatures(features);
  const selectedType = type.value;
  const selectedPrice = price.value;
  const selectedRooms = rooms.value;
  const selectedGuests = guests.value;

  return data
    .filter((advert) => {
      const offer = advert.offer;
      try {
        filterType(offer, selectedType);
        filterPrice(offer, selectedPrice);
        filterRooms(offer, selectedRooms);
        filterGuests(offer, selectedGuests);
        filterFeatures(offer, selectedFeatures);
      } catch (err) {
        return false;
      }

      return true;
    });
};

const clearFilter = () => {
  mapFilters.reset();
  drawPopups(adverts);
};

export { doFilter, clearFilter, mapFilters };
