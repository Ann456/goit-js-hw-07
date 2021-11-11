import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//Вариант 1
const galleryItemsContainer = document.querySelector(".gallery");
const createGallery = galleryItems.map(gallery =>   
    `<div class="gallery__item">
        <a class="gallery__link" href="${gallery.original}">
            <img
            class="gallery__image"
            src="${gallery.preview}"
            data-source="${gallery.original}"
            alt="${gallery.description}"
            />
        </a>
    </div>`
).join("");
galleryItemsContainer.insertAdjacentHTML("afterbegin", createGallery);


// Вариант 2
// const galleryItemsContainer = document.querySelector(".gallery");
// function createGallery (images)  {
//     return images.map(({ preview, original, description }) => {
//         return `<div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//                 <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//                 />
//             </a>
//         </div>`;}).join("");
// };
// console.log(createGallery(galleryItems));
// galleryItemsContainer.insertAdjacentHTML("beforeend", createGallery(galleryItems));


// Для модального окна
galleryItemsContainer.onclick = event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {return;};
	basicLightbox.create(`<img src="${event.target.dataset.source}">`).show()
}

