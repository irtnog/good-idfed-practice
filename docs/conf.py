from good_idfed_practice import __version__

project = "Good Identity Federation Practice"
author = "Matthew X. Economou, Albert Wu, Sebastian Benatar, Björn Mattsson"
copyright = f"2024, {author}"
release = __version__
version = release

extensions = [
    "myst_parser",
    "sphinx_copybutton",
    "sphinx_design",
    "sphinx.ext.autodoc",
    "sphinx.ext.autosummary",
    "sphinx.ext.intersphinx",
    "sphinxext.opengraph",
    "sphinxext.rediraffe",
    "sphinx.ext.viewcode",
    "sphinx_pyscript",
    "sphinx_tippy",
    "sphinx_togglebutton",
]
nitpicky = True
suppress_warnings = ["myst.strikethrough"]
templates_path = ["_templates"]
exclude_patterns = [".gitignore", "Thumbs.db", ".DS_Store"]

myst_enable_extensions = [
    "amsmath",
    "attrs_block",
    "attrs_inline",
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "linkify",
    "replacements",
    "smartquotes",
    "strikethrough",
    "substitution",
    "tasklist",
]
myst_dmath_double_inline = True
myst_enable_checkboxes = True
myst_footnote_transition = True
myst_heading_anchors = 2

html_theme = "sphinx_book_theme"
html_theme_options = {
    "home_page_in_toc": True,
    "repository_url": "https://github.com/irtnog/good-idfed-practice",
    "repository_branch": "main",
    "path_to_docs": "docs",
    "use_repository_button": True,
    "use_edit_page_button": True,
    "use_issues_button": True,
}

html_title = f"{project} {version}"
html_static_path = ["_static"]
