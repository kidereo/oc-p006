/**
 * Display photographers with details as specified in the photographerFactory.
 *
 * @param photographers
 * @returns {Promise<void>}
 */
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographers-section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

/**
 * Prepare for the page lift-off
 *
 * @returns {Promise<void>}
 */
async function init() {
    // Get the data from api.js
    const {photographers} = await getData();
    // Pass the data on and show photographer cards
    displayData(photographers);
}

// Set the document title and lift-off!
document.title = "FishEye | Home";
init();