const disableOrEnableElements = (disabled, ...elements) => {
  elements.forEach((elem) => elem.disabled = disabled);
};

const deactivatePage = () => {
  const advertForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  advertForm.classList.add('ad-form--disabled');
  mapFilters.classList.add('ad-form--disabled');
  disableOrEnableElements(
    true,
    ...advertForm.children,
    ...mapFilters.children,
  );
};

const activatePage = () => {
  const advertForm = document.querySelector('.ad-form');
  const mapFilters = document.querySelector('.map__filters');
  advertForm.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('ad-form--disabled');
  disableOrEnableElements(
    true,
    ...advertForm.children,
    ...mapFilters.children,
  );
};


export { deactivatePage, activatePage };
