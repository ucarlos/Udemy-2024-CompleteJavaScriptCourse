/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/22/2026 at 03:37 PM
 *
 * Lecture208.script.js
 * Sticky Navigation
 * -----------------------------------------------------------------------------
 */

"use strict";

// We can use the "scroll" event so that the header of the page is displayed everytime we scroll the page.
// Do note that this event is highly inefficient (It is called everytime the user scrolls), so use
// the IntersectionObserver API instead.


const initialCoords = section1.getBoundingClientRect();

window.addEventListener("scroll", function() {
    // When should the header become sticky?
    console.log(window.scrollY);

    if (window.scrollY > initialCoords.top)
        nav.classList.add("sticky");
    else
        nav.classList.remove("sticky");
});

