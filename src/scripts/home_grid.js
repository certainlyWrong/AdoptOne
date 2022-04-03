"use strict";
let grid_adapt = 0;
window.addEventListener("scroll", () => {
    let cards = document.querySelector(".Cards");
    cards.classList.toggle("home-grid-adapt", window.scrollY < grid_adapt && window.scrollY > 90);
    grid_adapt = window.scrollY;
});
