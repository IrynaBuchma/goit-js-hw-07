import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const markupGallery = galleryItems.reduce(
    (acc, { preview, original, description }) =>
        acc +=`<li> 
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}"/>
                </a>
            </li>`
    , ''
);
    
gallery.insertAdjacentHTML('afterbegin', markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'top',
    captionDelay: 250,
});

console.log(galleryItems);
