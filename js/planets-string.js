(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    var planetsWithBreaks = planetsArray.join("<br>");

    // console.log(planetsWithBreaks);

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // Using join

     // Expected output...
     // <ul><li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li></ul>

    var planetsListHTML = "<ul><li>";
    var innerPlanetHTML = planetsArray.join("</li><li>");
    var endingPlanetListHTML = "</li></ul>";

    planetsListHTML += innerPlanetHTML + endingPlanetListHTML;

    console.log(planetsListHTML);


    // Adding the html to the body of the page to test it
    document.getElementsByTagName('body')[0].innerHTML = planetsListHTML;


    // Using a loop
    //     var planetsHTML = '<ul>';
    //
    //     planetsArray.forEach(function(planet) {
    //         planetsHTML += '<li>' + planet + '</li>';
    //     });
    //
    //     planetsHTML += '</ul>';


})();