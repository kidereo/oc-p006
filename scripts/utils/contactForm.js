/**
 * Dosplay modal.
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

// Prevent page from reloading on button submit
document.getElementById("modal_submit_button").addEventListener("click",
    function (event) {
        event.preventDefault();
        closeModal();
    });