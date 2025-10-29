/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/21/2025 at 02:42 PM
 *
 * Lecture122.practice.js
 *
 * -----------------------------------------------------------------------------
 */

"use strict";

import {books} from "./PracticeBoilerplate.js"

// 12.1﻿ Below is the allKeywords variable, which stores an empty array. Loop over the books array, and fill the
// allKeywords array with the keywords coming from the keywords property of each book object. The allKeywords array
// should have just one level (no nested arrays).

// Use whatever loop and methods you want. You can also use the spread syntax. In the end, the allKeywords array should
// look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

const allKeywords = [];
for (const book of books)
    allKeywords.push(...book.keywords);


// 12.2﻿ The allKeyword array contains duplicates. Remove them by creating a Set out of that array. Assign the newly
// created set to the uniqueKeywords variable.

let uniqueKeywords = new Set(allKeywords);
console.log(...uniqueKeywords);

// 12.3﻿ Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
uniqueKeywords.add("coding");
uniqueKeywords.add("science");

// 12.4 Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete("business");

// 12.5﻿ Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
let uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// 12.6﻿ Delete all items from the uniqueKeywords set.
uniqueKeywords.clear();


// Note: If you want to push everything in an array to a set, you can do the following:

const tempKeywordSet = new Set();
for (const book of books) {
    let {keywords} = book;
    for (const keyword of keywords)
        tempKeywordSet.add(keyword);        
}
console.log(...tempKeywordSet);
