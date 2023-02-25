import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery'); // Створюємо змінну - посилання на галерею в HTML
const onOpenModalEsc = document.body

gallery.addEventListener('click', onImageClick);

const markedGallery = markupGallery(galleryItems); //Присвоюємо результат функції markupGallery на основі масиву даних galleryItems у змінну

gallery.innerHTML = markedGallery; // Додаєм змінну з розміткою(рядок) в HTML

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

function onImageClick(e) {
    if (!e.target.classList.contains("gallery__image")) {
        return;
    }
    e.preventDefault();
    
    // готовa розміткa модального вікна із зображенням з прикладів бібліотеки basicLightbox
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="" height="">
`)
    instance.show();
    document.addEventListener("keydown", onEscapePress);
    document.body.classList.add(".js-open-modal");

function onEscapePress(e) {
    if (e.code === "Escape" && basicLightbox.visible()) {
    closeModal();
  }
};

function closeModal() {
    document.removeEventListener("keydown", onEscapePress);
    document.body.classList.remove(".js-close-modal");
    instance.close();
}
};
    
console.log(galleryItems);
