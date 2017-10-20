#
# A Makefile
#

# ---------------------------------------------------------------------------
#
# General setup
#

# Detect OS
OS = $(shell uname -s)

# Defaults
ECHO = echo

# Make adjustments based on OS
# http://stackoverflow.com/questions/3466166/how-to-check-if-running-in-cygwin-mac-or-linux/27776822#27776822
ifneq (, $(findstring CYGWIN, $(OS)))
	ECHO = /bin/echo -e
endif

# Colors and helptext
NO_COLOR	= \033[0m
ACTION		= \033[32;01m
OK_COLOR	= \033[32;01m
ERROR_COLOR	= \033[31;01m
WARN_COLOR	= \033[33;01m

# Which makefile am I in?
WHERE-AM-I = $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST))
THIS_MAKEFILE := $(call WHERE-AM-I)

# Echo some nice helptext based on the target comment
HELPTEXT = $(ECHO) "$(ACTION)--->" `egrep "^\# target: $(1) " $(THIS_MAKEFILE) | sed "s/\# target: $(1)[ ]*-[ ]* / /g"` "$(NO_COLOR)"

# target: help               - Displays help.
.PHONY:  help
help:
	@$(call HELPTEXT,$@)
	@$(ECHO) "Usage:"
	@$(ECHO) " make [target] ..."
	@$(ECHO) "target:"
	@egrep "^# target:" $(THIS_MAKEFILE) | sed 's/# target: / /g'



# ---------------------------------------------------------------------------
#
# Specifics
#

# Add local bin path for test tools
JSCS 		:= node_modules/.bin/jscs
ESLINT 		:= node_modules/.bin/eslint
JSHINT 		:= node_modules/.bin/jshint
JSONLINT   	:= node_modules/.bin/jsonlint

# Find sources
JSON_SOURCES 	:= $(wildcard *.json) $(wildcard .*.json) .jscsrc jshintrc
JS_SOURCES 		:= $(wildcard test/*.js)



# target: prepare            - Prepare for tests and build
.PHONY:  prepare
prepare:
	@$(call HELPTEXT,$@)
	#[ -d .bin ] || mkdir .bin
	#[ -d build ] || mkdir build
	#rm -rf build/*



# target: clean              - Removes generated files and directories.
.PHONY:  clean
clean:
	@$(call HELPTEXT,$@)
	#rm -rf build



# target: clean-all          - Removes generated files and directories.
.PHONY:  clean-all
clean-all:
	@$(call HELPTEXT,$@)
	rm -rf node_modules



# target: check              - Check version of installed tools.
.PHONY:  check
check:
	@$(call HELPTEXT,$@)
	node --version
	npm --version
	npm list jscs eslint jshint jsonlint
	$(JSCS) --version
	$(ESLINT) --version
	$(JSHINT) --version
	-$(JSONLINT) --version



# target: test               - Run all tests.
.PHONY:  test
test: jsonlint jscs eslint jshint
	@$(call HELPTEXT,$@)
	#npm validate config file



# target: install            - Install all tools
.PHONY:  install
install: prepare
	@$(call HELPTEXT,$@)
	npm install 


# target: update             - Update the codebase and tools.
.PHONY:  update
update:
	@$(call HELPTEXT,$@)
	npm update



# target: tag-prepare        - Prepare to tag new version.
.PHONY: tag-prepare
tag-prepare:
	@$(call HELPTEXT,$@)
	grep "^v." REVISION.md | head -1
	grep version package.json
	git tag | tail -1
	git status
	#gps && gps --tags
	#npm publish



# ---------------------------------------------------------------------------
#
# Npm tools
#

# target: jsonlint           - Validate JSON-files.
.PHONY: jsonlint
jsonlint:
		@$(call HELPTEXT,$@)
		$(JSONLINT) --quiet $(JSON_SOURCES)



# target: jscs               - Validate using jscs.
.PHONY: jscs
jscs:
	@$(call HELPTEXT,$@)
	$(JSCS) $(JS_SOURCES)



# target: jscs-fix           - Fix fixable validation errors with jcsc.
.PHONY: jscs-fix
jscs-fix:
	@$(call HELPTEXT,$@)
	$(JSCS) --fix $(JS_SOURCES)



# target: eslint             - Validate using eslint.
.PHONY: eslint
eslint:
	@$(call HELPTEXT,$@)
	$(ESLINT) $(JS_SOURCES)



# target: eslint-fix         - Fix fixable validation errors with eslint.
.PHONY: eslint-fix
eslint-fix:
	@$(call HELPTEXT,$@)
	$(ESLINT) --fix $(JS_SOURCES)



# target: jshint             - Validate using jshint.
.PHONY: jshint
jshint:
	@$(call HELPTEXT,$@)
	$(JSHINT) $(JS_SOURCES)
