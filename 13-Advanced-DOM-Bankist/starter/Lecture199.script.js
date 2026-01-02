/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/02/2026 at 04:18 PM
 *
 * Lecture199.script.js
 * Styles, Attributes, and Classes
 * -----------------------------------------------------------------------------
 */

"use strict";

const message = document.createElement("div");

// In order to access an element's style, use the Element.style attribute:
// However, this only sets the inline style.
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// NOTE: Reading the 'style' attribute will only grab the attributes that were defined previously.
// The following statement will return nothing
console.log(message.style.color);

// If you want to grab the color attribute, you'll have to use getComputedStyle like so:
const messageProperty = getComputedStyle(message);
// This will grab all the attributes, even if it wasn't defined in the inline style or in the CSS.
console.log(messageProperty.color);
console.log(messageProperty.height);

message.style.height = Number.parseFloat(getComputedStyle(message)) + 40 + "px";

// Now, let's talk about CSS's custom properties. They work similar to a variable in JavaScript, and
// thus can be modified on the JavaScript side.  In this example, these properties are defined in
// :root (Which is document). We modify the custom property like so:
document.documentElement.style.setProperty("--color-primary", "orangered");
// With this, we can change the style of the entire page without any problems. This can also apply
// to every property in the element.

// Attributes are attached to an tag element (like <form action="foo"></foo>).
// If the attributes are defined for the tag, JavaScript will automatically define attributes
// for the element. NOTE THAT THIS WILL ONLY HAPPEN IF THE ATTRIBUTE IS A STANDARD ATTRIBUTE.
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);

// This will return undefined since it's a non-standard attribute
console.log(logo.designer);

// As you already know, you can grab these attributes via `Element.getAttribute`:
console.log(logo.getAttribute("designer"));
// You can also modify it via `Element.setAttribute`:
logo.setAttribute("designer", "Beautiful Minimalist Logo");

// Finally, you can remove it via `Element.removeAttribute`:
logo.removeAttribute("designer");

// Personally, it would be better to use getAttribute, setAttribute, and removeAttribute instead of
// using a property.
const link = document.querySelector(".twitter-link");
console.log(link.getAttribute("href"));

// There's also Data Attributes, where an attribute starts with `data`:
// The attribute 'version-number' will be turned into camelCase:
console.log(logo.dataset.versionNumber);

// Although we talked about classes, we can summarize it again:
// use Element.classList to add, remove, and toggle a class:
logo.classList.add("foo");
logo.classList.remove("foo");
logo.classList.toggle("foo");
logo.classList.contains("foo");

// classList.add and classList.remove accept variable arguments:
logo.classList.add("foo", "bar");
logo.classList.remove("foo", "bar");

// However, make sure NOT to set the className property:
logo.className = "jonas";

