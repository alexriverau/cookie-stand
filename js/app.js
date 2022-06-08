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
  let tableRow = document.createElement('tfoot');
  let tableFooter = document.createElement('th');

  tableFooter.innerText = 'Totals';
  tableRow.appendChild(tableFooter);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < CookieStand.all.length; j++) {
      hourlyTotal += CookieStand.all[j].cookiesPerHour[i];
      grandTotal += CookieStand.all[j].cookiesPerHour[i];
    }
    tableFooter = document.createElement('th');
    tableFooter.innerText = hourlyTotal;
    tableRow.appendChild(tableFooter);
  }
  tableFooter = document.createElement('th');
  tableFooter.innerText = grandTotal;
  tableRow.appendChild(tableFooter);
  tableElem.appendChild(tableRow);
}

function onSubmit(event) {
  event.preventDefault();
  let form = event.target;

  let location = form['location'].value;
  let minCust = parseInt(form['min-cust'].value);
  let maxCust = parseInt(form['max-cust'].value);
  let avgCookies = parseInt(form['avg-cookies'].value);

  let newStore = new CookieStand(location, minCust, maxCust, avgCookies);

  CookieStand.all.push(newStore);
  console.log(CookieStand.all);

  newStore.render();
}
document.getElementById('form-new-store').addEventListener('submit', onSubmit);

function renderContent() {
  headerRow();
  for (let i = 0; i < CookieStand.all.length; i++) {
    CookieStand.all[i].render();
  }
  footerRow();
}
renderContent();
