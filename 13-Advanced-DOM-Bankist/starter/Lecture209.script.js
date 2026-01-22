/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/22/2026 at 01:44 PM
 *
 * Lecture209.script.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

/**
 * @param {Array} entries
 * @param observer
 */
const obsCallback = function(entries, observer) {
    // In this situation, if the section1 intersection
    entries.forEach(entry => {
        console.log(entry);
    });    
};

const obsOptions = {
    root: null,
    // Percentage of intersection on the target element that will cause the callback to be executed.
    threshold: 0.1
};


// To use the Intersection Observer API, you'll have to create an object like so:
let observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);


const header = document.querySelector(".header");
const navHeight = nav.getBoundingClient().height;

/**
 * {Array} entries
 */
let stickyNav = function(entries) {
    const [entry] = entries;
    console.log(entry);


    if (!entry.isIntersecting)
        nav.classList.add("sticky");
    else
        nav.classList.remove("sticky");
    
    
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    // Basically, a box of n pixel applied outside of our target element. It is as if the header was placed above?
    rootMargin: `-${navHeight}px`
});

headerObserver.observe(header);


