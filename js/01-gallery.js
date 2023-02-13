import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryElements = createGalleryElements(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryElements);

galleryContainer.addEventListener('click', modalOpen);

function createGalleryElements (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
}).join(" ");
    };

function modalOpen(evt){
    if (!evt.target.classList.contains('gallery__image')){
        return;
    };
    evt.preventDefault();
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">`)


instance.show(() => window.addEventListener('keydown', onEscKeyPress));

function onEscKeyPress (evt) {
  if (evt.code === 'Escape') {
  modalClose();
  }
  };

function modalClose () {
instance.close(() => window.removeEventListener('keydown', onEscKeyPress) );
}

};
