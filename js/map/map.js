import { activateMainForm} from '../page-state.js';
import { generateCard } from './data.js';
import { address, onAddressChange } from '../form/validate-address.js';
import { adverts, getData } from '../api.js';
import { showServerErrorMessage } from '../utils.js';
import { doFilter, mapFilters } from './filter.js';
import { debounce } from '../utils.js';

const LIMIT_ADVERTS = 10;
const COORDINATE_PRECISION = 5;
const MAP_PROVIDER_LINK = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OPEN_STREET_MAP_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const MAIN_ICON_HEIGHT = 52;
const MAIN_ICON_WIDTH = 52;
const MAIN_ICON_LINK = './img/main-pin.svg';
const POPUP_ICON_HEIGHT = 40;
const POPUP_ICON_WIDTH = 40;
const POPUP_ICON_LINK = './img/pin.svg';
const ANCHOR_X = 26;
const ANCHOR_Y = 52;
const POPUP_ANCHOR_X = 20;
const POPUP_ANCHOR_Y = 40;
const TOKYO_CENTER = {
  lat: 35.67817,
  lng: 139.73888,
};
const SCALE = 13;

const mapContainer = document.querySelector('#map-canvas');

const map = L.map(
  mapContainer,
  {
    scrollWheelZoom: false,
  },
);

const layer = L.layerGroup().addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_ICON_LINK,
  iconSize: [MAIN_ICON_HEIGHT, MAIN_ICON_WIDTH],
  iconAnchor: [ANCHOR_X, ANCHOR_Y],
});

const mainPinMarker = L.marker(
  TOKYO_CENTER,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const popupIcon = L.icon({
  iconUrl: POPUP_ICON_LINK,
  iconSize: [POPUP_ICON_HEIGHT, POPUP_ICON_WIDTH],
  iconAnchor: [POPUP_ANCHOR_X, POPUP_ANCHOR_Y],
});

const drawPopups = () => {
  layer.clearLayers();
  doFilter(adverts).slice(0, LIMIT_ADVERTS).forEach((advert) => {
    const marker = L.marker(
      advert.location,
      {
        icon: popupIcon,
      },
    );
    marker.addTo(layer).bindPopup(generateCard(advert));
  });
};

const onMainPinDrag = ({ target }) => {
  const latlng = target.getLatLng();
  address.value = `${latlng.lat.toFixed(COORDINATE_PRECISION)} ${latlng.lng.toFixed(COORDINATE_PRECISION)}`;
  onAddressChange();
};

const resetMap = ()=> {
  mainPinMarker.setLatLng(TOKYO_CENTER);
  map.setView(TOKYO_CENTER, SCALE);
};

const onMapLoad = () => {
  activateMainForm();
  getData(drawPopups, showServerErrorMessage);
};

const onMapFilterChange = () => drawPopups(adverts);

L.tileLayer( MAP_PROVIDER_LINK, {
  attribution: OPEN_STREET_MAP_ATTR,
}).addTo(map);

map.on('load', onMapLoad).setView(TOKYO_CENTER, SCALE);

mainPinMarker.on('drag', onMainPinDrag);
mainPinMarker.addTo(map);
mapFilters.addEventListener('change', debounce(onMapFilterChange));

export { resetMap, drawPopups };
