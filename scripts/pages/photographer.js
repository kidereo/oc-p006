/**
 * Display photographer profile above their works.
 *
 * @param photographers
 * @returns {Promise<void>}
 */
async function displayPhotographerProfile(photographers) {
    // Get artist's id from the url
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    // Search for the right artist based on the passed id
    const artist = photographers.find(photographer => photographer.id == id);
    // Set the document title to show the artist's name while we are at it
    document.title = "FishEye | " + artist.name;
    // Start building the section's DOM
    // Populate text section
    const h1 = document.createElement("h1");
    const location = document.createElement("p");
    const tag_line = document.createElement("p");
    h1.textContent = artist.name;
    location.textContent = artist.city;
    location.classList.add("photographers-section-location");
    tag_line.textContent = artist.tagline;
    tag_line.classList.add("photographers-section-tagline");
    document.getElementById("photographer-profile-text").append(h1, location, tag_line);

    // Add artist's photo
    const img = document.createElement("img");
    Object.assign(img, {
        src: "media/Photographers_ID_Photos/" + artist.portrait,
        alt: "Photo of " + artist.name
    });
    document.getElementById("photographer-profile-image").appendChild(img);
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
    displayPhotographerProfile(photographers);
}

// Lift-off!
init();