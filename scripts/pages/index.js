/**
 * Connect to the datasource and return data arrays.
 *
 * @returns {Promise<{photographers: *[]}>}
 */
async function getPhotographers() {
    // Connect to the datasource with fetch()
    const source = "data/photographers.json";
    const response = await fetch(source);
    const data = await response.json();

    // Distill the source into thematic arrays
    const artistData = [...data.photographers];
    const mediaData = [...data.media];

    // Return data
    return {
        'photographers': artistData,
        'media': mediaData
    }
}

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
    // Récupère les datas des photographes
    const {photographers} = await getPhotographers();
    displayData(photographers);
}

// We have a lift-off!
init();
    