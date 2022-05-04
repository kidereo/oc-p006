/**
 * Access DOM elements.
 *
 * @type {HTMLElement}
 */
const lightbox = document.getElementById('portfolio_lightbox');
const lightboxArt = document.getElementById('portfolio_lightbox_content-art');
const imagePlaceholder = document.createElement('img');
const videoPlaceholder = document.createElement('video');
const artTitle = document.createElement('h2');

/**
 * Open and hydrate the lightbox.
 *
 * @param element
 */
function openLightbox(element) {
    const extension = element.src.split('.').pop();
    if (extension === 'mp4') {
        lightboxArt.appendChild(videoPlaceholder);
        videoPlaceholder.src = element.src;
        videoPlaceholder.setAttribute('controls', 'controls');
        videoPlaceholder.setAttribute('autoplay', 'autoplay');
        videoPlaceholder.setAttribute('poster', 'assets/images/circle-loader.gif');
    } else {
        lightboxArt.appendChild(imagePlaceholder);
        imagePlaceholder.src = element.src;
    }
    artTitle.innerText = element.title;
    lightboxArt.appendChild(artTitle);
    lightbox.classList.remove('hidden');
}

/**
 * Close and clear the lightbox.
 */
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxArt.innerHTML = '';
}