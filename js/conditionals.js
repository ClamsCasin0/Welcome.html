"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
var wantToEnterNumber = confirm("would you like to enter a number?");
if (wantToEnterNumber) {
    var number = prompt("Please enter a number.");
    number = parseFloat(number);

    //check if number is not a number (NaN)
    if(NaN(parseFloat(number))) {
        alert("You have to input a number!");

    } else {


        if(number % 2 == 0) {
            alert(number + " is even.");
        } else {
            alert(number + " is odd.");
        }

        alert(number + " plus 100 is: " + (100 + number);

        if(number < 0) {
            alert(number + " is negative.");
        } else if (number > 0) {
            alert(number + " is positive.");
        } else {
            alert(number + " is neither positive or negative.");
        }
    }
}
// refactor
function isNumeric(input) {
    if (isNaN(parseFloat(input))) {
        return false;
    } else {
        return true;
    }
}

    // function
    // var confirmNumberMessage = confirm("Would you like to enter a number?");
    // var confirmNumber = isNaN;
    //     if (confirm === OK) {
    //     message = "OK, what number would you like to enter";
    //     alert("Is the number even or odd?");
    //     alert("Is the number a negative or positive integer?");
    //     alert("What is the sum of the number plus 100?");
    //     } else {
    //         alert("OK, you do not wish to enter a number");
    //         console.log(confirmNumber(isNaN));
// }

    // if (confirmNumber === isNAN) {
    // alert("Is the number even or odd?");
    // } else if  ( confirmNumber === ) {
    // alert("What is the sum plus 100?");
    // } else if (confirmNumber === ) {
    //     alert("Is the number negative or positive?")
    // } else  (confirmNumber == NaN)
    //     console.log("That is not a number")
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



 function analyzeColor(input) {
     // var analyzeColor = ["blue", "red", "cyan"];
    var message;

    if (input === "blue") {
        message = "blue is the color of the sky";
    } else if (input === "red") {
        message = "Strawberries are red");
    } else if (input === "cyan") {
        message = "I don't know anything about cyan";
    } else {
        message = "That's not a color, but you might have synesthesia!";
    }

    return message;
}
// tests function by console logging
console.log(analyzeColor("red"));
 console.log(analyzeColor("blue"));
 console.log(analyzeColor("green"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor));

// switch (returnRandomColor()) {
//     var randomColor;
//
//     if (randomColor === 'red') {
//         console.log("red is the color of love");
//     } if else (randomColor === 'orange') {
//         console.log("orange is a tasty fruit");
//     } if else (randomColor === 'yellow') {
//         console.log("yellow, 'Cheap, Cheap' went my baby chick, ");
//     } if else (randomColor === 'green') {
//         console.log("green goes ka-ching!");
//     } if else (randomColor === 'blue') {
//         console.log("Is how I feel when I got all these teeth and no toothbrush");
//     } if else (randomColor === 'indigo') {
//         console.log("Is a Hotel in downtown San Antonio");
//     } if else (randomColor === 'violet') {
//         console.log("Is a popular girl's name.");
//     }
//
//     randomColor = (colors()) ?
}
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 *
 */
