/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 11/05/2025 at 02:22 PM
 *
 * Lecture131.challenge.js
 * Write a program that receives a list of variable names written in underscore_case
 * and convert them to camelCase.
 * The input will come from a textarea inserted into the DOM
 * (see code below to insert the elements), and conversion will happen when
 * the button is pressed.
 *
 * NOTE TO SELF: You cannot style a window.alert popup, so any behavior that
 *               requires a monospaced font for aligning will always look off.
 * -----------------------------------------------------------------------------
 */

"use strict";

function getLargestWordLength(rawLines) {
    if (!rawLines.length)
        return 0;

    let length = 0;
    for (const line of rawLines) {
        let modifiedLineLength = line.trim().length;
        if (modifiedLineLength > length)
            length = modifiedLineLength;
    }

    return length;
}

function convertFromUnderScoreCaseToCamelCase(rawTextAreaString) {
    let rawLines = rawTextAreaString.split("\n");
    let modifiedLines = [];
    const underscoreCaseRegex = /^[a-zA-Z]+_[a-zA-Z]+$/g

    const largestLineLength = getLargestWordLength(rawLines) + 1;
    for (let [index, line] of rawLines.entries()) {
        let modifiedLine = line.trim().toLowerCase();
        if (!modifiedLine.match(underscoreCaseRegex))
            continue;

        let splitName = modifiedLine.split("_");

        splitName[1] = splitName[1].replace(splitName[1][0], splitName[1][0].toUpperCase());

        // Next, append the checkmark properly:
        let joinedString = splitName.join("").padEnd(largestLineLength).padEnd(largestLineLength + (index + 1), "✅");
        modifiedLines.push(joinedString);
    }

    return modifiedLines.join("\n");
}

let textAreaElement = document.createElement("textarea");
let buttonElement = document.createElement("button");

let outputTextAreaElement = document.createElement("textarea");
outputTextAreaElement.setAttribute("hidden", "hidden");
outputTextAreaElement.setAttribute("disabled", "disabled");

buttonElement.textContent = "Click ME!";

buttonElement.addEventListener("click", () => {
    outputTextAreaElement.setAttribute("hidden", "hidden");
    const result = convertFromUnderScoreCaseToCamelCase(textAreaElement.value);

    outputTextAreaElement.value = result;
    outputTextAreaElement.removeAttribute("hidden");
    console.log(result);
});

document.body.append(textAreaElement);
document.body.append(buttonElement);
document.body.append(outputTextAreaElement);