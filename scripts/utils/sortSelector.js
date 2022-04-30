/**
 * Deploy <select>-based dropdown.
 */
// Access DOM elements
const optionSelector = document.getElementById('selector');

// Put switch on the selector
optionSelector.addEventListener('change', function () {
    let value = optionSelector.value;
    switch (value) {
        case 'title':
            sortByTitleDesc();
            break;
        case 'likes':
            sortByLikesDesc();
            break;
        case 'dates':
            sortByDateDesc();
            break;
        default:
            sortReset();
    }
});

/**
 * Deploy <radio>-based dropdown.
 */
// Access DOM elements
const sortTitle = document.getElementById('sort_title');
const sortLikes = document.getElementById('sort_likes');
const sortDate = document.getElementById('sort_date');

sortTitle.onchange = sortByTitleDesc;
sortLikes.onchange = sortByLikesDesc;
sortDate.onchange = sortByDateDesc;
