"use strict";
let comp = 0, button_menu_mobile = document.querySelector('#button-menu-mobile'), button_login = document.querySelector('.button-login'), activate = true, login = false;
window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    if (!activate) {
        header.classList.toggle("sticky", true);
    }
    else {
        header.classList.toggle("sticky", window.scrollY < comp || window.scrollY < 90);
    }
    comp = window.scrollY;
});
button_menu_mobile.addEventListener("click", () => {
    let menu = document.querySelector("#menu"), login = document.querySelector(".login-static"), mobile_menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("activate-menu", activate);
    login.classList.toggle("activate-login", activate);
    mobile_menu.classList.toggle("active", activate);
    activate = !activate;
});
button_login.addEventListener("click", () => {
    button_login.innerHTML = login ? "SAIR" : "ENTRAR";
    login = !login;
});
