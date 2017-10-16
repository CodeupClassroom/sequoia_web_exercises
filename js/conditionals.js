"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var userWantsToEnterANumber = confirm("Would you like to enter a number?");

if(userWantsToEnterANumber) {
    // get the number from the user and store it in a variable
    // check if that input is a number
    // if it is a number,
    var input = prompt("Yo, please enter a number!");

    // not not a number == number
    if(isNumeric(input)) {

        if(isEven(input)) {
            alert("EVEN!");
        } else {
            alert("ODD!");
        }

        alert("Your number plus 100 is " + (parseFloat(input)) + 100);

        if(isNegative(input)) {
            alert("Your input is negative");
        } else if(isPositive(input)) {
            alert("Your input is positive");
        } else {
            alert("Your input is neither negative nor positive (0)");
        }

    } else {
        alert("You did not input a number!");
    }

}


// determine if an input is a number
function isNumeric(input) {
    return !isNaN(input);
}

// determine if a number is negative
function isNegative(input) {
    return input < 0;
}

// determine if a number is positive
function isPositive(input) {
    return input > 0;
}

// determine if a number is even
function isEven(input) {
    return parseFloat(input) % 2 === 0;
}

// determine if a number is odd ...
function isOdd(input) {
    // I can't even...
    return !isEven(input);
}





/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(input) {
    var message = "";

    input = input.toLowerCase();

    if (input === "blue") {
        message = "Blue is the color of the ocean.";
    } else if (input === "yellow") {
        message = "Yellow is meh.";
    } else if (input === "purple") {
        message = "Purple is Barney.";
    } else {
        message = "Not sure about that color.";
    }

    return message;
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("Purple"));
console.log(analyzeColor("red"));









// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

console.log(randomColor);
console.log(analyzeColor(randomColor));







/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

// function analyzeColor(input) {
//     var message = "";
//
//     input = input.toLowerCase();
//
//     switch (input) {
//         case "blue":
//             message = "Blue is the color of the ocean.";
//             break;
//         case "yellow":
//             message = "Yellow is meh.";
//             break;
//         case "purple":
//             message = "Purple is Barney.";
//             break;
//         default:
//             message = "Not sure about that color.";
//     }
//
//     return message;
// }

console.log(randomColor);
console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userChoice = prompt("Please pick a color!");

alert(analyzeColor(userChoice));


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {

    // could declare multiple variable with the following syntax...
    // var discountPercentage, finalOutput;

    var discountPercentage;
    var finalOutput;

    if (luckyNumber < 0 || luckyNumber > 5) {
        return "Invalid lucky number given!";
    }

    discountPercentage = calculatePercentage(luckyNumber);
    finalOutput = total - (total * discountPercentage);

    return finalOutput;

}

function calculatePercentage(num) {

    var discountPercentage;

    switch(num) {
        case 0:
            discountPercentage = 0;
            break;
        case 1:
            discountPercentage = .1;
            break;
        case 2:
            discountPercentage = .25;
            break;
        case 3:
            discountPercentage = .35;
            break;
        case 4:
            discountPercentage = .5;
            break;
        case 5:
            discountPercentage = 1;
            break;
    }

    return discountPercentage;
}


console.log(calculateTotal(2, 100)); // returns 100
console.log(calculateTotal(4, 100)); // returns 50
console.log(calculateTotal(5, 100)); // returns 0



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
var totalBill = prompt("Please enter your total bill.");



alert("Your lucky number is: " + luckyNumber);
alert("Your total bill before the discount is: " + totalBill);
alert("Price after discount applied is: " + calculateTotal(luckyNumber, totalBill));

