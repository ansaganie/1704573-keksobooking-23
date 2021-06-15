import { getRandomAdvert } from './utils/get-random-advert.js';

const RANDOM_ADVERT_COUNT = 10;

const randomAdverts = new Array(RANDOM_ADVERT_COUNT).fill(null).map(getRandomAdvert);
randomAdverts;
