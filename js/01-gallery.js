import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery'); // Створюємо змінну - посилання на галерею в HTML

gallery.addEventListener('click', onImageClick);

const markedGallery = markupGallery(galleryItems); //Присвоюємо результат функції markupGallery на основі масиву даних galleryItems у змінну

gallery.innerHTML = markedGallery; // Додаєм змінну з розміткою(рядок) в HTML

const galleryItem = gallery.querySelector('.gallery__item');
const galleryLink = gallery.querySelector('.gallery__link');
const galleryImage = gallery.querySelector('.gallery__image');

// Створюємо функцію для розмітки галереї. 

function markupGallery(items) {
    return items.map(({ preview, original, description }) => { // Повертаємо результат функції
        return ` 
            <div class="gallery__item"> 
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
                </a>
            </div>`;
    }).join(''); // обєднання масиву обєктів в рядок
};

function onImageClick(e, gallery) {
    if (!e.target.nodeName === 'IMG') {
        return;
    }
    preventDefault();
    showModal(e.target.dataset.source.value);
}

console.log(galleryItems);
