/**
 * variable
 */
(function () {
    "use strict";

    /* jshint unused: false */
    /* eslint no-unused-vars: "off" */
    var camelCase = 0;
    var CamelCase = 1; // PascalCase should fail
    var _camelCase = 2; // should fail
    var camelCase_ = 3; // should fail
    var UPPER_CASE = 4;
    var snakeCase = {
        snake_case: 6
    };
    var obj = {};

    obj.snake_case = 5;

    var a = 1,
        b = 2;

    var c = 1;
    var d = 2;

    // fails
    /*

    // assignments separated by newline
    var e = 1, f = 2;
    */
}());
