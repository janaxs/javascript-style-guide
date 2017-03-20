/**
 * for
 */
(function () {
    "use strict";

    var obj;

    obj = {a: 1, b: 2};
    obj = {
        a: 1,
        b: 2
    };


    // fails
    /*

    // space after key
    obj = {a : 1, b: 2};
    obj = {
        a : 1,
        b: 2
    };

    // space before value
    obj = {a:1, b: 2};
    obj = {
        a:1,
        b: 2
    };

     */
}());
