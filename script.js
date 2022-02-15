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

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('HI');
};
document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
