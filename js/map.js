import { activatePage } from './page-state.js';
import { generateCard } from './similar-adverts.js';

const MAP_PROVIDER_LINK = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const OPEN_STREET_MAP_ATTR = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const MAIN_ICON_HEIGHT = 52;
const MAIN_ICON_WIDTH = 52;
const POPUP_ICON_HEIGHT = 40;
const POPUP_ICON_WIDTH = 40;
const ANCHOR_X = 26;
const ANCHOR_Y = 52;
const POPUP_ANCHOR_X = 20;
const POPUP_ANCHOR_Y = 40;
const TOKYO_CENTER = {
  lat: 35.658581,
  lng: 139.745438,
};
const SCALE = 13;

const mapContainer = document.querySelector('#map-canvas');
const address = document.querySelector('#address');

const map = L.map(mapContainer);
const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [MAIN_ICON_HEIGHT, MAIN_ICON_WIDTH],
  iconAnchor: [ANCHOR_X, ANCHOR_Y],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_CENTER.lat,
    lng: TOKYO_CENTER.lng,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

const popupIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [POPUP_ICON_HEIGHT, POPUP_ICON_WIDTH],
  iconAnchor: [POPUP_ANCHOR_X, POPUP_ANCHOR_Y],
});

const layer = L.layerGroup().addTo(map);

const createPopups = (adverts) => {
  adverts.forEach((advert) => {
    const { lat, lng } = advert.location;
    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        popupIcon,
      },
    );

    marker.addTo(layer).bindPopup(generateCard(advert));
  });
};

const changeAddressValue = ({ target }) => {
  const latlng = target.getLatLng();
  address.value = `${latlng.lat.toFixed(5)} ${latlng.lng.toFixed(5)}`;
};

map.on('load', activatePage).setView(
  {
    lat: TOKYO_CENTER.lat,
    lng: TOKYO_CENTER.lng,
  },
  SCALE,
);

L.tileLayer( MAP_PROVIDER_LINK, {
  attribution: OPEN_STREET_MAP_ATTR,
}).addTo(map);

mainPinMarker.on('add', changeAddressValue);
mainPinMarker.on('drag', changeAddressValue);
mainPinMarker.addTo(map);

export { createPopups };
