/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/22/2026 at 04:24 PM
 *
 * Lecture212.script.js
 * Lazy Loading Images
 * -----------------------------------------------------------------------------
 */

"use strict";

const imgTargets = document.querySelectorAll(`img[data-src]`);
console.log(imgTargets);

const loadImg = function(entries, observer) {
    const [entry] = entries;    
    // console.log(entry);

    if (!entry.isIntersecting)
        return;

    // Replace src attribute with data-src:
    entry.target.src = entry.target.dataset.src;

    // Listen to the "load" event in order to remove the blur effect:
    // If we don't, this will remove the blur behavior automatically.
    entry.target.addEventListener("load", function() {
        entry.target.classList.remove("lazy-img");
    });

    // It's really important to implement this kind of functionality into any personal site
    // as well as implementing said logic.
    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    // The rootMargin will make sure that the behavior loads at 200px before being reached.
    rootMargin: '200px',
    
});

imgTargets.forEach(image => imgObserver.observe(image));

