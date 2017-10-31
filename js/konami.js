'use strict';

// When the konami code is entered, alert a message
//
// What is the konami code? a sequence of keypresses
//  - array of keypresses (keycodes)
//  - inside my keyup, console.log the keycodes for the konami code

// When the user pushes the keys in sequence that correspond to the konami code,
// alert
// Whenever a key is pressed, check if that kepress is in the konami code
// - check the keypresses in sequence
// - some way to track where I am in the konami code array, and variable to
//   represent our index

// When a key is pressed, what do we need to do?
// - check if the key pressed is "correct"
//  - if it's correct, move on to the next key
//  - else, "reset"
// check and see if we're finished

$(document).ready(function() {

    // This code runs whenever a key is pressed
    $(document).keyup(function(e) {

    });

});
