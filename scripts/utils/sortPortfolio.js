/**
 * Access common DOM elements.
 */
let container = document.getElementById('photographer_media');

/**
 * Sort media cards by title in descending order.
 */
function sortByTitleDesc() {
    let titles = document.querySelectorAll('article h2');
    let likes = document.querySelectorAll('.photographer_media_legend-counter p');

    Array.from(titles)
        .sort((a, b) => a.innerText.localeCompare(b.innerText))
        .forEach(h2 => container.appendChild(h2.parentElement.parentElement));

    Array.from(likes)
        .forEach(p => p.removeAttribute('class'));
}

/**
 * Sort media cards by likes - most likes first.
 */
function sortByLikesDesc() {
    let likes = document.querySelectorAll('.photographer_media_legend-counter p');

    Array.from(likes)
        .sort((a, b) => (parseInt(a.innerText) < parseInt(b.innerText)) ? 1 : ((parseInt(a.innerText) > parseInt(b.innerText)) ? -1 : 0))
        .forEach(p => container.appendChild(p.parentElement.parentElement.parentElement));

    Array.from(likes)
        .forEach(p => p.classList.add('selected'))
}

/**
 * Sort media cards by date - latest first.
 */
function sortByDateDesc() {
    let dates = document.querySelectorAll('.photographer_media_legend-date p');
    let likes = document.querySelectorAll('.photographer_media_legend-counter p');

    Array.from(dates)
        .sort((a, b) => a.innerText < b.innerText ? 1 : a.innerText > b.innerText ? -1 : 0)
        .forEach(p => container.appendChild(p.parentElement.parentElement));

    Array.from(likes)
        .forEach(p => p.removeAttribute('class'));
}

/**
 * Reload page.
 */
function sortReset() {
    location.reload();
}

/**
 * Dynamically reorder media cards on counter increment or decrement.
 * Only do so on sort by likes order.
 */
function reorderLikes() {
    let likes = document.querySelectorAll('.photographer_media_legend-counter p');

    Array.from(likes)
        .forEach(function (p) {
            if (p.classList.contains('selected')) {
                sortByLikesDesc();
            }
        });
}
