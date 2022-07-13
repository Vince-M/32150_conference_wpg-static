console.log("Hello");

const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const nav__list = document.querySelector(".nav__list");
const header__nav = document.querySelector(".header__nav");

/* Toggle mobile menu */
document.querySelector("#btnHamburger").addEventListener("click", function () {
  console.log("click hamburger");

  if (header.classList.contains("open")) {
    // Close hamburger menu
    header.classList.remove("open");
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    nav__list.classList.add("nav__list");
    nav__list.classList.remove("nav__list--open");
    header__nav.classList.add("header__nav");
    header__nav.classList.remove("header__nav--open");
    header__nav.classList.add("hide-for-mobile");
  } else {
    // Open hamburger menu
    header.classList.add("open");
    overlay.classList.remove("fade-out");
    overlay.classList.add("fade-in");
    nav__list.classList.add("nav__list--open");
    nav__list.classList.remove("nav__list");
    header__nav.classList.remove("header__nav");
    header__nav.classList.add("header__nav--open");
    header__nav.classList.remove("hide-for-mobile");
  }
});
