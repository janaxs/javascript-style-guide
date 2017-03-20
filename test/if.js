/**
 * if
 */
(function () {
    "use strict";

    var some, any;


    if (some) {
        void 0;
    }

    if (some) {
        void 0;
    } else if (any) {
        void 0;
    }

    if (some) {
        void 0;
    } else if (any) {
        void 0;
    } else {
        void 0;
    }

    if (some) {
        void 0;
    } else {
        void 0;
    }

    // should fail

    // fails
    /*
    if (some) void 0;
    if (some)
        void 0;

    // else on same line as }
    if (some) {
        void 0;
    }
    else {
        void 0;
    }

    // no newline before {
    if (some)
    {
        void 0;
    }

    // needs newline after opening brace
    if (true) {doSomething();}

    */
}());
