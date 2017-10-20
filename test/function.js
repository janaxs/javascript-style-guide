/**
 * with
 */
(function () {
    "use strict";

    var func;

    function any() {
        void 0;
    }

    any();

    function some(arg1, arg2) {
        void arg1;
        void arg2;
    }

    some();

    function any1() {
        return 0;
    }

    any1();

    function some1(arg1, arg2) {
        return (arg1 + arg2);
    }

    some1();

    func = function any2() {
        void 0;
    };

    func();

    func = function () {
        void 0;
    };

    func = function() {
        void 0;
    };

    func();

    (function () {
        void 0;
    })();

    (function() {
        void 0;
    }());

    func = function () {};
    func = function a() {};
    func = function a(a, b) {
        a = b;
    };

    func = (function () {
        return 1;
    })();

    func = (function() {
        return 1;
    }());

    // should fail

    // fails
    /*
        return(arg1 + arg2);

        func = function() {
            void 0;
        };

        (function() {
            void 0;
        })();

        function any5 () {
            void 0;
        }

        function any6 (){
            void 0;
        }

        func = function a () {};

        // arguments separated by ", "
        func = function a(a , b) {

        // IIFE must wrap within parantheses
        func = function () {
            return 1;
        }();

    */
}());
