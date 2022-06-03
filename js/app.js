'use strict';

let hours = [
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

let tableElem = document.getElementById('sales-table');

function CookieStand(location, minCust, maxCust, avgCookies) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  CookieStand.all.push(this);
}

CookieStand.all = [];
new CookieStand('Seattle', 23, 65, 6.3);
new CookieStand('Tokyo', 3, 24, 1.2);
new CookieStand('Dubai', 11, 38, 3.7);
new CookieStand('Paris', 20, 38, 2.3);
new CookieStand('Lima', 2, 16, 4.6);

CookieStand.prototype.calcRandCust = function () {
  for (let i = 0; i < hours.length; i++) {
    this.custPerHour.push(
      Math.round(this.minCust + Math.random() * (this.maxCust - this.minCust))
    );
  }
};

CookieStand.prototype.calcRandCookies = function () {
  this.calcRandCust();
  for (let i = 0; i < hours.length; i++) {
    let oneHour = Math.round(this.custPerHour[i] * this.avgCookies);
    this.cookiesPerHour.push(oneHour);
    this.totalCookies += oneHour;
  }
};

CookieStand.prototype.render = function () {
  this.calcRandCookies();
  let rowElem = document.createElement('tr');
  let dataElem = document.createElement('td');
  dataElem.innerText = this.location;
  rowElem.appendChild(dataElem);

  for (let i = 0; i < hours.length; i++) {
    let dataElem = document.createElement('td');
    dataElem.innerText = this.cookiesPerHour[i];
    rowElem.appendChild(dataElem);
  }
  let totalHeader = document.createElement('th');
  totalHeader.innerText = this.totalCookies;
  rowElem.appendChild(totalHeader);
  tableElem.appendChild(rowElem);
};

function headerRow() {
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.innerText = '';
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement('th');
    tableHeader.innerText = hours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.innerText = 'Daily Total';
  tableRow.appendChild(tableHeader);
  tableElem.appendChild(tableRow);
}

function footerRow() {
  let tableRow = document.createElement('tr');
  let tableHeader = document.createElement('th');
  tableHeader.innerText = 'Totals';
  tableRow.appendChild(tableHeader);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < CookieStand.all.length; j++) {
      hourlyTotal += CookieStand.all[j].cookiesPerHour[i];
      grandTotal += CookieStand.all[j].cookiesPerHour[i];
    }
    tableHeader = document.createElement('th');
    tableHeader.innerText = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement('th');
  tableHeader.innerText = grandTotal;
  tableRow.appendChild(tableHeader);
  tableElem.appendChild(tableRow);
}

function renderContent() {
  headerRow();
  for (let i = 0; i < CookieStand.all.length; i++) {
    CookieStand.all[i].render();
  }
  footerRow();
}
renderContent();

// LAB_06

// let storeHours = [
//   '6am:',
//   '7am:',
//   '8am:',
//   '9am:',
//   '10am:',
//   '11am:',
//   '12pm:',
//   '1pm:',
//   '2pm:',
//   '3pm:',
//   '4pm:',
//   '5pm:',
//   '6pm:',
//   '7pm:',
//   '8pm:',
// ];

// let storeLocations = [
//   {
//     location: 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     avgCookies: 6.3,
//     totalCookies: 0,
//   },
//   {
//     location: 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     avgCookies: 1.2,
//     totalCookies: 0,
//   },
//   {
//     location: 'Dubai',
//     minCust: 11,
//     maxCust: 38,
//     avgCookies: 3.7,
//     totalCookies: 0,
//   },
//   {
//     location: 'Paris',
//     minCust: 20,
//     maxCust: 38,
//     avgCookies: 2.3,
//     totalCookies: 0,
//   },
//   {
//     location: 'Lima',
//     minCust: 2,
//     maxCust: 16,
//     avgCookies: 4.6,
//     totalCookies: 0,
//   },
// ];

// function locationSales(location) {
//   for (let i = 0; i < storeLocations.length; i++) {
//     let storeLocation = storeLocations[i];

//     let cityUl = document.createElement('ul');
//     cityUl.innerText = `${storeLocation.location}`;
//     document.getElementById('city').appendChild(cityUl);

//     for (let j = 0; j < storeHours.length; j++) {
//       let storeHour = storeHours[j];
//       // console.log(storeHour);
//       let randCustomer = Math.round(
//         location.minCust + Math.random() * (location.maxCust - location.minCust)
//       );
//       // console.log(randCustomer);
//       let randAvg = Math.round(randCustomer * location.avgCookies);
//       storeLocation.totalCookies += randAvg;
//       // console.log(randAvg);
//       let storeSales = `${storeHour} ${randAvg} cookies`;
//       // console.log(storeSales);

//       let salesLi = document.createElement('li');
//       salesLi.innerText = `${storeSales}`;
//       document.getElementById('city').appendChild(salesLi);
//     }
//     let locationTotal = document.createElement('li');
//     locationTotal.innerText = `Total: ${storeLocation.totalCookies} cookies`;
//     document.getElementById('city').appendChild(locationTotal);
//   }
// }
// locationSales(storeLocations[0]);

// TESTS

// MATH RANDOM REFERENCE
// function randNumber(min, max) {
//   return Math.floor(min + Math.random() * (max - min));
// }
// console.log(randNumber(23, 65));

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
