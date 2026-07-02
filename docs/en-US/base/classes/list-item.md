---
title: ListItem - Base - SEELE
---

# ListItem

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

Base list item component for interactive list items in menus and selects.

Since `ariaActiveDescendant` is used in lists, list items are not actually
focused. To style or animate a focused list item, use `:state(focused)` in CSS
or handle custom behaviors by overriding `updated()`.

## Properties

| Name       | Type    | Default | Description                        |
| ---------- | ------- | ------- | ---------------------------------- |
| `selected` | Boolean | `false` | Whether the list item is selected. |
| `focused`  | Boolean | `false` | Whether the list item has focus.   |

## Methods

| Name      | Description                               |
| --------- | ----------------------------------------- |
| `focus()` | Visually sets the focused state to true.  |
| `blur()`  | Visually sets the focused state to false. |
