/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 10/31/2025 at 03:15 PM
 *
 * Lecture127.challenge.js
 *
 * 1. Create an array 'events' of the different game events that happened
 *    (no duplicates)
 *
 * 2. After the game has finished, is was found that the yellow card
 *    from minute 64 was unfair. So remove this event from the game events
 *    log.
 *
 * 3. Compute and log the following string to the console: "An event happened,
 *    on average, every 9 minutes" (keep in mind that a game has 90 minutes)
 * 
 * 4. Loop over 'gameEvents' and log each element to the console, marking
 *    whether it's in the first half or second half (after 45 min) of the
 *    game, like this: [FIRST HALF] 17: ⚽ GOAL
 * -----------------------------------------------------------------------------
 */

"use strict";

const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened
//    (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute
//    64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);

// 3. Compute and log the following string to the console: "An event happened,
//    on average, every 9 minutes" (keep in mind that a game has 90 minutes)

let eventAverage = 90 / gameEvents.size;
console.log(`An event happened on average, every ${eventAverage} minute(s).`);

// 4. Loop over 'gameEvents' and log each element to the console, marking
//    whether it's in the first half or second half (after 45 min) of the
//    game, like this: [FIRST HALF] 17: ⚽ GOAL

for (const [key, value] of gameEvents) {
    let modifier = (key < 45)? "[FIRST HALF]" : "[SECOND HALF]";
    console.log(`${modifier} ${key}: ${value}`);
}
