import { advertForm } from './form/form.js';
import { mapFilters } from './map/filter.js';

const setDisabled = (...elements) => {
  elements.forEach((elem) => (elem.disabled = false));
};

const activateMainForm = () => {
  advertForm.classList.remove('ad-form--disabled');
  setDisabled(...advertForm.children);
};

const activateMapFilters = () => {
  mapFilters.classList.remove('ad-form--disabled');
  setDisabled(...mapFilters.children);
};

export { activateMainForm, activateMapFilters };
