import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsContainer = document.querySelector(".gallery");
const createGallery = galleryItems.map(gallery =>   
    `<a class="gallery__item" href="${gallery.original}">
        <img
            class="gallery__image"
            src="${gallery.preview}"
            alt="${gallery.description}" />
        </a>
    `
).join("");
galleryItemsContainer.insertAdjacentHTML("afterbegin", createGallery);



let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})
// https://simplelightbox.com