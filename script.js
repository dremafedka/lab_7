const images = [
  {
    preview: 'https://via.placeholder.com/150',
    original: 'https://via.placeholder.com/600',
    description: 'Опис зображення 1'
  },
  {
    preview: 'https://via.placeholder.com/150',
    original: 'https://via.placeholder.com/600',
    description: 'Опис зображення 2'
  },
  {
    preview: 'https://via.placeholder.com/150',
    original: 'https://via.placeholder.com/600',
    description: 'Опис зображення 3'
  }
];

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = images.map(({ preview, original, description }) => {
  return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>
    `;
}).join('');

galleryContainer.innerHTML = galleryItemsMarkup;

galleryContainer.addEventListener('click', event => {
  event.preventDefault();

  const clickedImage = event.target.classList.contains('gallery__image');

  if (!clickedImage) {
    return;
  }

  const largeImageURL = event.target.dataset.source;

  const instance = basicLightbox.create(`
        <img src="${largeImageURL}" alt="${event.target.alt}">
    `);

  instance.show();
});
