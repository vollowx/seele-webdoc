---
title: List - Base - SEELE
---

# List

- 混入：[`InternalsAttached`](../mixins/internals-attached.md)
- 混入：[`FocusDelegated`](../mixins/focus-delegated.md)

用于显示带有键盘导航和选择支持的垂直项目集合的基础列表组件。

由于使用了 `ariaActiveDescendant` 进行焦点管理，焦点会落在列表容器上而非单个项目上。使用 CSS 中的 `:state(focused)` 来为被聚焦的项目添加样式。

## 属性

| 名称             | 类型    | 默认值  | 描述                                               |
| ---------------- | ------- | ------- | -------------------------------------------------- |
| `noFocusControl` | Boolean | `false` | 禁用通过 `ariaActiveDescendant` 进行的自动焦点管理。 |

## 方法

| 名称                | 参数   | 描述                     |
| ------------------- | ------ | ------------------------ |
| `focusFirstItem()`  |        | 聚焦列表中的第一项。     |
| `focusLastItem()`   |        | 聚焦列表中的最后一项。   |
| `focusItem(item)`   | `item` | 聚焦列表中的特定项目。   |

## 事件

| 名称         | 类型               | 描述                     |
| ------------ | ------------------ | ------------------------ |
| `select`     | ListSelectEvent    | 当列表项被选中时触发。   |
| `item-focus` | ListItemFocusEvent | 当列表项获得焦点时触发。 |

## CSS Parts

| 名称    | 描述                          |
| ------- | ----------------------------- |
| `items` | 列表项的插槽元素。            |
