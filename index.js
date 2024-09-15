"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsdom_1 = require("jsdom");
// Create a simulated DOM environment
const dom = new jsdom_1.JSDOM(`<!DOCTYPE html><html><body><button id="myButton">Click Me</button></body></html>`);
// Get the document object from the simulated DOM
const domDocument = dom.window.document;
domDocument.addEventListener("DOMContentLoaded", () => {
    const button = domDocument.getElementById("myButton");
    // Check if the button exists before trying to click it
    if (button) {
        button.addEventListener("click", () => {
            console.log("Button clicked!");
        });
        // Simulate button click
        button.click();
    }
});
