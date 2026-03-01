/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/31/2025 at 02:55 PM
 *
 * Lecture198.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

// This is how you'll select the actual element that represents the document (or page).
console.log(document.documentElement);

// By extension, you can grab the body and head via its attribute:
console.log(document.head);
console.log(document.body);

// Otherwise, the way to grab elements from the document is via the .querySelector() method
// which you are quite aware of:
const header = document.querySelector(".header");

// Note that .querySelectorAll returns a NodeList, a static collection of elements.
// If you modify it, the changes won't be automatically updated.
const allSections = document.querySelectorAll(".section");

// You also remember .getElementById, which is older and will only grab a single element.
document.getElementById("section--1");

// There's also .getElementsByTagName, which grabs all the elements with the same tag:
// However, this will return an HTMLCollection which is a live collection of elements.
const allButtons = document.getElementsByTagName("button");

// There's also .getElementsByClassName, where you pass the name of the class.
// This will return a HTMLCollection instead of NodeList.
console.log(document.getElementsByClassName("btn"));

// In order to create an element, you can use .insertAdjacentHTML which accepts a position and
// string containing the HTML elements.

// There's also .createElement, which you're already familiar with:
const message = document.createElement("div");
// As before, this element hasn't been attached anywhere so it's not displayed.
// You can add classes like so:
message.classList.add("cookie-message");
message.textContext = "We use cookies for improved functionality and analytics.";
message.innerHTML = `We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

// Then, append or prepend the element to the parent element that you want it to be in. In this
// case, our message will be appended to the beginning of the header tag. Since each DOM element is
// unique, you can move an element to different parent elements.
header.prepend(message);

// If you want to make a clone of an element, call Element.cloneNode() like so:
const copyElement = message.cloneNode(true);

// There's also Element.before and Element.after.
// Element.before will insert an element "before" the called Element, while Element.after will
// insert an element "after" the called Element. In this situation, the new element will be a
// "sibling" element of the called element:
header.before(message);
header.after(message);


// Finally, deleting an element can be done by calling Element.remove(). This removes the element
// from any parent element while doing nothing if the element isn't attached to a parent element.

let foo = document.querySelector(".btn--close-cookie")?.addEventListener("click", function() {
    message.remove();
    // This is apparently recent, since you had to grab the parent element to remove the child.
    message.parentElement.removeChild(message);    
});


