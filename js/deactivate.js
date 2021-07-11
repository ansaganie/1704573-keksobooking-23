const advertForm = document.querySelector('.ad-form');
const mapFilters = document.querySelector('.map__filters');

const disableElement = (elem) => elem.disabled = true;

advertForm.classList.add('ad-form--disabled');
mapFilters.classList.add('ad-form--disabled');
[...advertForm.children, ...mapFilters.children]
  .forEach(disableElement);
