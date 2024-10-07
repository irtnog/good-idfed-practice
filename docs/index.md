---
sd_hide_title: True
---

# Welcome

::::{grid}
:reverse:
:gutter: 3 4 4 4
:margin: 1 2 1 2

:::{grid-item}
:columns: 12 4 4 4

:::

:::{grid-item}
:columns: 12 8 8 8
:child-align: justify
:class: sd-fs-5

```{rubric} Good Identity Federation Practice
```

:::

::::

---

This document brings a good practice approach to research and
education identity federation.  In short, it answers two questions:

- How can a federation participant tell that their identity provider
  or service provider works properly?

- How can a federation operator ensure that participants can
  interoperate while simultaneously (1) protecting the integrity of
  the trust fabric and (2) promoting useful change?

Validating an identity provider or service provider deployment
presents a significant roadblock for people who have never used
federated identities before.  Current good practice involves an
overwhelming variety of standards, expectations, entity categories,
frameworks, profiles, and more.  There exists no single, comprehensive
resource for operational guidance and integration testing.  What
documentation or test resources exist are difficult to find even for
experienced professionals, are typically restricted to federation
members, and are focused almost exclusively on identity providers.
While the decentralized nature of identity federation allows it to
scale far beyond current commercial offerings, that same
decentralization makes enacting meaningful change to participant or
federation operations seemingly impossible.  A scorecard would be a
powerful tool for change.

---

```{toctree}
:hidden:
scenarios.md
glossary.md
references.md
```

```{toctree}
:hidden:
:caption: Guidelines
opsec.md
metadata.md
assurances.md
claims.md
```

```{toctree}
:hidden:
:caption: Assessment
questionnaires.md
testing.md
```
