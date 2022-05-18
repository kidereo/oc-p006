/**
 * Build up photographers' cards on index.
 *
 * @param data
 * @returns {{getUserCardDOM: (function(): HTMLElement), picture: string}}
 */
function photographerFactory(data) {
    // Construct data
    const {id, name, portrait, city, country, tagline, price} = data;
    const id_photo = `media/Photographers_ID_Photos/${portrait}`;

    /**
     * Build up individual photographer cards.
     *
     * @returns {HTMLElement}
     */
    function getUserCardDOM() {
        // Declare individual elements
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const location = document.createElement("p");
        const tag_line = document.createElement("p");
        const fee = document.createElement("p");
        const link = document.createElement("a");

        // Hydrate individual elements
        // Add attributes to the image
        Object.assign(img, {
            src: id_photo,
            alt: "Photo of " + name
        });
        //img.setAttribute("src", picture);
        //img.setAttribute("alt", "Photo of " + name);

        // Add attributes to the link
        Object.assign(link, {
            href: "photographer.html" + "?id=" + id,
            title: "Click to see " + name + "'s works"
        });

        // Hydrate relevant text fields and add relevant classes
        h2.textContent = name;

        location.textContent = city + ", " + country;
        location.classList.add("photographers-section-location");

        tag_line.textContent = tagline;
        tag_line.classList.add("photographers-section-tagline");

        fee.textContent = price + "€/jour";
        fee.classList.add("photographers-section-price");

        // Combine and attach individual elements to the DOM
        //article.appendChild(img);
        link.appendChild(img);
        article.appendChild(link);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tag_line);
        article.appendChild(fee);

        return article;
    }

    return {
        getUserCardDOM
    };
}