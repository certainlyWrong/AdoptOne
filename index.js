"use strict";
class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.mobileMenu = document.querySelector(mobileMenu);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
        });
    }
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
        if (this.navList.style.zIndex == '0') {
            this.navList.style.zIndex = '-10';
        }
        else
            this.navList.style.zIndex = '0';
    }
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}
const MobileNavbar = new MobileNavBar(".mobile-menu", ".nav-list", ".nav-list li");
MobileNavbar.init();
window.addEventListener("resize", () => {
    let navlist = document.querySelector(".nav-list");
    if (window.innerWidth < 1000) {
        navlist.style.zIndex = '-10';
    }
    else {
        navlist.style.zIndex = '0';
    }
});

let slide = document.querySelector('.slide'),
    paths = [
      "./assets/images/small-dog-being-adorable-portrait-studio.jpg",
      "./assets/images/small-dog-being-adorable-portrait-studio (1).jpg"
    ],
    index = 0;


setInterval(() => {
  slide.setAttribute('src', paths[index])
  if (index == 0) {
    index = 1
  }
  else
    {
      index = 0;
    }
}, 3000);
