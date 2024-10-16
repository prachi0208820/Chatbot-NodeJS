// inputProcessor.js
function processInput(input) {
    // Input processing logic here
    return processedInput;
}

// responseGenerator.js
function generateResponse(processedInput) {
    // Response generation logic here
    return response;
}

// outputRenderer.js
function renderOutput(response) {
    // Output rendering logic here
}

// main.js
import processInput from './inputProcessor';
import generateResponse from './responseGenerator';
import renderOutput from './outputRenderer';

document.querySelector("#submit").addEventListener("click", (e) => {
    let input = document.getElementById("input").value;
    if (input === "") {
        alert("Say something");
        return false;
    }

    let processedInput = processInput(input);
    let response = generateResponse(processedInput);
    renderOutput(response);

    document.getElementById("input").value = "";
});