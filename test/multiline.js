/**
 * with
 */
(function () {
    "use strict";

    var arg1, arg2, arg3, arg4;
    var a, b, c, d;

    // function declaration
    function func(
        arg1,
        arg2,
        arg3,
        arg4
    ) {
        return arg1 + arg2 + arg3 + arg4;
    }

    func(arg1, arg2, arg3, arg4);
    func(arg1,
        arg2,
        arg3,
        arg4
    );

    // ternary operator
    a = b ? c : d;
    a = b
        ? c
        : d;

    // expressions
    a = "a very long row"
        + "a very long row"
        + "a very long row";

    // if
    if (arg1 < 0 && arg2 < 0 && arg3 < 0 || arg4 > 0) {
        void 0;
    }

    if (arg1 < 0
        && arg2 < 0
        && arg3 < 0
        || arg4 > 0
    ) {
        void 0;
    }

    while (arg1 < 0
        && arg2 < 0
        && arg3 < 0
        || arg4 > 0
    ) {
        void 0;
    }

    do {
        void 0;
    } while (arg1 < 0
        && arg2 < 0
        && arg3 < 0
        || arg4 > 0);

    // should fail

    // fails
    /*
    // rows acceeding maximuLineLength fails

    // multiline strings with \
    a = "moped \
    ";

    */

}());
