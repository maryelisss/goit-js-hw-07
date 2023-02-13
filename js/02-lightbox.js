import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryElements = createGalleryElements(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryElements);

galleryContainer.addEventListener('click', galleryOpen);

function createGalleryElements (gallery) {
    return gallery.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" 
        alt="${description}" />
      </a>
`
}).join(" ");
    };

function galleryOpen (evt) {
        if (!evt.target.classList.contains('gallery__image')){
        return;
    };
    evt.preventDefault();
    var lightbox = new SimpleLightbox('.gallery a', {captiomDelay: 250, captionsData: "alt"});
};    

