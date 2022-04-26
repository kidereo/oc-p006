/**
 * DOM elements
 */
const firstName = document.getElementById('first_name');
const surname = document.getElementById('surname');
const eMail = document.getElementById('email');
const message = document.getElementById('message');

/**
 * Variables
 */
const regexName = /^[a-z ,.'-]+$/i;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexMessage = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/;
const minimumNameLength = 2;
const minimumMessageLength = 9;

/**
 * Display modal.
 */
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

/**
 * Close modal.
 */
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

/**
 * Function to  validate and allow dispatch of the form on submission.
 *
 * @returns {boolean}
 */
function validate() {
    let firstNameIsValid = validateFirstName();
    let surnameIsValid = validateSurname();
    let emailIsValid = validateEmail();
    let messageIsValid = validateMessage();
    if (firstNameIsValid &&
        surnameIsValid &&
        emailIsValid &&
        messageIsValid) {
        // Log message variables to the console
        let msg = {};
        msg.name = firstName.value;
        msg.surname = surname.value;
        msg.email = eMail.value;
        msg.message = message.value;
        console.log(JSON.stringify(msg));
        // Display confirmation alert
        let artist = document.getElementsByTagName('h1')[0].textContent;
        alert("Thank you, " + msg.name + ". Your message to " + artist + " has been sent!");
        // Close the modal and clear the form
        closeModal();
        document.forms[0].reset();
        //return true;
    }
    return false;
}

/**
 * Check if the first name is valid.
 *
 * @returns {boolean}
 */
function validateFirstName() {
    if (theNameIsValid(firstName)) {
        setDataErrorVisible(firstName);
        setBorderToError(firstName);
        return false;
    }
    setBorderToValid(firstName);
    return true;
}

/**
 * Check if the last name is valid.
 *
 * @returns {boolean}
 */
function validateSurname() {
    if (theNameIsValid(surname)) {
        setDataErrorVisible(surname);
        setBorderToError(surname);
        return false;
    }
    setBorderToValid(surname);
    return true;
}

/**
 * Function to check both name fields for correctness.
 *
 * @param name
 * @returns {boolean}
 */
function theNameIsValid(name) {
    return name.value.length < minimumNameLength || !name.value.match(regexName);
}

/**
 * Check if the email is valid
 *
 * @returns {boolean}
 */
function validateEmail() {
    if (!eMail.value.match(regexEmail)) {
        setDataErrorVisible(eMail);
        setBorderToError(eMail);
        return false;
    }
    setBorderToValid(eMail);
    return true;
}

/**
 * Check if the message is valid.
 *
 * @returns {boolean}
 */
function validateMessage() {
    if (message.value.length < minimumMessageLength || !message.value.match(regexMessage)) {
        setDataErrorVisible(message);
        setBorderToError(message);
        return false;
    }
    setBorderToValid(message);
    return true;
}

/**
 * Validate fields on the fly.
 */
firstName.addEventListener('focusout', () => {
    let valid = validateFirstName();
    if (valid) {
        setDataErrorHidden(firstName);
    }
});

surname.addEventListener('focusout', () => {
    let valid = validateSurname();
    if (valid) {
        setDataErrorHidden(surname);
    }
});

eMail.addEventListener('focusout', () => {
    let valid = validateEmail();
    if (valid) {
        setDataErrorHidden(eMail);
    }
});

message.addEventListener('focusout', () => {
    let valid = validateMessage();
    if (valid) {
        setDataErrorHidden(message);
    }
});

/**
 * Helper functions to save typing.
 *
 * @param element
 */
function setDataErrorVisible(element) {
    element.parentElement.setAttribute('data-error-visible', 'true');
}

function setDataErrorHidden(element) {
    element.parentElement.setAttribute('data-error-visible', 'false');
}

function setBorderToError(element) {
    element.classList.remove('border-valid');
    element.classList.add('border-error');
}

function setBorderToValid(element) {
    element.classList.remove('border-error');
    element.classList.add('border-valid');
}


// Prevent page from reloading on button submit
/*document.getElementById("modal_submit_button").addEventListener("click",
    function (event) {
        event.preventDefault();
        closeModal();
    });*/
