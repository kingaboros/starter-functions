'use strict';

///////// DEFAULT VALUES /////////

//booking function showcasing default values

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

///////// HOW PASSING ARGUMENTS WORK: VALUE VS REFERENCE///////

const flight = 'LH123'; // this is a primitive type,
const kinga = {
  name: 'Kinga Boros',
  passport: 2143205309856709,
};

const checkIn = function (flightNumber, passenger) {
  // flightNumber here is just a copy of the original value

  flightNumber = 'LH999'; // this variable is a different number, so it didn't change, because it was already defined outside of the function
  
  passenger.name = 'Mrs. ' + passenger.name; // because they are the same object in the memory heap
  
  if (passenger.passport === 2143205309856709) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, kinga);

// console.log(flight);
// console.log(kinga);

// Is the same as doing...
// const flightNumber = flight;
// const passenger = kinga;

// demonstrating a real life problem - we have the same object manipulated in 2 different functions

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(kinga);
checkIn(flight, kinga);

*/

/////////// Functions accepting callback functions ////

const oneWord = function (str) {
  return str.replaceAll(' ', '');
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//higher-order function starts here:

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//JS uses callbacks all the time

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Marha', 'Adam'].forEach(high5); // callback function again
