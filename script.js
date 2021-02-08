"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector(".header");
const allSelections = document.querySelectorAll(".section");
console.log(allSelections);
document.querySelector("#section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

//.insertnAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = "We use cookie for improved functionality";
message.innerHTML =
  "We use cookies for improved functionality an analytics. <button class='btn" +
  " btn--close-cookie'>Got" +
  " IT</button>";
// header.prepend(message);
header.append(message);

// header.append(message.cloneNode(true));
//
//     header.before(message);
// header.after(message);

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// console.log(message.style.backgroundColor);
//
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
//
// message.style.height = getComputedStyle(message).height + 40 + "px";
//
// // document.documentElement.style.setProperty("--color-primary", "orangered");
//
// //Attributes
//
// const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.className);
// console.log(logo.designer); // Non-standart
//
// logo.alt = "Beatuiful minimalist logo";
// console.log(logo.getAttribute("designer"));
//
// logo.setAttribute("company", "Bankist");
// console.log(logo.getAttribute("company"));
// console.log(logo.company);
//
// console.log(logo.src);
// console.log(logo.getAttribute("src"));
//
// const link = document.querySelector(".nav__link--btn");
// console.log(link.href);
// console.log(link.getAttribute("href"));
//
// console.log(logo.dataset.versionNumber);
//
// logo.classList.add("c", "j");
// logo.classList.remove("c", "j");
// logo.classList.toggle("c");
// logo.classList.contains("c");
//
// // Dont use it overwrites all other classes
// logo.className = "jonas";

const btnScrollTo = document.querySelector(".btn--scroll-to");

const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", (e) => {
  // const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords);
  // console.log(e.target.getBoundingClientRect());
  // console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);
  // console.log(
  //   "height/width viewport",
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  //);
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

const h1 = document.querySelector("h1");
h1.addEventListener("");
