const $ = require("jquery");
const math = require('./math.js');

const sayHello = (name = "World") => {
    return `Hello ${name}!`;
};

$("main").html(`<h1>${sayHello()}</h1>`);

console.log("2 added to 5 is " + math.add(2, 5));