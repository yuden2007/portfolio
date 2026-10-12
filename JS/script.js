
let form = document.getElementById("contactForm");
let result = document.getElementById("result");

form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Show a message
    result.textContent = "Thank you! Your message is ready.";

    // Clear the inputs
    form.reset();

});
