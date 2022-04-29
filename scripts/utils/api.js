/**
 * Connect to the data source and return data arrays.
 *
 * @returns {Promise<{photographers: *[], media: ...MediaList | string[]}>}
 */
async function getData() {
    // Connect to the data source with fetch()
    const dataSource = "data/photographers.json";
    const response = await fetch(dataSource);
    const data = await response.json();

    // Separate incoming data into thematic arrays
    const artistData = [...data.photographers];
    const mediaData = [...data.media];

    // Return data
    return {
        'photographers': artistData,
        'media': mediaData
    }
}