function analyzeColor(input) {
    var message;

    switch (input) {
    case 'red':
        message = ("red is the color of love");
        break;
    case 'orange':
        message = ("orange is a tasty fruit");
        break;
    case 'yellow':
        message = ("yellow, 'Cheap, Cheap' went my baby chick.");
        break;
    case 'green':
        message = ("green goes ka-ching!");
        break;
    case 'blue':
        message = ("Is how I feel when I got all these teeth and no toothbrush");
        break;
    case 'indigo':
        message = ("Is a Hotel in downtown San Antonio");
        break;
    case 'violet':
        message = ("Is a popular girl's name.");
        break;
        default:
            message = "That is not a known hue." + input;
            break;
}

return message;

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

console.log(analyzeColor(prompt("Let me know what your favorite color is.")));
var userColorChosen = prompt("Tell me your favorite Color.");
var result = analyzeColor(userColorChosen);
console.log(result);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
//kinda worked, but wrong format
    // var luckyNumber = Math.floor(Math.random() * 5);
//         return luckyNumber();
// var luckyNumber
// (0) = 0.0;
// var luckyNumber
// (1) = .1;
// var luckyNumber
// (2) = .2;
// var luckyNumber
// (3) = .35;
// var luckyNumber
// (4) = .5;
// var luckyNumber
// (5) = 1;

// do again, change values and name types
function calculateTotal(luckyNumber, total) {
    if (luckyNumber == 0) {
        return total;
    } else if (luckyNumber == 1) {
        return total = total - (total * .1);
    } else if (luckyNumber == 2) {
        return total = total - (total * .25);
    } else if (luckyNumber == 3) {
        return total = total - (total * .35);
    } else if (luckyNumber == 4) {
        return total = total - (total * .5);
    } else if (luckyNumber == 5) {
        return total = total - (total * 1);
    } else {
        return total;
    }
}
console.log(calculateTotal(1, 500));
console.log(calculateTotal(2, 200));
console.log(calculateTotal(3, 400));





    //     } if (luckyNumber === "1") {
    //     return("You get a 10% discount");
    // } else if (luckyNumber === "2") {
    //     return("You get a 20% discount");
    // } else if (luckyNumber === "3") {
    //     return("You get a 35% discount");
    // } else if (luckyNumber === "4") {
    //     return("You get a 50% discount");
    // } else if (luckyNumber === "5") {
    //     return("Congratualtions, everything is free!")
    // } else (luckyNumber === "0") {
    //     alert("Sorry, you get no discount");
    // }
    //
    //


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

//work on this
 var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("How much was the total amount spent?");
alert("your lucky number is" + luckyNumber);
alert("Price before the discount is " + total);
alert("After the discount,  your total is" + calculateTotal(luckyNumber, total));



================================= CONDITIONALS BONUSES
    Bonus 1.
    Write a function (or multiple functions) that will return
    a boolean depending on if the string value passed to it
    as an argument is the name of a day of the week that starts with a T.
        Otherwise, it should return false.
        Example: dayOfTheWeekStartsWithT("Monday")     => returns false
    Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
    Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
// learn this well
function dayOfTheWeekStartWithT(input) {
    input = input.toLowerCase();

    if (input === "tuesday" || input === "thursday") {
        return true;
    } else {
        return false;
    }
}

console.log(dayOfTheWeekStartWithT("tomorrow"));
console.log(dayOfTheWeekStartWithT("Tuesday"));
console.log(dayOfTheWeekStartWithT("thursday"));

function dayofTheWeekStartWithT(input) {
    return input.toLowerCase() == "tuesday" || input.toLowerCase() == "thursday";
}


    Bonus 2.
    Write a function, isValidPassword, that takes in a string argument and returns true or false
    depending on whether or not all the following conditions are true:
    1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
2) Contains at least one letter and one number
3) Contains at least one upper and one lower case letter
4) Only comprised of letters and numbers
5) EXTRA BONUS: is not the same forwards and backwards

function isValidPassword(input) {
    var lengthgood = input.length == 6;
    var hasAtLeastOneLett = hasLettter(input);
    var hasAtLeastOneNum = hasNumber(input);
    var hasLowerCaseLett;
    var hasUpperCaseLett;
    var alphaNumeric;

    return lengthgood && hasAtLeastOneLett && hasAtLeastOneNum && hasLowerCaseLett && hasUpperCaseLett && alphaNumeric;
}

function hasLetter(input) {
    input = input.toLowerCase();

    return input.includes("a") || input.includes("b") || input.includes("c") ||
    input.includes("d") || input.includes("e") || input.includes("f") ||
    input.includes("g") || input.includes("h");


}