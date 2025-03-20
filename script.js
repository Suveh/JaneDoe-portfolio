// Add Recommendation Functionality
document.getElementById("recommendation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the new recommendation text
    const newRec = document.getElementById("new-recommendation").value;

    // Check if the user entered something
    if (newRec && newRec.trim() !== "") {
        // Create a new recommendation element
        const newRecElement = document.createElement("div");
        newRecElement.classList.add("recommendation");
        newRecElement.innerHTML = `<p>"${newRec}"</p>`;

        // Append the new recommendation to the recommendations list
        document.getElementById("rec-list").appendChild(newRecElement);

        // Clear the textarea
        document.getElementById("new-recommendation").value = "";

        // Show confirmation pop-up
        alert("Thank you for your recommendation!");
    } else {
        // Show an error message if the input is empty
        alert("Recommendation cannot be empty. Please try again.");
    }
});