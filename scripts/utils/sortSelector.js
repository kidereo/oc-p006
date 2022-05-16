/**
 * Deploy <select>-based dropdown.
 */

/**
 * Access DOM elements.
 * @type {HTMLElement}
 */
const optionSelector = document.getElementById('selector');

/**
 * Put switch on the selector.
 */
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

/**
 * Access DOM elements.
 * @type {HTMLElement}
 */
const sortTitle = document.getElementById('sort_title');
const sortLikes = document.getElementById('sort_likes');
const sortDate = document.getElementById('sort_date');

/**
 * Put listeners on the radio buttons.
 */
sortTitle.onchange = sortByTitleDesc;
sortLikes.onchange = sortByLikesDesc;
sortDate.onchange = sortByDateDesc;


/**
 * Keyboard navigation of <select> element
 */
document.addEventListener('keydown', (event) => {
    const radioSorter = document.querySelector('.sort_radio_container');
    const selectSorter = document.querySelector('.sort_selector');
    const prompt = document.querySelector(".sort_selector_nav_prompt");
    const selector = document.getElementById('selector');
    if (event.code === 'Tab') {
        // Replace fancy dropdown with <select> element
        radioSorter.style.display = 'none';
        selectSorter.style.display = 'block';
        // Display prompt to use keyboard arrows
        //prompt.style.display = 'flex';
    }
});

/**
 * Keyboard navigation of <radio>-based dropdown.
 */
/*document.addEventListener('keydown', (event) => {
    let sorter = document.querySelector('.contact_button');
    let radioSet = document.querySelector('.radio_options');
    const prompt = document.getElementById("sort_radio_container_nav_prompt");
    if (sorter === document.activeElement || sortLikes === document.activeElement || sortDate === document.activeElement || sortTitle === document.activeElement) {
        prompt.style.display = "flex";
        radioSet.classList.add('radio_options_focus');
    } else {
        prompt.style.display = "none";
        radioSet.classList.remove('radio_options_focus');
    }
});*/
