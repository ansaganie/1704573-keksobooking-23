import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomElement,
  getRandomSubArray
} from './utils.js';

const OFFER_PRICE_MIN = 1500;
const OFFER_PRICE_MAX = 50000;
const PHOTO_COUNT_MIN = 2;
const PHOTO_COUNT_MAX = 4;
const LATITUDE_MIN = 35.65;
const LATITUDE_MAX = 35.7;
const LONGITUDE_MIN = 139.7;
const LONGITUDE_MAX = 139.8;
const LAT_LNG_PRECISION = 5;

const AUTHORS_NAME = [
  'Aras Mayer',
  'Ehsan Bain',
  'Fearne Armstrong',
  'Yasmine Contreras',
  'Amisha Figueroa',
  'Harper-Rose Sparrow',
  'Kyran Boyce',
  'Tia Roth',
  'Ayse Haynes',
  'Yahya Mckee',
  'Ananya Manning',
  'Larry Wheatley',
  'Alaw Washington',
  'Amelia Mackenzie',
  'Yazmin Smart',
  'Awais Hawes',
];

const OFFER_TITLE = [
  'Oakwood Premier Tokyo',
  'Hotel ICHIGAYA（JR Ichigaya Sta.)',
  'TOE LIBRARY Tokyo Asakusa',
  'SCASA NishiShinjuku',
  'COTO Tokyo Shibuya 4',
  'Studio Inn Nishi Shinjuku',
  'COTO Tokyo Shibuya 2',
  'Stay SAKURA Tokyo Shinjuku Hyaku Kura',
  'Hotel Axas Nihonbashi',
  'Space F 代々木',
  'Hermitage Nishi Shinjuku',
];

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_CHECK_TIMES = ['12:00', '13:00', '14:00'];

const OFFER_ROOM_COUNT = [1, 2, 3, 100];

const OFFER_GUEST_COUNT = [0, 1, 2, 3];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_DESCRIPTIONS = [
  `This accommodation is located near “Hikifune” station. You can reach there on foot
  from the station about 8min. Relatively close from Asakusa is Sensoji Temple and
  Kaminarimon, it is a quiet downtown.`,
  `Non smoking European-style rooms (with bath and toilet)
  My Resort House is located in the place of overlooking the Pacific Ocean.
  You can stay the room is the third floor.
  Please enjoy the South-Boso of resort life !!`,
  `In the traditional town of Asakusabashi, this room is beautifully decorated and kept,
  a spot of relaxation and warmth. Comfortable living quarters include bedding for 4 guests
  and plenty of space. Amenities are prepared from the basic bathroom variety to the kitchen,
   and laundry items. Excellent for long-term stays. Internet supported by WiFi. 3 minute walk
    away from the station, and just 3 minutes away to Asakusa.`,
  `Sasazuka Station is 5 minutes by train to Shinjuku Station,
  It is a very convenient location because you can use the metropolitan Shinjuku line besides the Keio line! !
  The recommended neighboring places are Yoyogi Park and Shimokitazawa Station.
  Yoyogi Park is a big park where you can feel the four seasons!
  Shimokitazawa station is old clothes and music, since the night in the popularity of the`,
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

/**
 * Generates a random offer from given list of data
 * @param {object} location - location object with latitude and longitude values;
 * @returns {object} random offer
 */
const getRandomOffer = (location) => ({
  title: getRandomElement(OFFER_TITLE),
  address: `${location.lat}, ${location.lng}`,
  price: getRandomPositiveInteger(OFFER_PRICE_MIN, OFFER_PRICE_MAX),
  type: getRandomElement(OFFER_TYPES),
  rooms: getRandomElement(OFFER_ROOM_COUNT),
  guests: getRandomElement(OFFER_GUEST_COUNT),
  checkin: getRandomElement(OFFER_CHECK_TIMES),
  checkout: getRandomElement(OFFER_CHECK_TIMES),
  features: getRandomSubArray(
    OFFER_FEATURES,
    getRandomPositiveInteger(1, OFFER_FEATURES.length - 1),
  ),
  description: getRandomElement(OFFER_DESCRIPTIONS),
  photos: getRandomSubArray(
    OFFER_PHOTOS,
    getRandomPositiveInteger(PHOTO_COUNT_MIN, PHOTO_COUNT_MAX),
  ),
});

const getRandomAvatar = ()  => {
  const randomInt = getRandomPositiveInteger(1, 11)
  const imgNumber = randomInt < 10 ? `0${randomInt}` : randomInt;
  return `img/avatars/user${imgNumber}.png`;
};

/**
 * Generates a random advertisement from given list of data
 * @returns {object} random advert
 */
const getRandomAdvert = () => {
  const location = {
    lat: getRandomPositiveFloat(LATITUDE_MIN, LATITUDE_MAX, LAT_LNG_PRECISION),
    lng: getRandomPositiveFloat(
      LONGITUDE_MIN,
      LONGITUDE_MAX,
      LAT_LNG_PRECISION,
    ),
  };
  return {
    author: {
      name: getRandomElement(AUTHORS_NAME),
      avatar: getRandomAvatar(),
    },
    location: location,
    offer: getRandomOffer(location),
  };
};

export { getRandomAdvert };
