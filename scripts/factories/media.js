/**
 * Build up portfolio cards on photographer pages.
 *
 * @param data
 * @returns {{mediumVideo: string, date: *, photographerId: *, price: *, id: *, title: *, mediumPhoto: string, likes: *, getMediumCardDOM: (function(): HTMLElement)}}
 */
function mediaFactory(data) {
    // Construct data. Note that you need different paths for videos and images.
    const {id, photographerId, title, image, video, likes, date, price} = data;
    const mediumPhoto = `media/${photographerId}/${image}`;
    const mediumVideo = `media/${photographerId}/${video}`;
    const placeholderImage = "assets/images/image-not-found.png";

    /**
     * Build up individual media cards.
     *
     * @returns {HTMLElement}
     */
    function getMediumCardDOM() {
        // Declare individual elements
        const article = document.createElement("article");
        const img = document.createElement("img");
        const vid = document.createElement("video");
        const divMediaLegend = document.createElement("div");
        const divCounter = document.createElement("div");
        const h2 = document.createElement("h2");
        const counter = document.createElement("p");
        const fontAwesome = document.createElement("i");

        // Hydrate common elements
        h2.textContent = title;
        counter.textContent = likes;

        fontAwesome.classList.add("far", "fa-heart");

        divCounter.classList.add("photographer_media_legend-counter");
        divCounter.append(counter, fontAwesome);
        divMediaLegend.classList.add("photographer_media_legend");
        divMediaLegend.append(h2, divCounter);

        // Hydrate visuals depending on image or video
        if (data.hasOwnProperty('image')) {
            Object.assign(img, {
                src: mediumPhoto,
                alt: title,
                title: title
            });
            article.appendChild(img);
        } else if (data.hasOwnProperty('video')) {
            Object.assign(vid, {
                src: mediumVideo,
                alt: title,
                title: title
            });
            article.appendChild(vid);
        } else {
            Object.assign(img, {
                src: placeholderImage,
                alt: "No image",
                title: "No image"
            });
            article.appendChild(img);
        }
        // Append article legend
        article.appendChild(divMediaLegend);

        return article;
    }

    return {
        id,
        photographerId,
        title,
        mediumPhoto,
        mediumVideo,
        likes,
        date,
        price,
        getMediumCardDOM
    };
}