"use stricy";


// Make a function named sayHello(name) that returns "Hi " + name.
function sayHello(name) {
    return "Hi" + name + "!";
}
console.log(sayHello("AJ"));

//     Write a function named capitalize(string) that takes a string of
// any capitalization and uppercases the first character and lowercases
// the rest of the characters of a string.
function capitalize(string) {
    return string.toUpperCase().charAt(0);


}

//     Write a function named upperCase(string)
function upperCase(string) {
    return string.toUpperCase();
}
// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}
//     Make a function named isOdd(number)
function isOdd(number) {
   return number % 2 !== 0;
}
// Make a function named isEven(number)
function isEven(number) {
    return number % 2 == 0;
}
// Make a function named isPositive(number)
function isPositive(number) {
    return number > 0;
}
// Make a function named isNegative(number)
function isNegative(number) {
    return number < 0;
}
// Make a function named isBoolean(input)
function isBoolean(input) {
    return typeof input === "boolean";
}
// Make a function named isTrue(boolean)
function isTrue(boolean) {
    return boolean == "true";
}
// Make a function named isFalse(boolean)
function isFalse(boolean) {
    return boolean == "false";
}
// Make a function named isTruthy(input)
function isTruthy(input) {

}
// Make a function named isFalsy(input)
// Make a function named isVowel(letter)
function isVowel(letter) {
    if(letter == "a") {
        return true;
    }
    else if(letter == "e") {
        return true;
    } else if(letter == "i") {
        return true;
    } else if(letter == "o") {
        return true;
    } else if(letter = "u") {
        return true;
    } else {
        return false;
    }

}
// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels
// Make a function named isConsonant(letter)
// Make a function named hasConsonants(string)
// Make a function named isCapital(letter)
// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
//     Make a function named isLowerCase(letter)
// Make a function named hasLowerCase(string) that returns if a string has any lower cased
// Make a function named isSpace(letter) that returns if a character is a space character
// Make a function named hasSpaces(string) that returns if a string has any space characters
// Make a function named isZero(number)
function isZero(number) {
    return number === 0;
}
// Make a function named increment(number) that returns a number plus one
function increment(number) {
    return number + 1;
    //or return number +=;
}
// Make a function named decrement(number) that returns a number minus one
function decrement(number) {
    return number - 1;
    //or return number -=;
}
// Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}
// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return input + 5;
    //or return input += 5;
}
//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    return input % 5 == 0;
}
// Make a function named isThree(input)
function isThree(input) {
    return input === 3;

}
// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    return input % 3 == 0;
}
// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    return input % 3 == 0 && input % 5 == 0;
}
// Write a function named lowerCase(string)
function lowerCase(string) {
    return string.toLowerCase();
}
// Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.
//     Write a function named add(a, b) that returns the sum of a and b
function add(a, b) {
    return a + b;
}
// Write a function named subtract(a, b) that returns a minus b
function subtract(a, b) {
    return a - b;
}
// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a,b) {
    return a * b;
}
// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return a / b;
}
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a, b) {
    return a % b;
}
// Write a function named average(arrayOfNumbers) that returns the average of an array of numbers and numeric strings.
function average(arrayOfNumbers) {
    var total = 0;
    for(var i = 0; i < arrayOfNumbers.length; i++) {
        total += arrayOfNumbers[i];
    }
    var avg = total / arrayOfNumbers.length;
    return avg;
    }