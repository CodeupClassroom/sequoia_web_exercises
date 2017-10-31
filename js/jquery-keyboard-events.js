'use strict';

/**
 * `.on` - we've been looking at the shorthand methods
 *   - refactor click listeners
 *
 *  $(selector).on('eventname', function() {  })
 *
 * `.off` - remove event listeners
 *
 * `.keydown`
 * `.keypress`
 * `.keyup`
 *
 * - just choose one of the above
 */

$(document).ready(function() {
    $('p').on('click', function(e) {
        $(this).css('font-size', '28px');
        // // remove any and all click listeners
        // $('p').off('click');

        // // remove all event listeners
        // $('p').off();

    })

    // $('li').on('dblclick', function(e) {
    //     $(e.target).css('background', 'yellow');
    //     $(e.target).css('color', 'pink');
    // })

    // Keyboard Events

    // $('#my-input').keydown(function() {
    //     console.log('A key was pressed!');
    // })

    // $('#my-input').keyup(function() {
    //     console.log('A key was pressed!');
    // })

    $('#my-input').keypress(function() {
        console.log('A key was pressed!');
    })

    $('#my-input').keyup(function(e) {
        e.preventDefault();
        $('#output').html(e.keyCode);
    });


});
