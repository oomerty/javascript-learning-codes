'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
/////////////////////////////////////// LECTURES
///////////////////////////////////////

// LESSON: Selecting, Creating, and Deleting Elements
console.log(document.documentElement);
console.log(document.head);

document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const section1 = document.getElementById("section--1");
const allBtns = document.getElementsByTagName("button");
document.getElementsByClassName("btn");
console.log(allBtns);

// Creating and Inserting Elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList("cookie-message");
//message.textContent("We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.");
message.insertAdjacentHTML = `We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you’ve provided to them or that they’ve collected from your use of their services.`;