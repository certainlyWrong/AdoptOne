
let comp:number = 0;

window.addEventListener("scroll", () => {
  let header = document.querySelector("header")!;
  header.classList.toggle("sticky", window.scrollY < comp || window.scrollY < 90);
  comp = window.scrollY;
})

