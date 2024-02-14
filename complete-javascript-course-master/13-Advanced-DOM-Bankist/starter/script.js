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
// Smooth Scrolling
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // console.log(s1coords); // DOMRect {x: 0, y: 641, width: 1016, height: 1538.6875, top: 641, …}
  // console.log(e.target.getBoundingClientRect()); // DOMRect {x: 30, y: 500.171875, width: 110, height: 29, top: 500.171875, …}
  // console.log(`Current Scroll`, window.pageXOffset, pageYOffset); // Current Scroll 0 300
  // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); // height/width viewport 641 1016

  //window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset);
  /*window.scrollTo({
    left: s1coords.left,
    top: s1coords.top + window.pageYOffset,
    behavior: `smooth`,
  });*/

  section1.scrollIntoView({behavior: `smooth`});
});