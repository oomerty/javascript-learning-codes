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

// LESSON: 