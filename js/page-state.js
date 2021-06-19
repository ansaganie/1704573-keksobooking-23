const deactivatePage = () => {
  const advertForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  advertForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  const fieldsetsAdvertForm = advertForm.querySelectorAll('fieldset');
  const fieldsetsMapFilter = mapFilters.querySelectorAll('fieldset');
  [...fieldsetsMapFilter, ...fieldsetsAdvertForm]
    .forEach((elem) => elem.disabled = true);
};

const activatePage = () => {
  const advertForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  advertForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  const fieldsetsAdvertForm = advertForm.querySelectorAll('fieldset');
  const fieldsetsMapFilter = mapFilters.querySelectorAll('fieldset');
  [...fieldsetsMapFilter, ...fieldsetsAdvertForm]
    .forEach((elem) => elem.disabled = false);
};

export { deactivatePage, activatePage };
