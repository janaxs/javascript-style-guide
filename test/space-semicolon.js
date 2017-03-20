/**
 * space and semicolon
 */
(function () {
    "use strict";

    /* eslint no-unused-vars: "off" */
    var a, b;

    a = b;

    // testcase also exists in for.js

    // fails
    /*
    var a, b ;

    a = b ;
    */
}());
