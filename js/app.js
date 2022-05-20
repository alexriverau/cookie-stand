'use strict';

function randCustomer(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
console.log(randCustomer(23, 65));

let storeHours = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
  '8pm',
];

let salesLocations = [
  {
    location: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
  },
  {
    location: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
  },
  {
    location: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
  },
  {
    location: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
  },
  {
    location: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
  },
];

function cookieSales() {
  for (let i = 0; i < salesLocations.length; i++) {
    let salesLocation = salesLocations[i];
  }
}

// for (let i = 0; s < storeHours.length; i++) {
//   let storeHour = storeHours[i];
// }

let salesSeattle = document.createElement('li');
salesSeattle.innerText = `${storeHours}`;
console.log(salesSeattle);
document.getElementById('seattle').appendChild(salesSeattle);
