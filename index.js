// Code your solution in this file!
const companyName = 'Scuber';
let mostProfitableNeighborhood = 'Chelsea';
let companyCeo = 'Susan Smith';

// Define currentUser
const currentUser = 'Grace Hopper';

// Define welcomeMessage
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`; 

// Define excitedWelcomeMessage
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define shortGreeting
const shortGreeting = `Welcome, ${currentUser[0]}!`;

function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    return 'That will be twenty bucks.';
  } else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(destination) {
    return destination === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case 'generous':
            return 'Thank you so much.';
        case 'not as generous':
            return 'Thank you.';
        default:
            return 'Bye.';
    }
}

// Variables for multiply
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2; 

// Variable for random
const random = Math.floor(Math.random() * 100) + 1;

// Variables for mod
const num3 = 28;
const num4 = 6;
const mod = num3 % num4; 

// Variable for max
const max = Math.max(10, 15, 20, 5); 

// Function 1: distanceFromHqInBlocks
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42; 
    return Math.abs(pickupLocation - hqLocation); 
}

// Function 2: distanceFromHqInFeet
function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    return blocks * 264; 
}

// Function 3: distanceTravelledInFeet
function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264; 
}

// Function 4: calculatesFarePrice
function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock); 

    if (distance <= 400) {
        return 0; 
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02; 
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'; 
    }
}

// Function 5: saturdayFun
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

// Function 6: mondayWork
function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

// Function 7: wrapAdjective
function wrapAdjective(flair = '*') {
  return function (adjective = 'special') {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
// Deliverable 1: returnFirstTwoDrivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Deliverable 2: returnLastTwoDrivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Deliverable 3: selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Deliverable 4: createFareMultiplier
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Deliverable 5: fareDoubler
const fareDoubler = createFareMultiplier(2);

// Deliverable 6: fareTripler
const fareTripler = createFareMultiplier(3);

// Deliverable 7: selectDifferentDrivers
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
// Task 1: Declare a variable in global scope called customerName using the var keyword and assign it the value 'bob'.
var customerName = 'bob';

// Task 2: Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Task 3: Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; // This will create a global variable `bestCustomer`
}

// Task 4: Write a new function called overwriteBestCustomer() that changes that bestCustomer variable to 'maybe bob'.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Task 5: Declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
const leastFavoriteCustomer = 'Alice';

// Task 6: Write a function called changeLeastFavoriteCustomer() that attempts to change that constant.
function changeLeastFavoriteCustomer() {
 
  leastFavoriteCustomer = 'Bob'; 
}