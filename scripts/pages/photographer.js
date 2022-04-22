/**
 * Display photographer details in various parts of the document
 * (e.g. above their works, in page title, modal etc).
 *
 * @param photographers
 * @returns {Promise<void>}
 */
async function displayPhotographerDetails(photographers) {
    // Get data
    // Get artist's id from the url
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    // Search for the right artist based on the passed id
    const artist = photographers.find(photographer => photographer.id == id);

    // [1] Build up the DOM for the photographer_profile section
    // Populate -text div
    const h1 = document.createElement("h1");
    const location = document.createElement("p");
    const tag_line = document.createElement("p");
    h1.textContent = artist.name;
    location.textContent = artist.city;
    location.classList.add("photographers-section-location");
    tag_line.textContent = artist.tagline;
    tag_line.classList.add("photographers-section-tagline");
    document.getElementById("photographer_profile-text").append(h1, location, tag_line);
    // Populate -image div
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

    // Set the document title to show the artist's name
    document.title = "FishEye | " + artist.name;
}

/**
 * Prepare for the page lift-off
 *
 * @returns {Promise<void>}
 */
async function init() {
    // Get the data from api.js
    const {photographers} = await getData();
    // Pass the data on and show photographer info
    displayPhotographerDetails(photographers);
}

// Lift-off!
init();
