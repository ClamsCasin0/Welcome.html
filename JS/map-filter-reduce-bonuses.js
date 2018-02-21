"use strict";

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// PROBLEM 1 - create an array of the first letters of each fruit

const newFruitArray = fruits.map((name) => {
        return name.charAt(0);
});

console.log(newFruitArray);

//            PROBLEM 1 HINT - use .map()

// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
//            PROBLEM 2 HINT - use .map()
//  what the => is replacing--- customers.map(function(name, age) {
const customerArray = customers.map(({ name, age }) => {
    return {
        name,
        age
    };
});

console.log(customerArray)





// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// containing the same properties as the objects on the customers objects
//            PROBLEM 3 HINT - use .filter()
const civilServants = customers.filter(({ occupation }) => {
    return occupation == "Teacher" || occupation == "Police Officer";

});
console.log(civilServants);


// PROBLEM 4 - determine the average age of customers
const custAverAge =



//            PROBLEM 4 HINT - use .reduce()




// Given the following array...
const names = ["John", "Max", "Ronald"];
// complete the bonuses below...
// - Create an array where all names are given a last name of Smith.
// - Create an array where each word is in all caps
// - Create an array where all names have more than 3 letters
// - Create an array of names with only the last two letters of each name
// - Create a total count of all letters
// - Create a string of all letters in alphabetical order
// - Create an array of word objects with properties of wordLength, firstLetter, lastLetter
// - Create a string of all vowels in the entire array of names

// - Create a single object with properties






// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
const familyAverAge = family.reduce((accumulator, person) => {
    accumulator += person.age;
    return accumulator;
}, 0) / family.length;

console.log(familyAverAge);

// - Create an array of family objects without the age property
// - Create an array of all minors
let minors =  family.filter(({ age }) => {
    return age < 18;
});
console.log(minors);
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
let femFamily = family.filter(({ gender }) => {
    return gender === "female";
});

// - Create a single object with properties containing arrays of all names, genders, and ages

// var output = {
//     "names": ["Bob", "Summer", "Karen"],
//     "genders": ["male", "female"],
//     "age": [29, 10, 32]
// };

const output = family.reduce((accumulator, person) => {
    //check my "base case"
    if(typeof accumulator.names === "undefined") {
        accumulator.names = [];
    }

    if(typeof accumulator.ages === "undefined") {
        accumulator.ages = [];
    }

    if(typeof accumulator.genders === "undefined") {
        accumulator.genders = [];
    }

    accumulator.names.push(person.name);
    accumulator.ages.push(person.age);
    accumulator.genders.push(person.gender);

    return accumulator;
}, {});

console.log(output);


// Map, Filter, Reduce exercise
//
// ## Source Data
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_1.json">Mock Data Batch 1</a>
//
// <a href="https://cdn.glitch.com/e6f06897-3ddf-49ac-a418-976be76cc6fc%2Fmock_data_batch_2.json?1519228215291">Mock Data Batch 2</a>
//
// ## Exercises
// Make a page called functional_exercises.html
// Save both .json files into your project's ./data/ folder
//
// Use an ajax GET request to read the contents of both .json files.
//
// 1. Combine both arrays of objects into a single array. Name that variable users.
//
// 1. Use .reduce to get a sum total of every price from each object. Call that sum "totalPrices"
//
// 2. Use the users array and .reduce to determine how many shirts of each size we'll need to get. Example output should looks something like the following (numbers aren't exact)
//
// {
//     "S": 200,
//     "M": 892,
//     "L": 290,
//     "XL": 442
// }
//
// 2. Produce a new array of objects w/ only the car info. Call this array allCars. Each object should only have the make, model, color, price, used properties
//
// 3. Produce a single object called car_data w/ the following properties
// - `avg_price`, `avg_new_price`, `avg_used_price`, `top_make`, `top_model`, `total_number`, `number_used`, `number_new`, `highest_price`, `lowest_price`
//
// 4. Make an array called admins that contains only users who are admins
//
// 5. Make an array called authors that contains only users who are authors
//
//
// 1. Make an object called departments. That departments object should have a property for each department name. The value for each department name should be an array of user objects containing firstName, lastName, department, email, and buzzword
//
// {
//     "legal": [
//     {"first_name": "Jane", "email":"jane@jane.com", "buzzword":"activating motivators!"},
//     {"first_name": "Bob", "email":"bob@bob.com", "buzzword":"telegraphing bankers"}
// ],
//     "marketing": [
//     {"first_name": "Marsha", "email":"marsh@sha256.com", "buzzword":"securing wonder"},
//     {"first_name": "Pat", "email":"itspat@patrocks.com", "buzzword":"whatever works"}
// ],
//     etc ...
// }