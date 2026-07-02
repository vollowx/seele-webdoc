---
title: Checkbox - Base - SEELE
---

# Checkbox

- Mixes: [`InternalsAttached`](../mixins/internals-attached.md)
- Mixes: [`FormAssociated`](../mixins/form-associated.md)

## Properties

| Name            | Type    | Default | Description                                              |
| --------------- | ------- | ------- | -------------------------------------------------------- |
| `checked`       | Boolean | `false` | Whether the checkbox is checked.                         |
| `indeterminate` | Boolean | `false` | Whether the checkbox is in an indeterminate state.       |
| `required`      | Boolean | `false` | Whether the checkbox is required for form submission.    |

## Events

| Name     | Type                   | Description                                                                                      |
| -------- | ---------------------- | ------------------------------------------------------------------------------------------------ |
| `change` | `CustomEvent<boolean>` | Dispatched when the checked state changes. The `detail` property contains the new checked state. |
