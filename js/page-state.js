import { advertForm } from './form/form.js';
import { mapFilters } from './map/filter.js';

const setDisabled = (disabled, ...elements) => {
  elements.forEach((elem) => (elem.disabled = disabled));
};

const activateMainForm = () => {
  advertForm.classList.remove('ad-form--disabled');
  setDisabled(false, ...advertForm.children);
};

const activateMapFilters = () => {
  mapFilters.classList.remove('ad-form--disabled');
  setDisabled(false, ...mapFilters.children);
};

export { activateMainForm, activateMapFilters };
