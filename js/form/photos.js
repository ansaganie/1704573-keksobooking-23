const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarImg = document.createElement('img');
avatarImg.width = 40;
avatarImg.height = 44;
avatarImg.alt = 'Аватар пользователя';
avatarImg.src = 'img/muffin-grey.svg';
const MAX_AVATAR_PHOTOS = 3;
const avatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview');

const roomImg = document.createElement('img');
roomImg.classList.add('ad-form__photo');
roomImg.width = 70;
roomImg.height = 70;
roomImg.alt = 'Фотография помещения';

const MAX_ROOM_PHOTOS = 3;
const roomPhotos = document.querySelector('#images');
const roomPhotosPreview = document.querySelector('.ad-form__photos-preview');

const previewLoader = (photoInput, photoPreview, maxLength, img) => {
  photoPreview.innerHTML = '';

  for (
    let iterator = 0;
    iterator < photoInput.files.length &&  iterator < maxLength;
    iterator++
  ) {
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

const clearFileInputs = () => {
  roomPhotos.value = '';
  roomPhotosPreview.innerHTML = '';
  const plug = document.createElement('div');
  plug.classList.add('ad-form__photo');
  roomPhotosPreview.appendChild(plug);

  avatar.value = '';
  avatarPreview.innerHTML = '';
  avatarPreview.appendChild(avatarImg);
};

const addImageInputEventListeners = () => {
  avatar.addEventListener(
    'change',
    previewLoader.bind(
      null,
      avatar,
      avatarPreview,
      MAX_AVATAR_PHOTOS,
      avatarImg),
  );

  roomPhotos.addEventListener(
    'change',
    previewLoader.bind(
      null,
      roomPhotos,
      roomPhotosPreview,
      MAX_ROOM_PHOTOS,
      roomImg),
  );
};

export { clearFileInputs, addImageInputEventListeners };
