'use strict';

$(document).ready(function() {
    // ##################################################
    // Adding an event listener to a single element with an id
    // function onParagraphClick() {
    //     this.style.backgroundColor = 'yellow';
    // }
    // // Vanilla JS
    // var paragraph = document.getElementById('codeup');
    // paragraph.addEventListener('click', onParagraphClick);
    // // add an event listener with jquery
    // $('#codeup').click(onParagraphClick);

    // ##################################################
    // add an event listener to multiple elements

    // function handleParagraphClick(e) {
    //     var theElementThatWasClicked = this;
    //     theElementThatWasClicked.style.backgroundColor = 'yellow';
    // }

    // // Vanilla JS
    // var paragraphs = document.getElementsByTagName('p');
    // for (var i = 0; i < paragraphs.length; i++) {
    //     paragraphs[i].addEventListener('click', handleParagraphClick);
    // }

    // // jquery
    // $('p').click(handleParagraphClick);

    // ##################################################

    // // double click event
    // $('h2').dblclick(function() {
    //     alert('You double clicked an h2!');
    //     var theElementThatWasClicked = this;
    //     theElementThatWasClicked.style.backgroundColor = 'yellow';
    // })

    // ##################################################
    // hover

    // two callback functions, begin hovering, when we stop hovering

    // function startHover() {
    //     alert('you started hovering')
    // }

    // function stopHover() {
    //     alert('you stopped hovering')
    // }

    // $('h1').hover(startHover, stopHover);

    // Summary
    // $(selector).click(eventHandlerFunction)

    // ###################
    // # Exercise Review #
    // ###################

    // Add jQuery code that will change the background color of a h1 element
    // when clicked.

    // when an h1 is clicked
    $('h1').click(function() {
        // change the background color
        $('h1').css('background-color', 'firebrick');
    })

    // Make all paragraphs have a font size of 18px when they are double
    // clicked.

    // when a paragraph is double clicked
    $('p').dblclick(function() {
        // change the font size to 18px
        // this.style.fontSize = '28px';
        // this.css('font-size', '28px'); // DONT DO THIS
        $(this).css('font-size', '28px');
    })

    // Set all li text color to red when the mouse is hovering, reset to black
    // when it is not.

    // when I hover over an li
        // change the font color to red
    // when I stop hovering
        // change the font color to black
    $('li').hover(function() {
        $(this).css('color', '#f00');
    }, function() {
        $(this).css('color', 'black');
    })

});
