
let comp: number = 0,
  button_menu_mobile = document.querySelector('#button-menu-mobile')!,
  activate = true;


window.addEventListener("scroll", () => {
  let header = document.querySelector("header")!;

  if (!activate) {
    header.classList.toggle("sticky", true);
  }
  else {
    header.classList.toggle("sticky", window.scrollY < comp || window.scrollY < 90);
  }

  comp = window.scrollY;
});

window.addEventListener("resize", () => {
  let login = document.querySelector(".login-static")!;
  // login.classList.toggle("deactivate-login", window.innerWidth <= 900);
});

button_menu_mobile.addEventListener("click", () => {
  let menu = document.querySelector("#menu")!,
      login = document.querySelector(".login-static")!;
  menu.classList.toggle("activate-menu", activate);
  login.classList.toggle("activate-login", activate);
  activate = !activate;
});


