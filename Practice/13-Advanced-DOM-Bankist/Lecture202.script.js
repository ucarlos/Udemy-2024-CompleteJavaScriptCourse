/*
 * -----------------------------------------------------------------------------
 * Created by Ulysses Carlos on 01/02/2026 at 07:35 PM
 *
 * Lecture202.script.js
 * Event Propagation: Bubbling and Capturing
 * -----------------------------------------------------------------------------
 */

"use strict";

// Events have a capturing and bubbling phase: For example when a `<a href>` link was clicked, an
// event is generated at the top of the DOM tree. At this point, the event is in its "Capturing"
// Phase, where the event travels all the way down from the document root to the target element. As
// this happens, the event goes through each of the parent elements until it reaches its target.

// The event then goes through its "Target" phase, in which it is handled there via any event
// listeners attached to the element. In other words, the event functions are executed once the
// event reached the element.

// Then, the event goes all the way back up to the Document root again in the "Bubbling" Phase.
// Just like in the "Capturing" phase, the event passes through all its parent elements.

// So what's the point? Basically, the event happens for each of the parent elements in its "Bubbling" phase.
// For example, if a click element happened on a child element, it also happens on the parent elements.
// This also explains why any "click" events in a child element of a <form> parent element also triggers a
// form submission. Thus, this behavior allows us to implement very important behavior.

// By default, events are only handled in the target and bubbling phases. However, event listeners
// can be setup to listen to events in the capturing phase instead. This also depends on whether the
// event supports each of the phases defined above. This can also be explained as event
// "propagation".

