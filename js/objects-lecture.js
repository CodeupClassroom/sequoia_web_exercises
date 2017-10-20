/**
 * Objects we know: (everything!)
 *
 * We've been using properties and methods
 *
 * Accessing properties on an object
 *
 * Object literals
 *   - curriculum car example
 *   - accessing properties
 *   - setting properties
 *     - we can "create" properties -- implies empty object creation + setting
 *                                     properties
 *
 * Complex Data Structures
 * - GHET Example
 * - JSON example - https://api.github.com/users/gocodeup/repos
 * - curriculum example
 *
 * Methods + `this`
 *
 * Intro exercise + Math exercise
 */

// property: a variable that belongs to an object
// method: a property that is a function

// // string literal
// "This is a string literal"

// // number literal
// 123

// // array literal
// [1, 2, 3]

// // object literal
// var car2 = {
//   make: "Honda",
//   model: "Accord",
// };

// // same as
// var car1 = {};
// // setting a new value for an object's property
// car1.make = "Honda";
// car1.model = "Accord";

// // defining properties and values with object literal syntax

// // car1 and car2 have the same properties, and each property has the same value

// // defining properties and values with object literal syntax
// var car1 = {
//   year: 2015,
//   owner: {
//     name: "John Doe"
//   },
//   make: "Honda",
//   model: "Accord",
//   isBrandNew: false
// };

// var car2 = {};
// car2.year = 2015;
// car2.make = "Honda";
// car2.model = "Accord";
// car2.isBrandNew = false;
// car2.owner = {};
// car2.owner.name = "John Doe";
// // car2.owner = {name: "John Doe"};

// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];

// // log the make and model of the first car
// console.log("Car #1 - make: " + cars[0].make + " model: " + cars[0].model)
// // log the owner of the second car (name and age)
// console.log('Name: ' + cars[1].owner.name + ' age: ' + cars[1].owner.age)

// // log information about each car
// cars.forEach(function(car) {
//   console.log('Make: ' + car.make + ' - Model: ' + car.model)
//   console.log('Owner: ' + car.owner.name);
//   car.features.forEach(function(feature) {
//     console.log('  - ' + feature);
//   });
//   console.log('----------------------------------------')
// });


var car = {
  make: 'Honda',
  model: 'Civic',
  honk: function(honkRealLoudLike) {
    if (honkRealLoudLike) {
      alert('HOOOOOOOOOOOOOOOOOONK!');
    } else {
      alert('beep, beep!');
    }
  },
  getInfo: function() {
    // return the make and model of this car
    return 'make: ' + this.make + ' | model: ' + this.model;
  }
}

var car2 = {
  make: 'Toyota',
  model: 'Camry',
  honk: function(honkRealLoudLike) {
    if (honkRealLoudLike) {
      alert('HOOOOOOOOOOOOOOOOOONK!');
    } else {
      alert('beep, beep!');
    }
  },
  getInfo: function() {
    // return the make and model of this car
    return 'make: ' + this.make + ' | model: ' + this.model;
  }
}



















// // This is what some data from amazon might look like
// var results = [
//   {
//     name: 'Apple 15" MacBook Pro, Retina, Touch Bar, 2.9GHz Intel Core i7 Quad Core, 16GB RAM, 512GB SSD, Space Gray, MPTT2LL/A (Newest Version)',
//     price: 2599.00,
//     starAverage: 4,
//     reviews: [
//       {stars: 5, text: 'This is great'},
//       {stars: 2, text: 'Why did yall remove all the ports?'}
//     ]
//   }
// ];
