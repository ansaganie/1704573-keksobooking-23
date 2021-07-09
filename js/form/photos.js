const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatar = document.querySelector('#avatar');
const avatarPreview = document.querySelector('#avatar-preview');

const previewLoader = (photoInput, photoPreview, maxLength) => {
  for (let iterator = 0; iterator < maxLength; iterator++) {
    const file = photoInput.files[iterator];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        avatarPreview.src = reader.result;
      });

      reader.readAsDataURL(file);
    }
  }
};

avatar.addEventListener(
  'change',
  previewLoader.bind(null, avatar, avatarPreview, 1),
);
