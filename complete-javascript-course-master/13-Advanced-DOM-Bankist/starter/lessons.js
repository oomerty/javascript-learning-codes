///////////////////////////////////////
/////////////////////////////////////// LECTURES
///////////////////////////////////////

// LESSON: Selecting, Creating, and Deleting Elements
/*console.log(document.documentElement);
console.log(document.head);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const section1 = document.getElementById("section--1");
const allBtns = document.getElementsByTagName("button");
document.getElementsByClassName("btn");
console.log(allBtns);

// Creating and Inserting Elements
// .insertAdjacentHTML

const message = document.createElement("div");
message.classList.add("cookie-message");
//message.textContent("We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.");
message.innerHTML = `
<p>We use cookies to personalise content and ads, to provide social media features and to analyse our traffic.</p>
<button class="btn btn--close-cookie">Accept All</button>`;

//header.prepend(message);
header.append(message);
//header.append(message.cloneNode(true));

header.before(message);
header.after(message);

// Delete Elements
document.querySelector(".btn--close-cookie").addEventListener("click", function () {
  message.remove();
}); */

// LESSON: Styles, Attributes and Classes
/* // Styles
message.style.backgroundColor = `#37383d`;
message.style.width = `100%`;

console.log(message.style.height); // boş
console.log(message.style.backgroundColor); // rgb(55, 56, 61)

console.log(getComputedStyle(message).height); // 50px

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + `px`;

document.documentElement.style.setProperty(`--color-primary`, `orangered`);

// Attributes
const logo = document.querySelector(`.nav__logo`);
console.log(logo.alt); // Alt text: Bankist logo
console.log(logo.src); // Src

console.log(logo.designer); // NON STANDARD undefined
console.log(logo.getAttribute(`designer`)); // Jonas

logo.setAttribute(`company`, `Bankist`);
console.log(logo.getAttribute(`src`)); // img/logo.png

console.log(logo.dataset.versionNumber); // DATA ATTRIBUTES * 3.0

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");*/

// LESSON: Events and Event Handlers
/*const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert(`Great!`);
  // h1.removeEventListener(`mouseenter`, alertH1); // REMOVE Event Handler
};

h1.addEventListener(`mouseenter`, alertH1);

// h1.onmouseenter = function (e) {alert(`Great (in a old way)!`);};

setTimeout(() => h1.removeEventListener(`mouseenter`, alertH1), 5000);*/

// LESSON: Event Propagation in Practice
/*const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor());

const navLink = document.querySelectorAll('.nav__link');
const navLinks = document.querySelectorAll('.nav__links');
const nav = document.querySelector('.nav');

navLink.forEach(val =>
  val.addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log(`LINK`, e.target, e.currentTarget);

    // Stop Propagation
    // e.stopPropagation();
  })
);

navLinks.forEach(val =>
  val.addEventListener('click', function (e) {
    this.style.backgroundColor = randomColor();
    console.log(`LINKS`, e.target, e.currentTarget);
  })
);

nav.addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log(`NAV`, e.target, e.currentTarget);
  },
  true
); // TRUE iken ilk önce nav işlenir*/

// LESSON: DOM Traversing
/* const h1 = document.querySelector('h1');

// Going Downwards: child
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes); // NodeList(9) [text, comment, text, span.highlight, text, br, text, span.highlight, text]
console.log(h1.children); // HTMLCollection(3) [span.highlight, br, span.highlight]

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going Upwards: parent
console.log(h1.parentNode); // div.header__title
console.log(h1.parentElement); // div.header__title

h1.closest(`.header`).style.background = `var(--gradient-secondary)`;
h1.closest(`h1`).style.background = `var(--gradient-primary)`;

// Going Sideways: sibling
console.log(h1.previousElementSibling); // null
console.log(h1.nextElementSibling); // h4

console.log(h1.previousSibling); // #text
console.log(h1.nextSibling); // #text

console.log(h1.parentElement.children); // HTMLCollection(4) [h1, h4, button.btn--text.btn--scroll-to, img.header__img] */

// LESSON: 