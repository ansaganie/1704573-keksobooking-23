/**
 * @description Return a random integer from min(included) to max(included)
 * @param {integer} min
 * @param {integer} max
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
 * @description Returns a random number from min (included) to max (included)
 * @param {number} min
 * @param {number} max
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
