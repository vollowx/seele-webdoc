---
title: InternalsAttached - Base - SEELE
---

# InternalsAttached

- Accepts: classes inheriting [`LitElement`](https://lit.dev/docs/api/LitElement/)

The InternalsAttached mixin provides access to Element Internals API through the `internals` symbol.

## Properties

| Name          | Type               | Description                                                                                          |
| ------------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| `[internals]` | `ElementInternals` | Access to the element's internals via the `internals` symbol. Automatically created on first access. |
