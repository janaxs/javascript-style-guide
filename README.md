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



### Basic code formatting

Use soft tabs (spaces), not hard tabs (`\t`). Use an editor setting for soft tabs.

Use Unix style linefeed `\n`.

Tab size can be 2 or 4 (dbwebb uses 4).

A file should have a empty line feed at the end.

There should be no trailing whitespace.

`.jscsrc`

```
"validateIndentation":          4,
"disallowMixedSpacesAndTabs":   true,
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
"asi":          true,
```

Test case: [semicolon.js](test/semicolon.js).



Part II: Good code
----------------------------------

This is how you write good best practise code. The settings are mainly related to [`.jshintrc`](.jshintrc).

* [Use strict](#use-strict)



### Use strict

You should use `"use strict";` on global or function level, wherever its needed.

In browsers you should use strict on function level.

On serverside you can use strict on file level, at the beginning of each file.

`.jshintrc`

```
"strict": "true",
```



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
