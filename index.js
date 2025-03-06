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