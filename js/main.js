/**
 * Return a random integer from min(included) to max(included)
 * @param {integer} min - positive integer, can be 0 also
 * @param {integer} max - positive integer
 * @returns {integer} random number
 */
const getRandomInt = (min, max) => {
  if (min === max) {
    return min;
  }

  if (min < 0 || min > max) {
    return undefined;
  }

  return Math.round(Math.random() * (min - max)) + Math.floor(max);
};

/**
 * Returns a random number from min (included) to max (included)
 * @param {number} min - positive number, can be 0 also
 * @param {number} max - positive number
 * @param {integer} precision
 * @returns {number} random number
 */
const getRandomDecimal = (min, max, precision) => {
  if (min === max) {
    return min;
  }

  if (min < 0 || min > max) {
    return undefined;
  }

  const result = Math.random() * (min - max) + max;

  return parseFloat(result.toFixed(precision));
};

getRandomDecimal(0, 5, 2);
getRandomInt(0.5, 2.5);


const AUTHORS = ['Aras Mayer', 'Ehsan Bain', 'Fearne Armstrong',
  'Yasmine Contreras', 'Amisha Figueroa', 'Harper-Rose Sparrow', 'Kyran Boyce',
  'Tia Roth', 'Ayse Haynes', 'Yahya Mckee', 'Ananya Manning', 'Larry Wheatley',
  'Alaw Washington', 'Amelia Mackenzie', 'Yazmin Smart', 'Awais Hawes'];

const OFFER_TITLE = ['Oakwood Premier Tokyo', 'Hotel ICHIGAYA（JR Ichigaya Sta.)',
  'TOE LIBRARY Tokyo Asakusa', 'SCASA NishiShinjuku', 'COTO Tokyo Shibuya 4',
  'Studio Inn Nishi Shinjuku', 'COTO Tokyo Shibuya 2',
  'Stay SAKURA Tokyo Shinjuku Hyaku Kura', 'Hotel Axas Nihonbashi',
  'Space F 代々木', 'Hermitage Nishi Shinjuku'];

const OFFER_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const OFFER_CHECK_TIMES = ['12:00', '13:00', '14:00'];

const  OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer',
  'elevator', 'conditioner'];

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
 * Return a random element from an array
 * @param {array} arr - array of any length;
 * @returns {any} random element
 */
const getRandomElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

/**
 * Return a random subarray from given array and length
 * @param {array} arr - array of any length;
 * @param {integer} - length of result array
 * @returns {array} new subarray;
 */
const getRandomSubArray = (arr, arrLength) => {
  const resultArr = [];
  for (let i = 0; i < arrLength; i++) {
    const randElem = getRandomElement(arr);

    if (!resultArr.includes(randElem)) {
      resultArr.push(randElem);
    }
  }
  return resultArr;
};

/**
 * Generates a random offer from given list of data
 * @param {object} location - location object with latitude and longitude values;
 * @returns {object} random offer
 */
const getRandOffer = (location) => {
  const offer = {};
  offer.title = getRandomElement(OFFER_TITLE);
  offer.address = `${location.lat}, ${location.lng}`;
  offer.price = getRandomInt(1500, 5000);
  offer.type = getRandomElement(OFFER_TYPES);
  offer.rooms = getRandomInt(1, 10);
  offer.guests = getRandomInt(1, 10);
  offer.checkin = getRandomElement(OFFER_CHECK_TIMES);
  offer.checkout = getRandomElement(OFFER_CHECK_TIMES);
  offer.features = getRandomSubArray(OFFER_FEATURES, getRandomInt(1, OFFER_FEATURES.length - 1));
  offer.description = getRandomElement(OFFER_DESCRIPTIONS);
  offer.photos = getRandomSubArray(OFFER_PHOTOS, getRandomInt(2, 4));
  return offer;
};

/**
 * Generates a random advertisement from given list of data
 * @returns {object} random advert
 */
const getRandomAdvert = () => {
  const advert = {};

  const randomAuthor = getRandomElement(AUTHORS);
  advert.author = randomAuthor;

  const randLocation = {};
  randLocation.lat = getRandomDecimal(35.65, 35.7, 5);
  randLocation.lng = getRandomDecimal(139.7, 139.8, 5);
  advert.location = randLocation;

  advert.offer = getRandOffer(randLocation);

  return advert;
};

const RANDOM_ADVERT_COUNT = 10;

const randomAdverts = new Array(RANDOM_ADVERT_COUNT).fill(null).map(() => getRandomAdvert());

