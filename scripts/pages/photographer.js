/**
 * Access DOM elements.
 */
const tab = document.getElementById('photographer_tab');

/**
 * Extract artist's id from the url.
 *
 * @type {URLSearchParams}
 */
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

/**
 * Display photographer details in various parts of the document
 * (e.g. above their works, in page title, modal etc).
 *
 * @param photographers
 * @returns {Promise<void>}
 */
async function displayPhotographerDetails(photographers) {
    // Search for the right artist based on the passed id
    const artist = photographers.find(photographer => photographer.id == id);

    // [1] Build up the DOM for the photographer_profile section
    // Hydrate -text div
    const h1 = document.createElement("h1");
    const location = document.createElement("p");
    const tag_line = document.createElement("p");
    h1.textContent = artist.name;
    location.textContent = artist.city + ", " + artist.country;
    location.classList.add("photographers-section-location");
    tag_line.textContent = artist.tagline;
    tag_line.classList.add("photographers-section-tagline");
    document.getElementById("photographer_profile-text").append(h1, location, tag_line);

    // Hydrate -image div
    const img = document.createElement("img");
    Object.assign(img, {
        src: "media/Photographers_ID_Photos/" + artist.portrait,
        alt: "Photo of " + artist.name,
        title: artist.name
    });
    document.getElementById("photographer_profile-image").appendChild(img);

    // [2] Build up supplementary DOM elements elsewhere on the page
    // Send artist's name to the contact modal
    const h2 = document.createElement("h2");
    h2.textContent = artist.name;
    document.getElementById("modal_header-artist").appendChild(h2);

    // Send artist's rate to the tab
    const h3 = document.createElement("h3");
    h3.textContent = artist.price + "€/jour";
    tab.appendChild(h3);

    // Set the document title to show the artist's name
    document.title = "FishEye | " + artist.name;
}

/**
 * Construct the portfolio part of the page.
 *
 * @param media
 * @returns {Promise<void>}
 */
async function displayPortfolioDetails(media) {
    // Search for the right artist based on the passed id
    const artistMedia = media.filter(media => media.photographerId == id);

    // Sort data by attribute - oldest first
    sortPortfolio(artistMedia, 'date', true);

    // Select DOM element
    const photographerMediaSection = document.querySelector(".photographer_media");

    // Send data to the media factory and get back individual art cards
    artistMedia.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediumCardDOM = mediaModel.getMediumCardDOM();
        photographerMediaSection.appendChild(mediumCardDOM);
    });

    // Send artist's likes to the tab
    const counterDiv = document.createElement("div");
    const fontAwesome = document.createElement("i");
    const counter = document.createElement("span");

    let likesNumber = 0;
    artistMedia.forEach((media) => {
        likesNumber += media.likes;
    });

    counter.setAttribute('id', 'photographer_tab-counter');
    counter.textContent = likesNumber;
    fontAwesome.classList.add("fas", "fa-heart");
    counterDiv.append(counter, fontAwesome);
    tab.appendChild(counterDiv);
}

/**
 * Prepare for the page lift-off.
 *
 * @returns {Promise<void>}
 */
async function init() {
    // Get the data from api.js
    const {photographers} = await getData();
    const {media} = await getData();

    // Pass the data on and show photographer info and portfolio
    displayPhotographerDetails(photographers);
    displayPortfolioDetails(media);
}

/**
 * We are off!
 */
init();

/**
 * Sort data by an attribute.
 *
 * @param data
 * @param attribute
 * @param asc
 */
function sortPortfolio(data, attribute, asc) {
    data.sort(function (a, b) {
        if (asc) {
            return (a[attribute] > b[attribute]) ? 1 : ((a[attribute] < b[attribute]) ? -1 : 0);
        } else {
            return (b[attribute] > a[attribute]) ? 1 : ((b[attribute] < a[attribute]) ? -1 : 0);
        }
    });
}


