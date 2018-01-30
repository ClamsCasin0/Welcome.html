//////////2.

var wantsToEnterOddNumber = confirm()
if (wantsToEnterOddNumber) {
    var number =  prompt("Please enter an odd number.");
    number = parseFloat(number);

    if (number % 2 == 0) {
        alert(number + " is even.")
    }
}


var input;
do {
    input = prompt("please enter a odd number between 1 and 50")
}while(input > 50 || input < 1) || isNaN(parseFloat(number));

console.log("number to skip is " + input);


// var oddNumberEntered;
// do {
//     oddNumberEntered = prompt("Enter a desired odd number between 1 and 50.");
// } while (notAnOddNumber(oddNumberEntered));
//     console.log("Please enter an odd number.");
//
// if (oddNumberEntered % 2 == 1) {
//     break;
// }

for(var)




////////////3.





console.log("Continue example")

    var number = 0;

    while (true) {
        number++;
        if (number === 50) {
            console.log("End of loop!");
            break;
        }
        if (number % 2 === 1) {
            continue;
        }
        console.log(number)
    }







