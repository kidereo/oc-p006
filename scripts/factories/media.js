let funcName;

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
        //const media = document.createElement("div");
        const divMediaLegend = document.createElement("div");
        const divCounter = document.createElement("div");
        const h2 = document.createElement("h2");
        const divMediaDate = document.createElement("div");
        const pDate = document.createElement("p");
        const i = document.createElement("i");
        const divMediaArt = document.createElement("div");
        const link = document.createElement("a");

        // Add attributes to the link
        Object.assign(link, {
            href: "javascript:openLightbox()"
        });

        // Hydrate common elements
        h2.textContent = title;
        counter.textContent = likes;
        fontAwesome.classList.add("far", "fa-heart");
        fontAwesome.setAttribute("tabindex", "0");
        divMediaArt.classList.add("photographer_media_art");
        divCounter.classList.add("photographer_media_legend-counter");
        divCounter.setAttribute("aria-label", 'Likes');
        divCounter.append(counter, fontAwesome);
        divMediaLegend.classList.add("photographer_media_legend");
        divMediaLegend.append(h2, divCounter);

        // Hydrate visuals depending on image or video
        if (data.hasOwnProperty('image')) {
            Object.assign(img, {
                src: mediumPhoto,
                alt: title,
                tabIndex: 0
            });
            img.setAttribute('onClick', 'openLightbox()');
            img.setAttribute('onkeypress', 'onKeyPress(event)');
            //link.appendChild(img);
            divMediaArt.appendChild(img);
        } else if (data.hasOwnProperty('video')) {
            Object.assign(vid, {
                src: mediumVideo,
                alt: title,
                title: title,
                tabIndex: 0
            });
            vid.setAttribute('type', 'video/mp4');
            vid.setAttribute('onClick', 'openLightbox()');
            vid.setAttribute('onkeypress', 'onKeyPress(event)');
            vid.setAttribute('controls', 'controls');
            vid.setAttribute('autoplay', 'autoplay');
            vid.setAttribute('loop', 'loop');
            //vid.setAttribute('poster', 'assets/images/circle-loader.gif');
            //link.appendChild(vid);
            divMediaArt.appendChild(vid);
            i.classList.add("far", "fa-play-circle", "photographer_media-i");
            article.appendChild(i);
        } else {
            Object.assign(img, {
                src: placeholderImage,
                alt: "No image"
            });
            img.setAttribute('onClick', 'openLightbox()');
            divMediaArt.appendChild(img);
        }

        // Hydrate date on the article
        divMediaDate.classList.add("photographer_media_legend-date");
        pDate.textContent = date;
        divMediaDate.appendChild(pDate);

        // Append article legend and click listeners
        //article.appendChild(media);
        article.appendChild(divMediaArt);
        article.appendChild(divMediaLegend);
        article.appendChild(divMediaDate);
        fontAwesome.addEventListener("click", toggleLikes);
        fontAwesome.addEventListener("click", reorderLikes);
        fontAwesome.addEventListener("keypress", toggleLikes);
        //fontAwesome.addEventListener("keypress", reorderLikes);

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
        funcName = toggleLikes;
    }
}



