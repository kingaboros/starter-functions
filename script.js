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


//////////// Functions returning functions ////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas'); // we can also do these together

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeter = greetArr('Good evening');
greeter('John');
greetArr('Evening')('Mary'); // we can also do these together


///////////// The call and apply methods /////////////

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
  
  lufthansa.book(235, 'Jonas Doe');
  lufthansa.book(600, 'Kinga Boros');
  console.log(lufthansa);
  
  const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
  };
  
  const book = lufthansa.book;
  
  // book(23, 'Sarah Williams'); // this book function is no longer the method from line 139, it is the separate function from line 157(a copy of lufthansa.book, but it's not a method anymore)
  
  // Call method - we must tell JS where this keyword should point
  book.call(eurowings, 23, 'Sarah Williams');
  console.log(eurowings);
  
  book.call(lufthansa, 239, 'Mary Cooper');
  
  // Apply method
  
  const flightData = [583, 'George Cooper'];
  
  book.apply(eurowings, flightData);
  
  book.call(lufthansa, ...flightData);
  console.log(lufthansa);
  
  // Bind method
  
  const bookEW = book.bind(eurowings);
  const bookLH = book.bind(lufthansa);
  
  bookEW(34, 'Steven Williams');
  bookLH(34, 'Steven Williams');
  console.log(eurowings, lufthansa);
  
  //partial application
  const bookEW23 = book.bind(eurowings, 23);
  bookEW23('Kinga Boros');
  bookEW23('Martha Cooper');
  
  // using object with event listeners
  
  lufthansa.planes = 300;
  lufthansa.buyPlane = function () {
    console.log(this); // returns NaN because it's actually the button element, therefore is not a number
    this.planes++;
    console.log(this.planes);
  };
  
  // lufthansa.buyPlane();
  
  document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); // we must add bind here for this to point to the lufthansa object.
  
  // Partial application example
  
  const addTax = (rate, value) => value + value * rate;
  console.log(addTax(0.1, 200));
  
  const addVAT = addTax.bind(null, 0.23); // we add null, because in this case we don't care about this keyword - is not even present in the addTax function
  
  // addVAT= (value) => value + value * 0.23;
  
  console.log(addVAT(100));
  console.log(addVAT(20));
  
  // Challenge - addTax function with functions returning another function
  
  const addTax2 = function (rate) {
    return function (value) {
      return value + value * rate;
    };
  };
  
  const addVAT2 = addTax2(0.23);
  
  console.log(addVAT2(100));
  console.log(addVAT2(23));
  
  */

/////////////////////////////// Challenge 1 //////////////////////

/*
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.

Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉



const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3:
  C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
}

////// Immediately invoked function expression (IIFE)

const runOnce = function () {
  console.log('This will never run again');
};

// runOnce();

//this is how we write an IIFE

(function () {
  console.log('This will never run again');
  const isPrivate = 23; // inner scope
})();

// console.log(isPrivate); // it won't work because it's insite fe IIFE

(() => console.log('This will never run again'))();

{
  const isPrivate = 23; // this one wouldn't be accessible from the Global scope
  var notPrivate = 46; // variables created with var are accessible on a Global scope in this case
}

// console.log(isPrivate);
console.log(notPrivate);



//////// Closures /////////

const secureBooking = function () {
  let passagengerCount = 0;
  
  return function () {
    passagengerCount++;
    console.log(`${passagengerCount} passangers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// console.dir(booker);


// more closure examples

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

*/
