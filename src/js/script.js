import galleryItems from "./gallery-items.js";

const gallery = galleryItems

const galleryUlEl = document.querySelector('.js-gallery')
const lightboxImageRef = document.querySelector('.lightbox__image')
const addIsOpen = document.querySelector('.js-lightbox')
const closeModalOnClickToOverlay = document.querySelector('.lightbox__overlay')
const iconClose = document.querySelector('[data-action=close-lightbox]')


const addGalleryToUl = gallery.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
    >
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>
    `
}).join('')



galleryUlEl.insertAdjacentHTML('beforeend', addGalleryToUl)

galleryUlEl.addEventListener('click', onImageContainerClick)
iconClose.addEventListener('click', onCloseModal)
window.addEventListener('keydown', onEscCloseModal)
closeModalOnClickToOverlay.addEventListener('click', onClickToOverlayCloseModal)

function onImageContainerClick(e) {
    e.preventDefault()
    const evt = e.target
    if (evt.nodeName !== 'IMG') {
        return
    }
    
    addIsOpen.classList.add('is-open')
    lightboxImageRef.src = evt.dataset.source
    lightboxImageRef.alt = evt.alt
}


function onCloseModal(e) {
    addIsOpen.classList.remove('is-open')
    lightboxImageRef.src = '';
    lightboxImageRef.alt = '';
}

function onEscCloseModal(e) {
    if (e.code === 'Escape') {
        addIsOpen.classList.remove('is-open')
        lightboxImageRef.src = '';
        lightboxImageRef.alt = '';
    }
}

function onClickToOverlayCloseModal(e) {
    addIsOpen.classList.remove('is-open')
    lightboxImageRef.src = '';
    lightboxImageRef.alt = '';
}