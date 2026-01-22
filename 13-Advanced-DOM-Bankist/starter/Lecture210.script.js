/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/22/2026 at 03:56 PM
 *
 * Lecture210.script.js
 * Revealing Elements on Scroll
 * -----------------------------------------------------------------------------
 */

"use strict";

const allSections = document.querySelectorAll(".section");

const revealSection = function(entries, observer) {
    // NOTE: IntersectionObserver will observe all sections when the page loads:
    const [entry] = entries;
    console.log(entry);


    if (!entry.isIntersecting)
        return;
    
    entry.target.classList.remove("section--hidden");
    // Now unobserve the entry once it's done.
    observer.unobserve(entry.target);
    
    
};



const sectionObserver = new IntersectionObserver(revealSection, {
    // Root will be the viewport:
    root: null,
    threshold: 0.15,
    
});

allSections.forEach(function(section) {    
    sectionObserver.observe(section);
    section.classList.add("section--hidden");    
});
