const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const AVATAR_IMG = document.createElement('img');
AVATAR_IMG.width = 40;
AVATAR_IMG.height = 44;
AVATAR_IMG.alt = 'Аватар пользователя';
const MAX_AVATAR_PHOTOS = 3;
const avatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');

const ROOM_IMG = document.createElement('img');
ROOM_IMG.classList.add('ad-form__photo');
ROOM_IMG.width = 70;
ROOM_IMG.height = 70;
ROOM_IMG.alt = 'Фотография помещения';
const MAX_ROOM_PHOTOS = 3;
const roomPhotos = document.querySelector('#images');
const roomPhotosPreview = document.querySelector('.ad-form__photos-preview');

const previewLoader = (photoInput, photoPreview, maxLength, img) => {
  photoPreview.innerHTML = '';

  for (let iterator = 0; iterator < maxLength; iterator++) {
    const file = photoInput.files[iterator];
    const fileName = file.name.toLowerCase();
    const imgClone = img.cloneNode(true);

    const matches = FILE_TYPES.some((imageType) => fileName.endsWith(imageType));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        imgClone.src = reader.result;
        photoPreview.appendChild(imgClone);
      });

      reader.readAsDataURL(file);
    }
  }
};

avatar.addEventListener(
  'change',
  previewLoader.bind(null, avatar, avatarPreview, MAX_AVATAR_PHOTOS, AVATAR_IMG),
);

roomPhotos.addEventListener(
  'change',
  previewLoader.bind(null, roomPhotos, roomPhotosPreview, MAX_ROOM_PHOTOS, ROOM_IMG),
);
