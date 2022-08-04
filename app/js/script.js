console.log("Hello");
console.log("hi");

const btnHamburger = document.querySelector("#btnHamburger");
// const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const nav__list = document.querySelector(".nav__list");
const header__nav = document.querySelector(".header__nav");
const fadeElems = document.querySelectorAll(".has-fade");
const menu = document.querySelector(".menu");
const nav__items = document.querySelectorAll(".nav__item");

/* Toggle mobile menu */
document.querySelector("#btnHamburger").addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close hamburger menu
    // body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
    nav__list.classList.add("nav__list");
    nav__list.classList.remove("nav__list--open");
    header__nav.classList.add("header__nav");
    header__nav.classList.remove("header__nav--open");
    header__nav.classList.add("hide-for-mobile");
  } else {
    // Open hamburger menu
    // body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
    nav__list.classList.add("nav__list--open");
    nav__list.classList.remove("nav__list");
    header__nav.classList.remove("header__nav");
    header__nav.classList.add("header__nav--open");
    header__nav.classList.remove("hide-for-mobile");
  }
});

// Submenu
function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

for (let nav__item of nav__items) {
  if (nav__item.querySelector(".submenu")) {
    nav__item.addEventListener("click", toggleItem, false);
    nav__item.addEventListener("keypress", toggleItem, false);
  }
}

// Close submenu from anywhere on page
function closeSubmenu(e) {
  let isClickInside = menu.contains(e.target);

  if (!isClickInside && menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
  }
}

document.addEventListener("click", closeSubmenu, false);
