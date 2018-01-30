"use strict";
//////2.
function showMultiplicationTable(number) {

    for(var g = 1; g <= 10; g+=1) {
        console.log(number + " h " + g + " = " + (number * g));
    }
}

showMultiplicationTable(7);
showMultiplicationTable(4);







///////3.
for (var j = 1; j <= 10; j++) {

    var randomNumber = Math.floor(Math.random() * 180) + 20;

    if(randomNumber % 2 == 0) {
        console.log(randomNumber + " is even.");
    } else {
        console.log(randomNumber + " is odd.");
    }

}





/////////4.
// var number = 1
//     for (var g = ; g >= 1; g*+) {
//         console.log(number);
//         number = number + (number + "number");
//
//     }

for (var k = 1; k <= 9; k +=1) {

    var stringNumber = k.toString();

    var product = stringNumber.repeat(k);
    console.log(product);
}





///////////5.

var number = 100;
    for (var i = 20; i >= 1; i--) {
        console.log(number);
        number = number - 5;

    }