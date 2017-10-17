"use strict";

// while()
// where do we start?
// where do we finish?
// what happens on each line?

var number = 2;

do {
    console.log(number);

    number = number * 2;

} while(number <= 65536);


// An ice cream seller can't go home until she sells all of her cones.
// Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell.
// Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients.
// Use a do-while loop to log to the console the amount of cones sold to each person.

// Step 1. what is the starting state of things?
    // we start with var allCones = Math.floor(Math.random() * 50) + 50;
    // this is your starting inventory. you get to go home when you sell all of it.

// Step 2. use a random number generator to get how many cones the next customer wants.
// var conesOrdered = Math.floor(Math.random() * 5) + 1;
// Step 3. Check to see if you have enough cones for that order.
// If so, sell the customer the number of cones they ordered and output to the console..
// If NOT, say sorry, next customer please.

// Step 4. Go to Step 2.

// Get our initial inventory of cones to sell.
var allCones = Math.floor(Math.random() * 50) + 50;

console.log("Starting inventory is " + allCones + " number of cones.");

do {
    // Customer orders 1-5 cones(random number between 1 and 5)
    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if(conesOrdered <= allCones) {
        console.log("The customer ordered " + conesOrdered + " number of cones.");
        allCones = allCones - conesOrdered;
        console.log("I sold " + conesOrdered + " number of cones.");
        console.log("My inventory is " + allCones);
    } else {
        console.log("next customer, please.");
    }

} while(allCones > 0);

console.log("YAY, I get to go home b/c I sold all of my cones.");

