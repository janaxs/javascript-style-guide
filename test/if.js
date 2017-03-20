/**
 * if
 */
(function () {
    "use strict";

    var some, any;


    if (some) {
        void 0;
    }

    // Should fail
    if (some)
    {
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

    // Fails
    /*
    if (some) void 0;

    // else on same line as }
    if (some) {
        void 0;
    }
    else {
        void 0;
    }

    */

}());
