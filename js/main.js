import { getRandomAdvert } from './data.js';

const RANDOM_ADVERT_COUNT = 10;

const randomAdverts = new Array(RANDOM_ADVERT_COUNT).fill(null).map(getRandomAdvert);

randomAdverts.forEach((elem)=> console.log(elem));
