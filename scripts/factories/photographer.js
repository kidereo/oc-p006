/**
 * Build up photographers' cards on index.
 *
 * @param data
 * @returns {{name: *, getUserCardDOM: (function(): HTMLElement), picture: string}}
 */
function photographerFactory(data) {
    // Construct data
    const {name, portrait, city, tagline, price} = data;
    const picture = `media/Photographers_ID_Photos/${portrait}`;

    /**
     * Buld up individual photographer cards.
     *
     * @returns {HTMLElement}
     */
    function getUserCardDOM() {
        // Declare individual elements
        const article = document.createElement("article");
        const img = document.createElement("img");
        const h2 = document.createElement("h2");
        const location = document.createElement("p");
        const tline = document.createElement("p");
        const fee = document.createElement("p");

        // Hydrate individual elements
        Object.assign(img, {
            src: picture,
            alt: "Photo of " + name
        });
        //img.setAttribute("src", picture);
        //img.setAttribute("alt", "Photo of " + name);

        h2.textContent = name;

        location.textContent = city;
        location.classList.add("photographers-section-location");

        tline.textContent = tagline;
        tline.classList.add("photographers-section-tagline");

        fee.textContent = price + "€/jour";
        fee.classList.add("photographers-section-price");

        // Attach individual elements
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(tline);
        article.appendChild(fee);

        return (article);
    }

    return {
        name,
        picture,
        city,
        tagline,
        price,
        getUserCardDOM
    };
}