/**
 * Access DOM elements.
 *
 * @type {HTMLElement}
 */
const lightbox = document.getElementById('portfolio_lightbox');
const lightboxArt = document.getElementById('portfolio_lightbox_content-art');


/**
 * Prep up and open the lightbox.
 */
function openLightbox() {
    prepLightbox();
    lightbox.classList.remove('hidden');
}

/**
 * Close and clear the lightbox.
 */
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxArt.innerHTML = '';
}

/**
 * Prepare the lightbox sources for subsequent manipulation.
 * Take the gallery and copy every article into the lightbox div while capturing ins index.
 */
function prepLightbox() {
    // Copy cards.
    let cards = document.getElementsByClassName('photographer_media_art');
    Array.from(cards).forEach((card, index) => {
        card.setAttribute('onclick', 'currentArt(' + (index + 1) + ')')
    });
    lightboxArt.innerHTML = '';
    lightboxArt.innerHTML = document.getElementById("photographer_media").innerHTML;

    // Remove onclick from copied cards
    let copiedCards = document
        .getElementById('portfolio_lightbox_content-art')
        .getElementsByClassName('photographer_media_art');
    Array.from(copiedCards).forEach((copiedCard) => {
        copiedCard.firstChild.removeAttribute('onclick')
    });
}

/**
 * Lightbox machinery.
 */

/**
 * Declare art index.
 *
 * @type {number}
 */
let artIndex = 0;

/**
 * Launch lightbox.
 */
showArt(artIndex);

/**
 * Operate right and left arrows.
 *
 * @param n
 */
function moveArt(n) {
    showArt(artIndex += n);
}

// Thumbnail image controls
/**
 * Start show from the clicked card.
 *
 * @param n
 */
function currentArt(n) {
    showArt(artIndex = n);
}

function showArt(n) {
    let i;
    const cards = lightboxArt.getElementsByTagName('article');
    if (n > cards.length) {
        artIndex = 1
    }
    if (n < 1) {
        artIndex = cards.length
    }
    for (i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    if (artIndex === 0) {
        console.log('The lightbox is ready')
    } else cards[artIndex - 1].style.display = "block";
}


/*
/!**
 * Open and hydrate individual lightboxes.
 *
 * @param element
 *!/

const imagePlaceholder = document.createElement('img');
const videoPlaceholder = document.createElement('video');
const artTitle = document.createElement('h2');

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
*/