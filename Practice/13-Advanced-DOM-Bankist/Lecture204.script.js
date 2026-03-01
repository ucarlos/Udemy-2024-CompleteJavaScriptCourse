/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/11/2026 at 09:31 PM
 *
 * Lecture204.script.js
 * Event Delegation
 * -----------------------------------------------------------------------------
 */

"use strict";

// There's not a lot of code in this video, so the main point of it is to describe Event Delegation.

// As per the video, Event Delegation is a way to handle an child element's event in a parent element
// so that you only define a single listener that can handle each of the various child elements.

// For example, if I have an div element foo with child elements bar that handle some form of link,
// instead of assigning event listeners for each of the child elements, I can simply just define a
// single event listener on the parent and then use event.target to determine which child element
// caused the event to fire.

// That way, you can specify the behavior for the various type of child elements.

// The video outlines the following:
// 1. Add event listener to common parent element.
// 2. Determine what element originated the event.
