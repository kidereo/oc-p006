/**
 * Build up portfolio cards on photographer pages.
 *
 * @param data
 * @returns {{getMediumCardDOM: (function(): HTMLElement)}}
 */
function mediaFactory(data) {
    // Construct data. Note that you need different paths for videos and images.
    const {id, photographerId, title, image, video, likes, date, price} = data;
    const mediumPhoto = `media/${photographerId}/${image}`;
    const mediumVideo = `media/${photographerId}/${video}`;
    const placeholderImage = "assets/images/image-not-found.png";
    const counter = document.createElement("p");
    const fontAwesome = document.createElement("i");

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
        const divMediaDate = document.createElement("div");
        const pDate = document.createElement("p");

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

        // Hydrate date on the article
        divMediaDate.classList.add("photographer_media_legend-date");
        pDate.textContent = date;
        divMediaDate.appendChild(pDate);


        // Append article legend and click listeners
        article.appendChild(divMediaLegend);
        article.appendChild(divMediaDate);
        fontAwesome.addEventListener("click", toggleLikes);
        fontAwesome.addEventListener("click", sortByLikesDesc);

        return article;
    }

    return {
        getMediumCardDOM
    };

    /**
     * Listen for clicks on hearts and increment or decrement both the image counter
     * and the tab counter.
     *
     * @param event
     */
    function toggleLikes(event) {
        let artLikes = parseInt(counter.textContent);
        let tab = document.getElementById('photographer_tab-counter');
        let tabLikes = parseInt(tab.textContent);
        if (event.target.classList.contains('is-liked')) {
            event.target.classList.replace('fas', 'far');
            event.target.classList.remove('is-liked');
            counter.textContent = --artLikes;
            tab.textContent = --tabLikes;
        } else {
            event.target.classList.replace('far', 'fas');
            event.target.classList.add('is-liked');
            counter.textContent = ++artLikes;
            tab.textContent = ++tabLikes;
        }
    }
}