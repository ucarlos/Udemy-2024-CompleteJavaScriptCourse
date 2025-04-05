'use strict';

const modalElement = document.querySelector(".model");
const overlayElement = document.querySelector(".overlay");

const buttonCloseModalElement = document.querySelector(".close-modal");
const buttonOpenModalElement = document.querySelectorAll(".show-modal");

console.log("Example!")
for (let button of buttonOpenModalElement)
    console.log(button.textContent);