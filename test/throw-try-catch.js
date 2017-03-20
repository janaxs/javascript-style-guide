/**
 * throw, try, catch
 */
(function () {
    "use strict";

    function UserException(message) {
        this.message = message;
        this.name = "UserException";
    }

    try {
        throw "Failed";
    } catch (exc) {
        void 0;
    }

    try {
        throw "Failed";
    } catch (exc) {
        throw exc;
    }

    try {
        throw new UserException("Failed");
    } catch (exc) {
        throw exc;
    }

}());
