---
title: List - M3 - SEELE
---

# List

Lists are continuous, vertical indexes of text and images.

- Follows: [Lists - Material Design 3](https://m3.material.io/components/lists/overview)

## List

- Inherits: [`List`](../../base/classes/list.md)

### Usage

<!-- @docs-demo-code-block -->

```html
<md-list style="width: 280px">
  <md-list-item>Apple</md-list-item>
  <md-list-item>
    Banana
    <span slot="supporting-text">A yellow tropical fruit</span>
  </md-list-item>
  <md-list-item>
    Cherry
    <span slot="trailing-supporting-text">Seasonal</span>
  </md-list-item>
  <md-list-item>Durian</md-list-item>
</md-list>
```

### Events

| Name         | Type               | Description                               |
| ------------ | ------------------ | ----------------------------------------- |
| `select`     | ListSelectEvent    | Fired when a list item has been selected. |
| `item-focus` | ListItemFocusEvent | Fired when a list item is focused.        |

## List Item

- Inherits: [`ListItem`](../../base/classes/list-item.md)

### Slots

| Name                     | Description                                          |
| ------------------------ | ---------------------------------------------------- |
| *(default)*              | The primary label text of the item.                  |
| `start`                  | Content placed at the start of the item (e.g. icon). |
| `end`                    | Content placed at the end of the item.               |
| `overline`               | Small text displayed above the primary label.        |
| `headline`               | Alternative slot for the primary label text.         |
| `supporting-text`        | Secondary descriptive text below the primary label.  |
| `trailing-supporting-text` | Short text or metadata displayed at the trailing end. |

### Properties

| Name       | Type    | Default | Description                        |
| ---------- | ------- | ------- | ---------------------------------- |
| `selected` | Boolean | `false` | Whether the list item is selected. |
| `disabled` | Boolean | `false` | Whether the list item is disabled. |
