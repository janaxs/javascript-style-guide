JavaScript Style Guide
==================================

[![npm version](https://badge.fury.io/js/javascript-style-guide.svg)](https://badge.fury.io/js/javascript-style-guide)
[![Gitter](https://badges.gitter.im/canax/javascript-style-guide.svg)](https://gitter.im/canax/javascript-style-guide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)
[![Build Status](https://travis-ci.org/canax/javascript-style-guide.svg?branch=master)](https://travis-ci.org/canax/javascript-style-guide)
[![CircleCI](https://circleci.com/gh/canax/javascript-style-guide.svg?style=svg)](https://circleci.com/gh/canax/javascript-style-guide)

JavaScript Style Guide with basics for client and server code, clean, unobtrusive, unopiniated, without transpilation together with jscs and jshint configurations.

The guide deals with both ES5 and ES6 recommendations, without using a transpiler, trying to propose a common way of writing JavaScript, independantly on writing code for browser, server, ES5 or ES6.

Test- and example files are in [`test`](test) and they should pass using the config files [`.jscsrc`](.jscsrc) and [`.jshintrc`](.jshintrc). This document explains and describes the setup.

This is also known as the dbwebb style guide for JavaScript.



Table of Content
----------------------------------

* [Part I: Code formatting](#part-i-code-formatting)
* [Part II: Good code](#part-ii-good-code)
* [Part III: Recommendations and Discussions](#part-iii-recommendations-and-discussions)
* [References and related reading](#references-and-related-reading)



Part I: Code formatting
----------------------------------

This is how you should format your code, mainly related to [`.jscsrc`](.jscsrc).

* [Basic code formatting](#basic-code-formatting)
* [Semicolon](#semicolon)
* [Block](#block)
* [Whitespace](#whitespace)
* [Multiline](#multiline)



### Basic code formatting

Use soft tabs (spaces), not hard tabs (`\t`). Use an editor setting for soft tabs.

Use Unix style linefeed `\n`.

Tab size can be 2 or 4 (dbwebb uses 4).

A file should have a empty line feed at the end.

There should be no trailing whitespace.

`.jscsrc`

```
"validateIndentation":          4,
"disallowTabs":                 true,
"validateLineBreaks":           "LF",
"requireLineFeedAtFileEnd":     true,
"disallowTrailingWhitespace":   true,
```



### Semicolon

You can decide on wether to use semicolon or not (dbwebb requires semicolon).

`.jscsrc`

```
"requireSemicolons": true,
```

If you decide to not require semicolons, check out the following settings.

`.jshintrc`

```
"asi": true,
```

Test case: [semicolon.js](test/semicolon.js).



### Block

The statements `if, else, for, while, do, switch, try, catch` should be followed by a block of code wrapped in curly braces.

```
if (some) {
    void 0;
}
```

You may omit block wrapped in curly braces within a switch statement for `case, default`. Both ways are valid.

```
// without curly braces
switch (some) {
    case 1:
        void 0;
        void 0;
    break;

// with curly braces
switch (some) {
    case 1: {
        void 0;
        void 0;
    }
    break;
```

Related settings in `.jscsrc`.

```
"requireCurlyBraces": [
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "try",
    "catch",
],
```

`.jshintrc`

```
"curly": true,
```

Test case: [if.js](test/if.js), [for.js](test/for.js), [while.js](test/while.js), [do.js](test/do.js), [switch.js](test/switch.js), [throw-try-catch.js](test/throw-try-catch.js).



### Whitespace

Statements like `if, else, for, while, do, switch, try, catch, function, return` should be followed by whitespace.

Require a space inbetween the arguments of the for statement.

`for (i=1; i<0; i--) {`

Require a space before block statements.

`if (some) {`

When defining a function, disallow space before round brace and require a space before curly brace.

```
function a() {
```

Require a space before opening curly brace in function expressions and before the round brace (excluded in named function where the space is before the name).

```
var x = function () {};
var x = function a() {};
```

Require a space after a comma, except when the comma is last. Disallow a space before a comma. An exception is sparse arrays which are allowed. However, arrays with empty elements are disallowed by jshint option elision.

```
var a, b;
a = [1, 2];
a = [1, 2,];
b = [1, 2, , , 3];
```

Disallow space before semicolon, except when used after a parathesis.

`for ( ; i<0; i++) {`

Disallow space after object key but require space before object value.

`var x = {a: 1};`

Related settings in `.jscsrc`.

```
"requireSpaceAfterKeywords": [
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "try",
    "catch",
    "function",
    "return"
],
"requireSpacesInForStatement": true,
"requireSpaceBeforeBlockStatements": 1,
"requireSpacesInFunctionDeclaration": {
    "beforeOpeningCurlyBrace": true
},
"disallowSpacesInFunctionDeclaration": {
    "beforeOpeningRoundBrace": true
},
"disallowSpacesInNamedFunctionExpression": {
    "beforeOpeningRoundBrace": true
},
"requireSpacesInFunctionExpression": {
    "beforeOpeningCurlyBrace": true
},
"requireSpaceAfterComma": {
    "allExcept": ["trailing"]
},
"disallowSpaceBeforeComma": {
    "allExcept": ["sparseArrays"]
},
"disallowSpaceBeforeSemicolon": {
    "allExcept": [ "(" ]
},
"disallowSpaceAfterObjectKeys": true,
"requireSpaceBeforeObjectValues": true,
```

Related settings in `.jshintrc`.

```
"elision": false,
```

Test case: [if.js](test/if.js), [for.js](test/for.js), [while.js](test/while.js), [do.js](test/do.js), [switch.js](test/switch.js), [throw-try-catch.js](test/throw-try-catch.js), [function.js](test/function.js), [space-comma.js](test/space-comma.js), [space-semicolon.js](test/space-semicolon.js), [object.js](test/object.js).



### Multiline

A line should not be to long, the recommendation is 80 characters, but feel fre to set 100 or 120 (dbwebb uses 100 characters), the less the better.

Make a multiline expression to fit the proposed line length.

```
a = "a very long row"
    + "a very long row"
    + "a very long row";
```

Break long if-statements (while, do) into multiline statements.

```
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
```

You can write the ternary operator as single line or as multiline.

```
a = b ? c : d;
a = b
    ? c
    : d;
```

Define a function over several lines when it has several arguments and ensure that the arguments are aligned. Call a function as multiline when haveing several and/or long arguments.

```
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
```

Related settings in `.jscsrc`.

```
"maximumLineLength": 100,
"requireAlignedMultilineParams": true
```

Related settings in `.jshintrc`.

```
"laxbreak": true,
```

Test case: [multiline.js](test/multiline.js).



Part II: Good code
----------------------------------

This is how you write good best practise code. The settings are mainly related to [`.jshintrc`](.jshintrc).

* [Use strict](#use-strict)
* [No use of with](#no-use-of-with)



### Use strict

You should use `"use strict";` on global or function level, wherever its needed.

In browsers you should use strict on function level.

On serverside you can use strict on file level, at the beginning of each file.

`.jshintrc`

```
"strict": "true",
```



### No use of with

Do not use with statements. The use of with is also prohibited though [strict](#strict).

`.jscs`

```
"disallowKeywords": [
    "with"
],
```

Test case: [with.js](test/with.js).



Part III: Recommendations and Discussions
----------------------------------

This is further recommendations ad discussions on good code, but these may not suite everybody or every project.

* [Editor with inline validation](#editor-with-inline-validation)



### Editor with inline validation

You should use an editor with inline validation, the editor executes the validation tools while you type in the code.

For example:

* Atom with plugin linter-jscs and linter-jshint.
 


References and related reading
----------------------------------

Read on to learn more on JavaScript style and best practices.

* [JSCS](http://jscs.info/)
* [JSHint](http://jshint.com/)
