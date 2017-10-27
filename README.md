JavaScript Style Guide
==================================

[![npm version](https://badge.fury.io/js/javascript-style-guide.svg)](https://badge.fury.io/js/javascript-style-guide)
[![Gitter](https://badges.gitter.im/janaxs/javascript-style-guide.svg)](https://gitter.im/janaxs/javascript-style-guide?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)
[![Build Status](https://travis-ci.org/janaxs/javascript-style-guide.svg?branch=master)](https://travis-ci.org/janaxs/javascript-style-guide)
[![CircleCI](https://circleci.com/gh/janaxs/javascript-style-guide.svg?style=svg)](https://circleci.com/gh/janaxs/javascript-style-guide)

JavaScript Style Guide with basics for client and server code, clean, unobtrusive, unopiniated, without transpilation together with jscs and eslint (jshint) configurations.

The guide deals with both ES5 and ES6 recommendations, without using a transpiler, trying to propose a common way of writing JavaScript, independantly on writing code for browser, server, ES5 or ES6.

Test- and example files are in [`test`](test) and they should pass using the config files [`.jscsrc`](.jscsrc) and [.eslintrc.json](.eslintrc.json) ([`.jshintrc`](.jshintrc)). This document explains and describes the setup.

ESLint is to replace JSHint. Both exists for now.

This is also known as the dbwebb style guide for JavaScript, used in teaching web programmers at https://dbwebb.se/.



Table of Content
----------------------------------

* [Part I: Code formatting](#part-i-code-formatting)
* [Part II: Good code](#part-ii-good-code)
* [Part III: Recommendations and Discussions](#part-iii-recommendations-and-discussions)
* [References and related reading](#references-and-related-reading)



Part I: Code formatting
----------------------------------

This is how you should format your code, the rules are mainly related to [`.jscsrc`](.jscsrc) but it has some effect on [`.jshintrc`](.jshintrc).

* [Basic code formatting](#basic-code-formatting)
* [Semicolon](#semicolon)
* [Identifier naming](#identifier-naming)
* [Block](#block)
* [Whitespace](#whitespace)
* [Multiline](#multiline)
* [Other](#other)



### Basic code formatting

Use soft tabs (spaces), not hard tabs (`\t`). Use an editor setting for soft tabs.

Use Unix style linefeed `\n`.

Use tab size 4.

A file should have a empty line feed at the end.

There should be no trailing whitespace.

Settings related to `.jscsrc`.

```
"validateIndentation": {
    "value": 4,
    "allExcept": ["comments", "emptyLines"]
},
"disallowTabs":                 true,
"validateLineBreaks":           "LF",
"requireLineFeedAtFileEnd":     true,
"disallowTrailingWhitespace":   true,
```



### Semicolon

Use semicolons.

Settings related to `.jscsrc`.

```
"requireSemicolons": true,
```

If you decide to not require semicolons.

Settings related to `.jshintrc`.

```
"asi": true,
```

Test case: [semicolon.js](test/semicolon.js).



### Identifier naming

Use camelCase or UPPERCASE_WITH_UNDERSCORE for naming your variables. An exception is object keys.

```
var camelCase = 0;
var CamelCase = 1; // PascalCase should fail
var _camelCase = 2; // should fail
var camelCase_ = 3; // should fail
var UPPER_CASE = 4;
var snakeCase = {
    snake_case: 6
};
var obj = {};

obj.snake_case = 5;
```
 
Settings related to `.jscsrc`.

```
"requireCamelCaseOrUpperCaseIdentifiers": true,
```

Test case: [variable.js](test/variable.js).



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

Keywords following a closing curly brace should be on the same line.

```
if (some) {
    void 0;
} else {
    void 0;
}

do {
    void 0;
} while (ii);

try {
    throw "Failed";
} catch (exc) {
    throw exc;
} finally {
    void 0;
}
```

The opening curly brace should go on the same line as the keyword. Do not use a linebreak before the opening curly brace.

All non-empty blocks should have a newline after the curly brace.

```
if (true) {
    doSomething();
}

var x = function () {};
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
    "finally"
],
"disallowKeywordsOnNewLine": [
    "else",
    "while",
    "catch",
    "finally"
],
"disallowNewlineBeforeBlockStatements": [
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "try",
    "catch",
    "function",
    "class"
],
"requireBlocksOnNewline": true,
```

Related settings in `.jshintrc`.

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

Require a space before opening curly brace in function expressions and before (optional) the round brace (excluded in named function where the space is before the name).

```
var x = function() {};  // Allow function expression without space
var x = function () {};
var x = function a() {};
```

Require a space after a comma.

```
var a, b;
a = [1, 2];
b = [
    1,
    2,
];
```

Disallow space before semicolon, except when used after a parathesis.

`for ( ; i<0; i++) {`

Disallow space after object key but require space before object value.

`var x = {a: 1};`

Disallow empty lines at the beginning and the end of a block.

An empty newline should follow a var declaration.

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
"disallowPaddingNewlinesInBlocks": true,
"requirePaddingNewLineAfterVariableDeclaration": true,
"validateParameterSeparator": ", ",
```

Test case: [if.js](test/if.js), [for.js](test/for.js), [while.js](test/while.js), [do.js](test/do.js), [switch.js](test/switch.js), [throw-try-catch.js](test/throw-try-catch.js), [function.js](test/function.js), [space-comma.js](test/space-comma.js), [space-semicolon.js](test/space-semicolon.js), [object.js](test/object.js).



### Multiline

A line should not be to long, the recommendation is 80 characters, but feel fre to set 100 or 120 (dbwebb uses 100 characters), the less the better.

Variable assignment should be separated by newline.

```
var a = 1,
    b = 2;

// or even better
var a = 1;
var b = 2;
```

Make a multiline expression to fit the proposed line length. Disallow using `\` to create multiline strings. Use concatenation instead, or template strings.

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

An object can be defined on a single line or on a multiline.

```
var obj = {a: 1, b: 2, c: 3};
var obj = {
    a: 1,
    b: 2,
    c: 3
};
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
"requireLineBreakAfterVariableAssignment": true,
"requireAlignedMultilineParams": true,
"disallowMultipleLineStrings": true,
"requireObjectKeysOnNewLine": {
    "allExcept": ["sameLine"]
}
```

Related settings in `.jshintrc`.

```
"laxbreak": true,
```

Test case: [multiline.js](test/multiline.js), [variable.js](test/variable.js).



### Other

Parantheses should be used wrapping an immediately invoked function expression.

```
(function () { … })();
(function () { … }());  // Douglas Crockford's style
```

Related settings in `.jscsrc`.

```
"requireParenthesesAroundIIFE": true
```

Test case: [function.js](test/function.js).



Part II: Good code
----------------------------------

This is how you write good best practise code. The settings are mainly related to [`.jshintrc`](.jshintrc).

* [Use strict](#use-strict)
* [No use of with](#no-use-of-with)



### Use strict

You should use `"use strict";` on global or function level, wherever its needed.

In browsers you should use strict on function level.

On serverside you can use strict on file level, at the beginning of each file.

Leave an empty line after `"use strict";`.

Related settings in `.jscsrc`.

```
"requirePaddingNewLinesAfterUseStrict": true,
```

Related settings in `.jshintrc`.

```
"strict": "true",
```



### No use of with

Do not use with statements. The use of with is also prohibited though [strict](#strict).

Related settings in `.jscs`.

```
"disallowKeywords": [
    "with"
],
```

Test case: [with.js](test/with.js).



### No use of console for logging

Eshint suggest no use of `console` when in a browser, but is should be allowed in Node. This rule is default disabled to allow usage of console.

Related settings in `.eslintrc.json`.

```
"rules": {
    "no-console": 0
}
```

Test case: [console.js](test/console.js).



Part III: Recommendations and Discussions
----------------------------------

This is further recommendations ad discussions on good code, but these may not suite everybody or every project.

* [Editor with inline validation](#editor-with-inline-validation)



### Editor with inline validation

You should use an editor with inline validation, the editor executes the validation tools while you type in the code.

For example:

* Atom with plugin linter-jscs, linter-eslint and linter-jshint.
 


References and related reading
----------------------------------

Read on to learn more on JavaScript style and best practices.

* [JSCS](http://jscs.info/)
* [ESLint](https://eslint.org/)
* [JSHint](http://jshint.com/)
