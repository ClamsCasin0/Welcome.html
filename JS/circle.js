(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2

            var area = Math.PI * Math.pow(this.radius, 2);

            // TODO: return the proper value
            return area;
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            var finalArea = 0;

            if (doRounding) {
                finalArea = Math.round(this.getArea());
            } else {
                finalArea = this.getArea()
            }

            finalArea = (doRounding) ? Math.round(this.getArea()) : this.getArea();



            var outputMessage = "Area of the circle with radius: ";
            outputMessage += this.radius + ", is: ";
            outputMessage += finalArea;

            console.log(outputMessage);

            console.log("Area of a circle with radius: " + this.radius + ", is: ");
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;


    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
