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
  } else if (distance > 2000 && distance < 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
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
const mod = num3 % num4; // mod = 4

// Variable for max
const max = Math.max(10, 15, 20, 5); 