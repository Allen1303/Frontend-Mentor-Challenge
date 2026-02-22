"use strict";
// Cache DOM elements
const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentCheck = document.getElementById("concent-check");
const submitBtn = document.getElementById("submit-btn");
// google Sheet URL
const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzroedNUqVpuAytZDuQ2Tw48hn0gWls0RBSeWfeprUI-GgfBFg7hR6FaNWWmdiHfmC29Q/exec";
//Helper function for submission logic
async function submitForm(formData) {
    try {
        await fetch(SCRIPT_URL, {
            method: "POST",
            body: JSON.stringify(formData),
            mode: "no-cors",
        });
        alert("✅ Success! Your message has been sent.");
    } catch (error) {
        alert("❌ Oops! Something went wrong. Please check your connection.");
    } finally {
        submitBtn.innerText = "Submit";
        submitBtn.disabled = false;
    }
}
//Eventlistener logic
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    submitBtn.innerText = "Sending...";
    submitBtn.disabled = true;

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const email = emailInput.value;
    const queryType = document.querySelector(
        'input[name="query-type"]:checked',
    )?.value;
    const message = messageInput.value;
    const consent = consentCheck.checked;
    //Create an Object for the elements
    const formData = {
        firstName,
        lastName,
        email,
        queryType,
        message,
        consent,
    };
    submitForm(formData);
});
