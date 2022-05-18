# OpenClassrooms 
Work to deliver the following:

## Project
006 - Créez un site accessible pour une plateforme de photographes

## Path 
Développeur d'application - JavaScript React

## Project execution description

### Overall construction
The project is built up using three languages:
1. **HTML** - Used to provide core semantic structure to the index and photographer pages and create placeholders for all dynamic content. Also, Contact and Lightbox modals are 'hard-coded' in HTML while operated through JS.
2. **CSS** - Used to style views. The final `styles.css` file is dynamically parsed from many `_.scss` partials to allow use of variables and other techniques to streamline CSS creation.
3. **JavaScript** - Used to provide dynamic content and its manipulation browser-side. Only vanilla JS is used in this project.

### Data treatment
A dedicated asynchronous function utilising `fetch()` is used to connect to a provided `photographers.json` file and return two data arrays separated into photographers and media data. 

```
/**
 * Connect to the data source and return data arrays.
 *
 * @returns {Promise<{photographers: *[], media: ...MediaList | string[]}>}
 */
 async function getData() {...}
```

### Dynamic content creation
Two files - `pages/index.js` and `pages/photographer.js` - provide dynamic content to their respective HTML pages. They take provided data (see above) and use dedicated factories (see below) to insert content into HTML tags for display using asynchronous functions.

```
pages/index.js
/**
 * Display photographers with details as specified in the photographerFactory.
 *
 * @param photographers
 * @returns {Promise<void>}
 */
async function displayData(photographers) {...}

pages/photographer.js
/**
 * Display photographer details in various parts of the document
 * (e.g. above their works, in page title, modal etc).
 *
 * @param photographers
 * @returns {Promise<void>}
 */
async function displayPhotographerDetails(photographers) {...}

/**
 * Construct the portfolio part of the page.
 *
 * @param media
 * @returns {Promise<void>}
 */
async function displayPortfolioDetails(media) {...}
```  

### Factories
The project uses two factories - `factories/media.js` and `factories/photographer.js` - to streamline creation of individual photographer and media DOM 'cards' for their inclusion in HTML pages.
```
factories/photographer.js
/**
 * Build up photographers' cards on index.
 *
 * @param data
 * @returns {{getUserCardDOM: (function(): HTMLElement), picture: string}}
 */
function photographerFactory(data) {...}

factories/media.js
/**
 * Build up portfolio cards on photographer pages.
 *
 * @param data
 * @returns {{getMediumCardDOM: (function(): HTMLElement)}}
 */
function mediaFactory(data) {...}
```
### Other JS functions
The project uses a great number of additional JS functions to manipulate DOM elements and sort data. These include opening and closing Contact and Lightbox modals as well as validation of entries in the Contact modal and operation of direction arrows in the Lightbox. 

Of particular note here is that the project uses two selectors to sort art on the photographer page. One uses `<fieldset>` of radio buttons for navigation with the mouse, and is fully styled. The other utilises `<select>` and is used for keyboard navigation. This is because `<select>` is fully suited 'out of the box' for keyboard navigation where substance take precedence over appearance.  

## Challenges and lessons learnt
This is a challenging project covering many aspects of DOM manipulation. A lot of time has been spent learning how separate blocks of code interact together. Specifically:
1. Using **factory pattern** in this project provides an additional level of streamlining and complexity at the same time. Particular attention must be paid to understanding where various `eventListeners` and `attributes` must be declared. In some cases, these would need to be set in factories and not on `document` elements to work. This is because some of these elements will not be ready by the time a `document` based selector kicks-in.
2. It must be understood that **keyboard navigation** is completely distinct from the 'usual' mouse one and must be coded separately. In other words, if one is sending an `onclick` event, one must also send an `onkeydown` event if one wants the function to work with the keyboard. This sounds obvious but may become a discovery for some. 
3. **Implementation of WAI-ARIA** is a whole thing of its own. If mouse navigation works well, and even if the keyboard navigation works well, VoiceOver may not. 


