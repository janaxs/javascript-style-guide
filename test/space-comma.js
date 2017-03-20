/**
 * space and commas
 */
(function () {
    "use strict";

    /* eslint no-unused-vars: "off" */
    var a, b;

    a = [1, 2];
    b = [
        1,
        2,
    ];

    // fails
    /*
    var a,b;

    a = [1,2];
    b = [1,2,];

    // commaspace eslint
    b = [1, 2,];

    // sparse arrays allowed by jscs, prohibited by jshint
    b = [1, 2, , , 3];
    */
}());
