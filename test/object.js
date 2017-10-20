/**
 * for
 */
(function () {
    "use strict";

    /* eslint no-unused-vars: "off" */
    var obj;

    obj = {a: 1, b: 2, c: 3};
    obj = {
        a: 1,
        b: 2,
        c: 3
    };

    // align by value
    obj = {
        a:   1,
        be:  2 * 2,
        c:   3 * 3
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

    // all on one line or keys on separate line
    var a = {
        b: 'b', c: 'c',
        a: 1
    };

     */
}());
