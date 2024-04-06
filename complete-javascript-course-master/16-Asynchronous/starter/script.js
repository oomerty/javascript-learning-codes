'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

function whereAmI(lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`
  )
    .then(response => {
      if (!response.ok) throw new Error(`You are refreshing the page too fast`);

      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.locality}, ${data.countryName}`);
      getCountryData(data.countryName);
    })
    .catch(err =>  renderError(`Oops! Something went wrong :c Try Again! (${err})`)
    );
}

btn.addEventListener('click', function (e) {
  getCountryData('turkey');
});

//whereAmI(36.8744412, 30.6396268);

//getCountryData('tuasfrkey');
