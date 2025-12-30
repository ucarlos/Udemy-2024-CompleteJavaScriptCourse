/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 12/29/2025 at 06:29 PM
 *
 * Lecture190.script.js
 * Internationalizing Dates
 * -----------------------------------------------------------------------------
 */

"use strict";

// Experimenting with the Internationalization API
const now = new Date();

let usLocale = new Intl.DateTimeFormat("en-us");

console.log(usLocale.format(now));

// You can specify an options object to the Locale constructor:
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'long'    
};

// Here's another example of a random locale
let locale = new Intl.DateTimeFormat("es-mx", options);
console.log(locale.format(now));
console.log(new Intl.DateTimeFormat("ja", options).format(now));

// You can grab the user's locale like so:
const userLanguage = navigator.language;
console.log(userLanguage);

// Therefore, you can pass it to DateTimeFormat like so:
let userLocale = new Intl.DateTimeFormat(userLanguage, options);
console.log(userLocale.format(now));

