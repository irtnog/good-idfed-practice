# Prepare these translations.  (The "en" language is a placeholder.)
TRANSLATIONS= \
        en \


# Search a colon-separated list of directories for one of the given
# programs, returning the first match.
pathsearch = \
$(or \
	$(firstword \
		$(foreach a, $(2), \
			$(wildcard $(addsuffix /$(a), $(subst :, , $(1)))))), \
	$(3))


# Search the Python virtual environment and the executable search path
# for the programs in the listed order, returning the first match.
venvsearch = \
$(if $(call pathsearch,.venv/bin,$(1)), \
	. .venv/bin/activate; $(1), \
	$(call pathsearch,$(PATH),$(1),exit 1; echo $(1)))


# Develop using the latest available supported version of Python.
PYTHON = \
$(call pathsearch,$(PATH),python3.12 python3.11 python3.10,exit 1; echo python3)
PYTHON_VERSION = \
$(shell $(PYTHON) -c "import sys;print('{}.{}'.format(*sys.version_info[:2]))")


# Use these tools from the development environment, if available.
PRE_COMMIT  = $(call venvsearch,pre-commit)
PYTEST      = $(call venvsearch,pytest)
SPHINXBUILD = $(call venvsearch,sphinx-build)
SPHINXINTL  = $(call venvsearch,sphinx-intl)
TOMLQ       = $(call venvsearch,tomlq)
YQ          = $(call venvsearch,yq)


# Get the package name.
PYPACKAGE_NAME = \
$(shell $(TOMLQ) -r '.tool.setuptools."package-dir"|keys[0]' pyproject.toml)


# Enumerate translation targets.
LOCALES = $(foreach l,$(TRANSLATIONS),locales/$(l))


# List in-use pre-commit hooks.
PRE_COMMIT_HOOKS = \
$(addprefix .git/hooks/, \
	$(shell \
		$(YQ) -r ".repos[].hooks[].stages[]" .pre-commit-config.yaml \
			2>/dev/null \
		| sort -u \
	) \
	pre-commit \
)


# When adding an alias for a build artifact, add it to this list; cf.
# https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html.
.PHONY: \
	clean \
	docs \
	epub \
	gettext \
	html \
	lint \
	locale \
	locales \
	pdf \
	pre-commit \
	setup \
	venv \


# Generate the documentation.
docs: epub html pdf
epub html pdf: $(LOCALES)
	$(foreach l,$(TRANSLATIONS), \
		$(SPHINXBUILD) -b $@ -n docs build/$@/$(l) \
			-D language="$(l)")

locale locales: $(LOCALES)
locales/%: build/gettext
	mkdir -p build locales
	$(SPHINXINTL) -c docs/conf.py update -p build -l $*
	touch $@

gettext build/gettext: | $(PYPACKAGE_NAME).egg-info
	$(SPHINXBUILD) -b gettext -n docs build $(SPHINXOPTS)
	touch build/gettext


# Run the linter (including unstaged changes).
lint: $(PRE_COMMIT_HOOKS)
	$(PRE_COMMIT) run --show-diff-on-failure --all-files


# Install the pre-commit hooks.
pre-commit: $(PRE_COMMIT_HOOKS)
.git/hooks/%: .pre-commit-config.yaml $(PYPACKAGE_NAME).egg-info
	$(PRE_COMMIT) validate-config
	$(PRE_COMMIT) validate-manifest
	$(PRE_COMMIT) install --install-hooks --hook-type $*


# Set up the development environment.
setup $(PYPACKAGE_NAME).egg-info: pyproject.toml .venv
	. .venv/bin/activate; python -m pip install -e .[dev,test]


# Create the development environment.
venv .venv:
	$(PYTHON) -m venv .venv
	. .venv/bin/activate; python -m pip install -U pip-with-requires-python
	. .venv/bin/activate; python -m pip install -U pip setuptools


# Remove build artifacts and reset the development environment.
clean:
	rm -rf build .coverage dist *.egg-info .pytest_cache .venv* \
		$(PRE_COMMIT_HOOKS)
	find . -type d -name __pycache__ -print | xargs rm -rf
