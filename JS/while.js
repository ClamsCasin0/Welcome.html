"use strict";

//
var i = 2;
while ( i <= 65536 ) {
    console.log(i);
    i *= 2;
}


//
//
//
//

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("beginning cones is/are " + allCones + " number of cones.");

do {
    var clientsCones = Math.floor(Math.random() * 5) + 1;

    if(clientsCones <= allCones) {
        console.log("The Client ordered " + clientsCones + "number of cones.");
        allCones = allCones - clientsCones;
        console.log("Sold " + clientsCones + " number of cones.");
        console.log("Cones left is/are " + allCones);

    } else {
        console.log("Cones left is/are " + allCones);
        console.log("serve next client.");

    }

    while(allCones > 0);
}
console.log("Go home.");

// var c = allCones;
// var cc = clientsCones;
//
// do { var c =
//     console.log(c);
//     c = c - cc
//     c--;
// } while (c <= cc )


/////