"use strict";

// Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication table for that number (
// just multiply by the numbers 1 through 10)
//
// For example, showMultiplicationTable(7) should output
//
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

function showMultiplicationTable(number) {

    for(var i = 1; i <= 10; i+=1) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}

showMultiplicationTable(7);


// Use a for loop and the code from the previous lessons to
// generate 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even.
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
//     ...

// start
// end (after we generate 10 random numbers)
// process each time?
    // generate a random number between 20 and 200.
    // check if that number is odd, and say if it is.
    // else, say it's even.


for(var i = 1; i <= 10; i++) {

    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 == 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd.");
    }
}

