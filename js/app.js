'use strict';

// Sales Data
// min hourly customers per location
// max hourly customers per location
// avg cookies per customer an hour at each location


let storeHours = [
  '6am:',
  '7am:',
  '8am:',
  '9am:',
  '10am:',
  '11am:',
  '12pm:',
  '1pm:',
  '2pm:',
  '3pm:',
  '4pm:',
  '5pm:',
  '6pm:',
  '7pm:',
  '8pm:',
];

let storeLocations = [
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

function randNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}
// console.log(randNumber(23, 65));

function randNumberCust(location) {
  // for (let i = 0; i < storeLocations.length; i++) {
    // let storeLocation = storeLocations[i];
    let randHourCust = (`${randNumber(location.minCust, location.maxCust)}`);
    // console.log(randHourCust);
    return randHourCust;
  // }
}
// randNumberCust();

function hourlySales(location) {
  for (let i = 0; i < storeHours.length; i++) {
    let storeHour = storeHours[i];
    let hour = (`${storeHour}`);
    let cookiesSoldHour = (`${storeHour}, ${randNumberCust(location)}`);
    // console.log(hour);
    console.log(cookiesSoldHour);
  }
}
hourlySales(storeLocations[0]);

// let salesSeattle = document.createElement('li');
// salesSeattle.innerText = `${storeHours}`;
// console.log(salesSeattle);
// document.getElementById('seattle').appendChild(salesSeattle);
