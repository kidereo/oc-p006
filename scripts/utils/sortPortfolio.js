/**
 * Sort media cards by title in descending order.
 */
function sortByTitleDesc() {
    let titles = document.querySelectorAll('article h2');
    let container = document.getElementById('photographer_media');

    Array.from(titles)
        .sort((a, b) => a.innerText.localeCompare(b.innerText))
        .forEach(h2 => container.appendChild(h2.parentElement.parentElement));
}

/**
 * Sort media cards by likes - most likes first.
 */
function sortByLikesDesc() {
    let likes = document.querySelectorAll('.photographer_media_legend-counter p');
    let container = document.getElementById('photographer_media');

    Array.from(likes)
        .sort((a, b) => (parseInt(a.innerText) < parseInt(b.innerText)) ? 1 : ((parseInt(a.innerText) > parseInt(b.innerText)) ? -1 : 0))
        .forEach(p => container.appendChild(p.parentElement.parentElement.parentElement));
}

/**
 * Sort media cards by date - latest first.
 */
function sortByDateDesc() {
    let dates = document.querySelectorAll('.photographer_media_legend-date p');
    let container = document.getElementById('photographer_media');

    Array.from(dates)
        .sort((a, b) => a.innerText < b.innerText ? 1 : a.innerText > b.innerText ? -1 : 0)
        .forEach(p => container.appendChild(p.parentElement.parentElement));
}