"use strict";

// ======================= IF STATEMENTS

/*

     if (condition) {
        action; // only runs if condition true
     }

*/


// if () {
//     console.log("Condition is true");
// }




// is this a comparison???












// ======================= TRUTHY FALSY VALUES

/*

    JavaScript values are inherently "truthy" or "falsy".

    The following values evaluate to false:
        1) false
        2) 0 (zero)
        3) "" (empty string)
        4) null
        5) undefined
        6) NaN (a special Number value meaning Not-a-Number!)

*/

// ======================= OPERATORS

/*

    Comparison operators

    ==	  ----   equal to (value)
    ===	  ----   equal to (type and value)
    !=	  ----   not equal to (value)
    !==	  ----   not equal to (type and value)
    >	  ----   greater than
    <	  ----   less than
    >=	  ----   greater than or equal to
    <=	  ----   less than or equal to

*/


// if (3 > 1) {
//     console.log("Condition is true");
// }





// ======================= IF STATEMENT WITH ELSE

/*

     if (condition) {
         action; // runs if condition true
     } else {
         action; // runs if condition false
     }

*/


// var x = 0;
//
// if (x === 0) {
//     console.log("x is 0");
// } else {
//     console.log("x is not 0");
// }









// ======================= IF STATEMENTS WITH ELSE IF

/*

    if (condition1) {
        action; // runs if condition true
    } else if (condition2) {
        action; // runs if condition 1 is false and condition 2 is true
    } else {
        action; // runs if condition 1 and condition 2 are false
    }

*/

// var name = "Blah";
//
// if (name === "Ron" || name === "Fred") {
//     console.log("Hello, Ron or Fred!");
// } else if (name === "Albert") {
//     console.log("Howdy, Albert!");
// } else {
//     console.log("Hello, human!");
// }





// ======================= TERNARY OPERATORS

// use when only one condition is being evaluated and may be only true or false

/*

     (condition) ? returnValueIfTrue : returnValueIfFalse

*/


var someNumber = 10;
// var output = 0;
//
// if (someNumber === 9) {
//     output = 9;
// } else {
//     output = "someNumber is not 9";
// }

// var output = (someNumber === 9) ? 9 : "someNumber is not 9";
//
//
// console.log(output);





// ======================= SWITCH STATEMENTS

// use a switch statement if a single condition may have multiple possible values

/*

    switch(condition) {

        case someOutput1:
            ...do something;
            break;
        case someOutput2:
            ...do something;
            break;
        (can continue to add cases)
        default:
            this will happen if no other case values match the switch condition value;

    }

*/





var bondFilm = "Thunderball";

// if (bondFilm == "Dr. No") {
//     console.log("Fantastic!");
// } else if (bondFilm == "From Russia With Love") {
//     console.log("Exploding barrels!");
// } else if (bondFilm == "Goldfinger") {
//     console.log("\"I expect you to die, Mr. Bond.\"");
// } else if (bondFilm == "Thunderball") {
//     console.log("Kinda long.");
// } else if (bondFilm == "You Only Live Twice") {
//     console.log("One of the better theme songs.");
// } else {
//     console.log("That's not one of the first five Bond films.");
// }

// refactor
switch(bondFilm) {

    case "Dr. No":
        console.log("Fantastic");
        break;

    case "From Russia With Love":
        console.log("Exploding barrels!");
        break;

    case "Goldfinger":
        console.log("\"I expect you to die, Mr. Bond.\"");
        break;

    case "Thunderball":
        console.log("Kinda long.");
        break;

    case "You Only Live Twice":
        console.log("One of the better theme songs.");
        break;

    default:
        console.log("That's not one of the first five Bond films.");

}
