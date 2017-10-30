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

    function handleParagraphClick(e) {
        var theElementThatWasClicked = this;
        theElementThatWasClicked.style.backgroundColor = 'yellow';
    }

    // // Vanilla JS
    // var paragraphs = document.getElementsByTagName('p');
    // for (var i = 0; i < paragraphs.length; i++) {
    //     paragraphs[i].addEventListener('click', handleParagraphClick);
    // }

    // jquery
    $('p').click(handleParagraphClick);

    // ##################################################

    $('h2').dblclick(function() {
        alert('You double clicked an h2!');
        var theElementThatWasClicked = this;
        theElementThatWasClicked.style.backgroundColor = 'yellow';
    })

    // ##################################################
    // hover

    // two callback functions, begin hovering, when we stop hovering

    function startHover() {
        alert('you started hovering')
    }

    function stopHover() {
        alert('you stopped hovering')
    }

    $('h1').hover(startHover, stopHover);

    // Summary
    // $(selector).click(eventHandlerFunction)

});
