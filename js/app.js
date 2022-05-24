'use strict';

// SALES DATA TO DO
// min hourly customers per location
// max hourly customers per location
// avg cookies per customer an hour at each location

// MATH RANDOM REFERENCE
// function randNumber(min, max) {
//   return Math.floor(min + Math.random() * (max - min));
// }
// console.log(randNumber(23, 65));

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

// MATH RANDOM TEST
// function randNumberCust(location) {
//   let randHourCust = `${randNumber(location.minCust, location.maxCust)}`;
//   return randHourCust;
// }
// randNumberCust();

// TEST COOKIES PER HOUR DISPLAY
// for (let i = 0; i < storeHours.length; i++) {
//   let cookiesSold = `${storeHours[i]} ${randNumberCust(storeLocations[0])} cookies`;
//   console.log(cookiesSold);
// }
// TEST LOCATIONS DISPLAY
// for (let i = 0; i < storeLocations.length; i++) {
//   let storeLocation = storeLocations[i];
//   let locationSales = `${storeLocation.location}`;
//   console.log(locationSales);
// }

function locationSales(location) {
  for (let i = 0; i < storeLocations.length; i++) {
    let storeLocation = storeLocations[i];
    let locationCity = `${storeLocation.location}`;
    // console.log(locationCity);
    for (let i = 0; i < storeHours.length; i++) {
      let storeHour = storeHours[i];
      // console.log(storeHour);
      let randCustomer = Math.round(
        location.minCust + Math.random() * (location.maxCust - location.minCust)
      );
      // console.log(randCustomer);
      let randAvg = Math.round(randCustomer * location.avgCookies);
      // console.log(randAvg);
      let storeSales = `${storeHour} ${randAvg} cookies`;
      // console.log(storeSales);
    }
  }
}
locationSales(storeLocations[0]);

for (let i = 0; i < storeLocations.length; i++) {
  let storeLocation = storeLocations[i];
  // console.log(storeLocation);
  let cityLi = document.createElement('li');
  cityLi.innerText = `${storeLocation.location}`;
  document.getElementById('city').appendChild(cityLi);
}

// function render(city) {
//   let outerUl = document.createElement('ul');
//   outerUl.innerText = `${storeLocations.location}`;
//   console.log(outerUl);
  
  // let hourLi = document.createElement('li');
  // hourLi.innerText = 'City';
  // outerUl.appendChild(hourLi);

  // document.body.appendChild(outerUl);
// }
// render(storeLocations[0]);

