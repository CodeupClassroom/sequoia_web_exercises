'use strict';

/**
 * `.on` - we've been looking at the shorthand methods
 *   - refactor click listeners
 * `.off` - remove event listeners
 *
 * `.keydown`
 * `.keypress`
 * `.keyup`
 *
 * - just choose one of the above
 */

$(document).ready(function() {
    $('p').click(function(e) {
        $(this).css('font-size', '28px');
    })

    $('li').dblclick(function(e) {
        $(e.target).css('background', 'yellow');
        $(e.target).css('color', 'pink');
    })
});
