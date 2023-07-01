// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*const temperatures = [3, 2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [6, 21, -1];
let tempMax = temperatures[0];
let tempMin = temperatures[0];

function calcTempAmplitude (t1, t2) {
  const temps = t1.concat(t2);

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i-1];
    if(typeof curTemp !== "number") continue;

    if (temps[i] > tempMax) tempMax = temps[i];
    else if (temps[i] < tempMin) tempMin = temps[i];
  }
  return tempMax - tempMin;
}

let amplitude = calcTempAmplitude(temperatures, temperatures2);
console.log(`${tempMax}°C, ${tempMin}°C, ${amplitude}°C`);*/

/*function measureKelvin () {
  const measurement = {
    type: "temp",
    unit: "celcius",
    value: Number(prompt("Degrees celcius:")),
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());*/

let tempsArray = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let str = ``;

  for (let i = 0; i < arr.length; i++) {
    str = str + `... ${arr[i]}°C in ${i+1} days `;
  }
  console.log(str);
}

printForecast(tempsArray);
