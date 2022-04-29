/**
 * Access DOM element(s).
 */
const optionSelector = document.getElementById('selector');

/**
 * Put a switch on the option selector.
 */
optionSelector.addEventListener('change', function () {
    let selectedValue = optionSelector.value;
    switch (selectedValue) {
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

