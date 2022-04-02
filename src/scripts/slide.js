"use strict";
let adapt = 0;
window.addEventListener("scroll", () => {
    let header = document.querySelector(".slide");
    header.classList.toggle("adapt", window.scrollY < adapt && window.scrollY != 0);
    adapt = window.scrollY;
});
let slide = document.querySelector('.slide-content');
let paths = [
    "./assets/images/small-dog-being-adorable-portrait-studio (1).jpg",
    "./assets/images/small-dog-being-adorable-portrait-studio.jpg",
    "./assets/images/friendly-smart-basenji-dog-giving-his-paw-close-up-isolated-white.jpg",
    "./assets/images/cat.png"
], index = 0;
setInterval(() => {
    slide.setAttribute('src', paths[index]);
    if (index != 3) {
        index++;
    }
    else {
        index = 0;
    }
}, 3000);
