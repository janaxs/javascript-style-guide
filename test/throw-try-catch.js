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

    /* eslint no-unreachable : "off" */
    try {
        throw new UserException("Failed");
    } catch (exc) {
        throw exc;
    }

    try {
        throw new UserException("Failed");
    } catch (exc) {
        throw exc;
    } finally {
        void 0;
    }

    try {
        throw new UserException("Failed");
    } finally {
        void 0;
    }

    // should fail

    // fails
    /*

    // keyword on same line as }
    try {
        throw "Failed";
    }
    catch (exc) {
        throw exc;
    }

    // keyword on same line as }
    try {
        throw new UserException("Failed");
    }
    finally {
        void 0;
    }

    // keyword as same line as {
    try
    {
        throw new UserException("Failed");
    } finally {
        void 0;
    }

     */
}());
