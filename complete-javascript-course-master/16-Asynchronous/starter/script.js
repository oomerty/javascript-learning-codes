'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const images = document.querySelector('.images');

function renderCountry(data, className = ``) {
  const html = `<article class="country ${className}">
  <img class="country__img" src="${data.flags.png}"/>
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      Number.parseInt(data.population) / 1000000
    ).toFixed(1)}M people</p>
    <p class="country__row"><span>🗣️</span>${
      Object.values(data.languages)[0]
    }</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

function renderError(msg) {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
}
///////////////////////////////////////

function getCountryAndNeighbour(country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Get country 1
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      renderCountry(data2, `neighbour`);
    });
  });
}

//getCountryAndNeighbour('turkey');
//getCountryAndNeighbour('usa');
//getCountryAndNeighbour('egypt');

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

function getJSON(url, errorMsg = `Something went wrong`) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
}

function getCountryData(country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data.at(0));
      const neighbour = data.at(0).borders?.at(0);

      if (!neighbour) throw new Error(`No neighbour found`);

      return getJSON(
        `https://restcountries.com/v3.1/name/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data.at(0), `neighbour`))
    .catch(err => {
      console.log(`${err} 😔`);
      renderError(`Something went wrong 😔 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
      );
    })
    .then(response => {
      if (!response.ok) throw new Error(`You are refreshing the page too fast`);

      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.locality}, ${data.countryName}`);
      getCountryData(data.countryName);
    })
    .catch(err =>
      renderError(`Oops! Something went wrong :c Try Again! (${err})`)
    );
}

btn.addEventListener('click', function (e) {
  //getCountryData('turkey');
  whereAmI();
});

//getCountryData('tuasfrkey');
//whereAmI(36.8744412, 30.6396268);

// LESSON: The Event Loop in Practice
/*console.log('Test Start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {};
  console.log(res);
});

console.log('Test End');*/

// LESSON: Building a Simple Promise
/*const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening 💫`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve(`You WIN 💰`);
    } else {
      reject(`You lost your money 😔`);
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
};

wait(2).then(() => {
  console.log("I waited for 2 seconds!");
  return wait(1);
}).then(() => console.log("I waited for 1 second!"));

Promise.resolve(`adc`).then(x => console.log(x));
Promise.resolve(`abc`).then(x => console.error(x));*/

// LESSON: Promisifying the Geolocation API

function getPosition() {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

//getPosition().then(pos => console.log(pos));

// LESSON: Consuming Promises with Async/Await
async function whereAreU() {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse Geocoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
    );
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country Data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.countryName}`
    );
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data.at(0));
    return `You are in ${dataGeo.locality}, ${dataGeo.countryName}`;
  } catch (err) {
    console.log(err);
    renderError(`Something went wrong :c ${err.message}`);

    // Reject promise returned from async func
    throw err;
  }
}

// LESSON: Error Handling With try...catch
/*try {
  let y = 1;
  const x = 2;
  y = 3;
} catch(err) {
  console.error(err.message);
}*/

// LESSON: Returning Values from Async Functions
console.log('1: Will get location');
// whereAreU()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} :c`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAreU();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log(`2: ${err.message} :c`);
  }
  console.log('3: Finished getting location');
})();

// LESSON: Running Promises in Parallel
async function get3Countries(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0].capital));
  } catch (err) {
    console.error(err);
  }
}

get3Countries('portugal', 'canada', 'egypt');

// LESSON: Other Promise Combinators: race, allSettled and any
// Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/japan`),
    getJSON(`https://restcountries.com/v3.1/name/albania`),
  ]);
  console.log(res[0]);
})();

function timeout(sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, sec * 1000);
  });
}

Promise.race([getJSON(`https://restcountries.com/v3.1/name/italy`), timeout(1)])
  .then(data => console.log(data[0]))
  .catch(err => console.error(err));

// Promise.allSettled
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// Promise.any [ES2021]
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

// CHALLENGE: 2
function createImage(imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement(`img`);
    img.src = imgPath;
    img.addEventListener('load', function () {
      images.insertAdjacentElement('beforeend', img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
}

function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

/*let currentImg;

createImage('img/img-1.jpg')
  .then(response => {
    currentImg = response;
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    currentImg = img;
    return wait(2);
  })
  .then(() => currentImg.style.display = "none")
  .catch(err => console.error(err));*/

// CHALLENGE: 3
async function loadNPause() {
  try {
    let img = await createImage('img/img-1.jpg');
    await wait(2).then(() =>img.style.display = "none");
    img = await createImage('img/img-2.jpg');
    await wait(2).then(() =>img.style.display = "none");
    img = await createImage('img/img-3.jpg');
  } catch (err) {
    console.error(err);
  }
};

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
async function loadAll(imgArr) {
  try {
    let imgs = imgArr.map(async i => await createImage(i));
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add(`parallel`));
  } catch (err) {
    console.error(err);
  }
};

//loadNPause();
loadAll(imgArr);