import { galleryItems } from "./gallery-items.js";

const gallaryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);
gallaryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
gallaryContainer.addEventListener("click", onImgClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `  <div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`
    )
    .join("");
  
}
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}
