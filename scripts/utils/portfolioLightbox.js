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
    document.addEventListener('keydown', lightboxKeyPress);
    document.addEventListener('keydown', disableTab);
}

/**
 * Close and clear the lightbox.
 */
function closeLightbox() {
    lightbox.classList.add('hidden');
    lightboxArt.innerHTML = '';
    document.removeEventListener('keydown', lightboxKeyPress);
    document.removeEventListener('keydown', disableTab);
}

/**
 * Prepare the lightbox sources for subsequent manipulation.
 * Take the gallery and copy every article into the lightbox div while capturing ins index.
 */
function prepLightbox() {
    // Add onclick (for mouse) and onkeypress (for keyboard) indexes to media articles.
    let cards = document.getElementsByClassName('photographer_media_art');
    let images = document.querySelectorAll('.photographer_media_art img');
    Array.from(cards).forEach((card, index) => {
        card.setAttribute('onclick', 'currentArt(' + (index + 1) + ')');
        card.setAttribute('onkeypress', 'currentArt(' + (index + 1) + ')');
    });

    // Copy cards into the lightbox.
    lightboxArt.innerHTML = '';
    lightboxArt.innerHTML = document.getElementById("photographer_media").innerHTML;

    // Remove onclick from copied cards and add aria-label and tabindex.
    let copiedCards = document
        .getElementById('portfolio_lightbox_content-art')
        .getElementsByClassName('photographer_media_art');
    Array.from(copiedCards).forEach((copiedCard, index) => {
        copiedCard.firstChild.removeAttribute('onclick');
        copiedCard.firstChild.setAttribute('aria-label', 'Image closeup view');
        copiedCard.firstChild.setAttribute('tabindex', index + 1);
    });

    // Remove <a> tag from around images.
    document.querySelectorAll("#portfolio_lightbox_content-art .photographer_media_art a")
        .forEach(a => a.outerHTML = a.innerHTML);
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
 * Operate right and left modal arrows.
 *
 * @param n
 */
function moveArt(n) {
    showArt(artIndex += n);
}

// Thumbnail image controls.
/**
 * Start show from the clicked card.
 *
 * @param n
 */
function currentArt(n) {
    showArt(artIndex = n);
}

/**
 * Show one card and hide the rest.
 *
 * @param n
 */
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
    } else {
        cards[artIndex - 1].style.display = "block";
    }
}

/**
 * Lightbox keyboard navigation.
 */

//document.onkeydown = lightboxKeyPress;

/**
 * Capture keypresses on the lightbox.
 *
 * @param key
 */
function lightboxKeyPress(key) {
    try {
        switch (key.code) {
            case 'Tab':
                if (key.shiftKey) {
                    moveArt(-1);
                } else
                    moveArt(1);
                break;
            case 'ArrowLeft':
                moveArt(-1);
                break;
            case 'ArrowRight':
                moveArt(1);
                break;
            case 'Escape':
                closeLightbox();
                break;
            default:
                break;
        }
    } catch {
        console.log('The lightbox is empty')
    }
}

/**
 * Open lightbox on <article> keypress attribute.
 *
 * @param event
 */
function onKeyPress(event) {
    if (event.key === "Enter") {
        openLightbox();
    }
}


/**
 * Stop Tab from tabbing in the main document while in the lightbox modal.
 *
 * @param event
 */
function disableTab(event){
    if(event.code === 'Tab') {
        event.preventDefault();
    }
}
