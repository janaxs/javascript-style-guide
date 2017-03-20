/**
 * switch
 */
(function () {
    "use strict";

    var some;

    // without curly braces
    switch (some) {
        case 1:
            void 0;
            void 0;
            break;

        case 2:
            void 0;
            void 0;
            break;

        default:
            void 0;
            void 0;
    }

    // with curly braces
    switch (some) {
        case 1: {
            void 0;
            void 0;
        }
            break;

        case 2: {
            void 0;
            void 0;
        }
            break;

        default: {
            void 0;
            void 0;
        }
    }

    // fails
    /*
    switch (some)
    {
        default:
            void 0;
    }
    */
}());
