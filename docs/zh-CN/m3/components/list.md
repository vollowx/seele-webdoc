---
title: 列表 - M3 - SEELE
---

# 列表

列表是文字和图片的连续垂直索引。

- 遵循：[Lists - Material Design 3](https://m3.material.io/components/lists/overview)

## 列表

- 继承自：[`List`](../../base/classes/list.md)

### 用法

<!-- @docs-demo-code-block -->

```html
<md-list style="width: 280px">
  <md-list-item>苹果</md-list-item>
  <md-list-item>
    香蕉
    <span slot="supporting-text">一种黄色的热带水果</span>
  </md-list-item>
  <md-list-item>
    樱桃
    <span slot="trailing-supporting-text">时令</span>
  </md-list-item>
  <md-list-item>榴莲</md-list-item>
</md-list>
```

### 事件

| 名称         | 类型               | 描述                     |
| ------------ | ------------------ | ------------------------ |
| `select`     | ListSelectEvent    | 当列表项被选中时触发。   |
| `item-focus` | ListItemFocusEvent | 当列表项获得焦点时触发。 |

## 列表项

- 继承自：[`ListItem`](../../base/classes/list-item.md)

### 插槽

| 名称                       | 描述                               |
| -------------------------- | ---------------------------------- |
| *(默认)*                   | 项目的主要标签文本。               |
| `start`                    | 放置在项目起始端的内容（如图标）。 |
| `end`                      | 放置在项目末尾端的内容。           |
| `overline`                 | 显示在主要标签上方的小字文本。     |
| `headline`                 | 主要标签文本的备用插槽。           |
| `supporting-text`          | 显示在主要标签下方的辅助描述文本。 |
| `trailing-supporting-text` | 显示在末尾的简短文本或元数据。     |

### 属性

| 名称       | 类型    | 默认值  | 描述               |
| ---------- | ------- | ------- | ------------------ |
| `selected` | Boolean | `false` | 列表项是否被选中。 |
| `disabled` | Boolean | `false` | 列表项是否被禁用。 |
