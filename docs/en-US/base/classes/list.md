---
title: List - Base - SEELE
---

# List

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FocusDelegated`](../mixins/focus-delegated.md)

Base list component for displaying a vertical collection of items with keyboard
navigation and selection support.

Since `ariaActiveDescendant` is used for focus management, the list container
is focused rather than individual items. Use `:state(focused)` in CSS to style
focused items.

## Properties

| Name             | Type    | Default | Description                                       |
| ---------------- | ------- | ------- | ------------------------------------------------- |
| `noFocusControl` | Boolean | `false` | Disables automatic focus management via `ariaActiveDescendant`. |

## Methods

| Name                 | Parameters | Description                                      |
| -------------------- | ---------- | ------------------------------------------------ |
| `focusFirstItem()`   |            | Focus the first item in the list.                |
| `focusLastItem()`    |            | Focus the last item in the list.                 |
| `focusItem(item)`    | `item`     | Focus a specific item in the list.               |

## Events

| Name         | Type               | Description                               |
| ------------ | ------------------ | ----------------------------------------- |
| `select`     | ListSelectEvent    | Fired when a list item has been selected. |
| `item-focus` | ListItemFocusEvent | Fired when a list item is focused.        |

## CSS Parts

| Name    | Description                             |
| ------- | --------------------------------------- |
| `items` | The slot element for the list items.   |
