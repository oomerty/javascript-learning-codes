'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const navLink = document.querySelectorAll('.nav__link');
const navItem = document.querySelectorAll('.nav__item');
const navLinks = document.querySelector('.nav__links');
const nav = document.querySelector('.nav');

const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector('#section--1');
const section3 = document.querySelector('#section--3');

///////////////////////////////////////
// Modal window
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
// Reveal Sections + The Intersection Observer API
const allSections = document.querySelectorAll(`.section`);
const revealSection = function (entries, observer) {
  const [entry] = entries;
  entry.target.classList.remove(`section--hidden`);
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add(`section--hidden`);
});

///////////////////////////////////////
// PAGE NAVIGATION
/*navLink.forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: 'smooth' });
  });
});*/

// Event Delegation
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

navLinks.addEventListener('click', function (e) {
  if (
    e.target.classList.contains(`nav__link`) &&
    !e.target.classList.contains(`btn--show-modal`)
  ) {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////////////
// Sticky Navigation + The Intersection Observer API
/*const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function (e) {
  if (window.scrollY >= initialCoords.top) {
    nav.classList.add(`sticky`);
  } else nav.classList?.remove(`sticky`);
});*/ // BAD PERFORMANCE

/*const obsCallback = function (entries, observer) {
  entries.forEach(entry =>
    console.log(entry))
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2]
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);*/

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    nav.classList?.remove(`sticky`);
  } else nav.classList.add(`sticky`);
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////
// Menu Fade Ainmation
navLink.forEach(function (el) {
  el.addEventListener(`mouseover`, function (e) {
    menuFade(el, e.target, 0.5);
  });
  el.addEventListener('mouseout', function (e) {
    menuFade(el, e.target, 1);
  });
});

function menuFade(el, target, opacityValue) {
  Array.from(el.closest(`.nav__links`).children).forEach(el =>
    el !== target.parentElement ? (el.style.opacity = `${opacityValue}`) : null
  );
  document.querySelector('.nav__logo').style.opacity = `${opacityValue}`;
}

///////////////////////////////////////
// Smooth Scrolling
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

  section1.scrollIntoView({ behavior: `smooth` });
});

///////////////////////////////////////
// Lazy Loading Images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener(`load`, function () {
    entry.target.classList.remove(`lazy-img`);
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: `200px`,
});

imgTargets.forEach(img => imgObserver.observe(img));

///////////////////////////////////////
// Tabbed Component
document.querySelector('.operations').addEventListener('click', function (e) {
  if (e.target.classList.contains(`btn`)) {
    //const id = [...e.target.classList].splice(` `).at(2).at(-1);
    const id = e.target.dataset.tab;
    const optTabActive = `operations__tab--active`;
    if (!e.target.classList.contains(optTabActive)) {
      Array.from(e.target.parentElement.children).forEach(el =>
        el.classList.contains(`operations__tab--${id}`)
          ? el.classList?.add(optTabActive)
          : el.classList?.remove(optTabActive)
      );

      Array.from(this.children).forEach(el =>
        el.classList.contains(`operations__content--${id}`)
          ? el.classList.add(`operations__content--active`)
          : el.classList?.remove(`operations__content--active`)
      );
    }
  }
});

///////////////////////////////////////
// Slider Component
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dots = document.querySelector('.dots');
let curSlide = 0;
const maxSlide = slides.length;

createDots();
const dot = document.querySelectorAll(`.dots__dot`);

function goToSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
  updateDots();
}

function nextSlide() {
  curSlide += curSlide === maxSlide - 1 ? 0 : 1;
  goToSlide(curSlide);
}

function prevSlide() {
  curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
  goToSlide(curSlide);
}

// Navigation with Arrow Buttons

goToSlide(0);

btnRight.addEventListener('click', nextSlide.bind());
btnLeft.addEventListener('click', prevSlide.bind());

// Navigation with Key Presses

function keyFunc(e) {
  if (e.key === `ArrowLeft`) prevSlide();
  if (e.key === `ArrowRight`) nextSlide();
}

function slideKeyControl(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    document.addEventListener(`keydown`, keyFunc);
  } else {
    document.removeEventListener(`keydown`, keyFunc);
  }
}

const sliderInView = new IntersectionObserver(slideKeyControl, {
  root: null,
  threshold: [0.1, 0.9],
});

sliderInView.observe(section3);

// Navigation with Dots
function createDots() {
  slides.forEach((_, i) =>
    dots.insertAdjacentHTML(
      `beforeend`,
      `<button class="dots__dot" data-slide="${i}"></button>`
    )
  );
}

function updateDots() {
  dot.forEach(function (dot) {
    Number.parseInt(dot.dataset.slide) === curSlide
      ? dot.classList.add(`dots__dot--active`)
      : dot.classList?.remove(`dots__dot--active`);
  });
}

dots.addEventListener('click', function (e) {
  if (Number.parseInt(e.target.dataset.slide) !== curSlide) {
    curSlide = Number.parseInt(e.target.dataset.slide);
    goToSlide(Number.parseInt(curSlide));
  }
});
