/**
 * Use a:
 * - while loop: do something an unknown number of times
 *   - do-while: if the thing needs to happen *at least* once
 * - for loop: when you want to loop a known number of times
 *
 * Break + Contiue:
 *
 * - break: prematurely stop a loop
 * - continue: skip a loop iteration
 */

// var i = 0;

// while (i < 5) {
//     i += 1;
//     console.log(i);
// }

// // output:
// // 1
// // 2
// // 3
// // 4
// // 5

// function isNumeric(someNumber) {
//     return ! isNaN(someNumber);
// }

// console.log('Start!')

// var i = 10;

// var usersNumber = prompt('Enter a number:');

// while (! isNumeric(usersNumber) || usersNumber === "") {
//     alert('Hey! You can\'t do that!');
//     usersNumber = prompt('Enter a number:');
// }

// console.log(parseInt(usersNumber) + 10);

// console.log('Done!')

// --------------------------------------------------

// function isNumeric(someNumber) {
//     return ! isNaN(someNumber);
// }

// console.log('Start!')

// var usersNumber;

// do {
//     usersNumber = prompt('Enter a number:');
// } while (! isNumeric(usersNumber) || usersNumber === "")

// console.log(parseInt(usersNumber) + 10);

// console.log('Done!')

// --------------------------------------------------

// var i = 0;

// while (i <= 5) {
//     console.log(i);
//     i += 1;
// }

// // is same as

// for (var i = 0; i <= 5; i += 1) {
//     console.log(i);
// }

// for (/*initialization*/; /*condition*/; /*increment*/) {
//     // body
// }

// --------------------------------------------------

// // Write a while loop that counts from 10 to 1
// var n = 10;
// while (n >= 1) {
//     console.log(n);
//     n -= 1; // n-- OR --n
// }
// console.log('Blastoff!');

// for (var n = 10; n >= 1; n -= 1) {
//     console.log(n);
// }
// console.log('Blastoff!');

// --------------------------------------------------

// stop after i hits 10
for (var i = 0; i < 100; i += 1) {
    console.log(i);
    if (i === 10) {
        break;
    }
}

// skip the numbers between 10 and 90
for (var i = 0; i < 100; i += 1) {
    if (i > 10 && i < 90) {
        continue;
    }
    console.log(i);
}

// print out the odd numbers
for (var i = 0; i < 100; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
