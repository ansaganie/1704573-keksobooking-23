/**
 * Disables option elements in loop
 * @param {HTMLCollection} options HTMLCollection of 'option' elements
 * @param  {array} exceptions array of exception values that must not be disabled
 */
const disableOptions = (options, ...exceptions) => {
  for (const elem of options) {
    if (!exceptions.includes(elem.value)) {
      elem.disabled = true;
    } else {
      elem.selected = true;
      elem.disabled = false;
    }
  }
};

export { disableOptions };
