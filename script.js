'use strict';

const bookings = [];

const createBooking = function (flightNum = 0, numPassengers = 1, price = 1) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 3, 800);

const flight = 'LH123';
const jonas = {
  name: 'John Smith',
  password: 1234567654,
};
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.password === 1234567654) {
    alert('Checked In');
  } else {
    alert('Wrong Passport');
  }
};
checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.password = Math.trunc(Math.random() * 1000000000);
};
newPassport(jonas);
checkIn(flight, jonas);
