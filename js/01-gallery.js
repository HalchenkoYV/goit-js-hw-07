import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery')


function galleryBox(images) {
 return images
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`
        })
        .join("");
}

function clickOnPic(evt) {
    if (!evt.target.classList.contains('gallery__image'))
        return;
    const linkImg = evt.target.parentNode;
    evt.preventDefault();
    const link = evt.target.dataset.source;
     linkImg.setAttribute("href", link);

    const instance = basicLightbox.create(`<img src="${link}" width="800" height="600">`);
    instance.show();
    }



const texeOfPicture = galleryBox(galleryItems);
gallery.insertAdjacentHTML("beforeend", texeOfPicture);
gallery.addEventListener('click', clickOnPic);

