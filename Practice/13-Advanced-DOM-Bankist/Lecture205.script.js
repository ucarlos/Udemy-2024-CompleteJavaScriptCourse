/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/11/2026 at 09:45 PM
 *
 * Lecture205.script.js
 * DOM Traversing
 * -----------------------------------------------------------------------------
 */

"use strict";

const h1 = document.querySelector("h1");

// Going downwards to access child elements:
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

// Like you would expect: This refers to the first child element
h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going upwards to the parent element
console.log(h1.parentNode);
console.log(h1.parentElement);

// If we want to a find a parent element no matter how far away it is from the DOM tree,
// use Element.closest():
h1.closest(".header").style.background = 'var(--gradient-secondary)'; // Example of applying a CSS variable

// This is the oppsoite of Element.querySelector in which the former finds child elements while Element.closest finds parent elements.
h1.closest(".h1").style.background = 'var(--gradient-primary)';

// Going sideways to find sibling elements.
// We can only access direct siblings via Element.previousElementSibling and Element.nextElementSibling
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// As before we have the same properties for Nodes:
console.log(h1.previousSibling);
console.log(h1.nextSibling);

// We can always try to access the parent element to find additional children (siblings in this case)
console.log(h1.parentElement.children);

// HTMLCollections are iterable, and so can be used with the spread operator:
[...h1.parentElement.children].forEach(function(element) {
    if (element !== h1)
        element.style.transform = 'scale(0.5)';
});
