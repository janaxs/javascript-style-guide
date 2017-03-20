/**
 * for
 */
(function () {
    "use strict";

    var ii;


    for (ii = 0; ii > 0; ii++) {
        void 0;
    }

    for (; ii > 0; ii++) {
        void 0;
    }

    for ( ; ii > 0; ii++) {
        void 0;
    }

    for (let i=0; i > 0; i++) {
        void 0;
    }

    for (let i = 0; i>0; i++) {
        void 0;
    }

    // should fail

    // fails
    /*

    // curly brace on new row
    for ( ; ii > 0; ii++)
    {
        void 0;
    }

     */
}());
