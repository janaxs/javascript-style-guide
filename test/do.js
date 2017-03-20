/**
 * if
 */
(function () {
    "use strict";

    var ii;


    do {
        void 0;
    } while (ii);

    // Should fail
    do
    {
        void 0;
    } while (ii);

    // fails
    /*

    // keyword on same line as }
    do {
        void 0;
    }
    while (ii);

     */
}());
