
let grid_adapt: number = 0;

window.addEventListener("scroll", () => {
  let cards = document.querySelector(".Cards")!;
  cards.classList.toggle("home-grid-adapt", window.scrollY < slide_adapt && window.scrollY > 90);
  slide_adapt = window.scrollY;
})
