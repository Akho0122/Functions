'use strict';

// const bookings = [];

// const createBooking = function (flightNum = 0, numPassengers = 1, price = 1) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('LH123');
// createBooking('LH123', 3, 800);

// const flight = 'LH123';
// const jonas = {
//   name: 'John Smith',
//   password: 1234567654,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.password === 1234567654) {
//     alert('Checked In');
//   } else {
//     alert('Wrong Passport');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.password = Math.trunc(Math.random() * 1000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const high5 = function () {
//   console.log('HI');
// };
// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Heelo')('Jonas');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('HI')('Akho');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};
lufthansa.book('239', 'Jonas Schmedtmann');
lufthansa.book(432, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
const book = lufthansa.book;
// book(23, 'Sarah Wiliams');
book.call(eurowings, 23, 'Sarah Wiliams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
book.call(swiss, 777, 'Akho 0122');

const flightData = [555, 'George Cooper'];
book.apply(swiss, flightData);
book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(222, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Akho0122');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(200));

const addVAT2 = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
// const addTaxRate = addVAT2(0.23);
// console.log(addTaxRate(200));
// console.log(addTaxRate(23));
console.log(addVAT2(0.1)(100));
