/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/02/2026 at 07:47 PM
 *
 * Lecture203.script.js
 * Event Propagation in Practice
 * -----------------------------------------------------------------------------
 */

"use strict";
const randomInt = (min, max) => Math.floor(min + (max - min + 1) * Math.random());
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());
document.querySelector(".nav__link").addEventListener("click", function(event) {
    this.style.backGroundColor = randomColor();
    console.log("LINK", event.target, event.currentTarget);
    // e.currentTarget is the same as the `this` keyword:
    console.log(event.currentTarget === this);

    // As before, you can stop an event from bubbling to the parent elements via Event.stopPropagation.
    // This is usually not a good idea though, but can fix complex problems with multiple event listeners.
    event.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function(event) {
    this.style.backGroundColor = randomColor();
    console.log("LINKS", event.target, event.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function(event) {
    this.style.backGroundColor = randomColor();
    console.log("NAV", event.target, event.currentTarget);
});

// In all three handlers, the target is the same due to event bubbling.

// If you want to listen to events in the "Capturing" phase (This is usually irrelevant to us), you can do so
// via the addEventListener with a third parameter. This will cause the event to look at the "Capturing" phase
// instead of the bubbling phase.
// document.querySelector(".nav").addEventListener("click", function(event) {}, true);
// "Capturing" was used back in the day when there were multiple JavaScript versions.
