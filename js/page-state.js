const advertForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const setDisabled = (disabled, ...elements) => {
  elements.forEach((elem) => (elem.disabled = disabled));
};

advertForm.classList.add('ad-form--disabled');
mapFilters.classList.add('ad-form--disabled');
setDisabled(true, ...advertForm.children, ...mapFilters.children);

const activateMainForm = () => {
  advertForm.classList.remove('ad-form--disabled');
  setDisabled(false, ...advertForm.children);
};

const activateMapFilters = () => {
  mapFilters.classList.remove('ad-form--disabled');
  setDisabled(false, ...mapFilters.children);
};

export { activateMainForm, activateMapFilters };
