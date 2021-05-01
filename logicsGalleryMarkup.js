

import gallery from './gallery-items.js';

const galleryListRef = document.querySelector('.js-gallery');
const modalImgRef = document.querySelector('.lightbox__image');
const modalRef = document.querySelector('.lightbox');
const buttonRef = document.querySelector('.lightbox__button');

const baseMarkup = gallery
  .map(
    ({ preview, original, description }, index) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=''>
      <img class="gallery__image" src="${preview}" data-source="${original}" 
      alt="${description}" data-index="${index}"/> </a> </li>`
  )
 