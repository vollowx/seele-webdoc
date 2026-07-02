---
title: 选项卡 (Tabs) - M3 - SEELE
---

# 选项卡 (Tabs)

组件仍在开发中，待办：API 文档。

## 选项卡 (Tabs)

- 遵循：[Tabs - Material Design 3](https://m3.material.io/components/tabs/overview)
- 继承：[`Tabs`](../../base/classes/tabs.md)

<!-- @docs-demo-code-block -->

```html
<div style="width: 100%">
  <md-tabs iconsabove selected="2">
    <md-tab value="1">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      J. Clarkson
    </md-tab>
    <md-tab value="2">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      J. Boar
    </md-tab>
    <md-tab value="3">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      R. Ham
    </md-tab>
    <md-tab value="4">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      Mr. William
    </md-tab>
  </md-tabs>
  <md-tab-panel value="1">
    <p>Jeremy Clarkson</p>
  </md-tab-panel>
  <md-tab-panel value="2">
    <p>James May</p>
  </md-tab-panel>
  <md-tab-panel value="3">
    <p>Richard Hammond</p>
  </md-tab-panel>
  <md-tab-panel value="4">
    <p>Le William</p>
  </md-tab-panel>
</div>

<div style="width: 100%">
  <md-tabs secondary switch="auto" selected="3">
    <md-tab value="1">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      选项卡 1
    </md-tab>
    <md-tab value="2">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      选项卡 2
    </md-tab>
    <md-tab value="3">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      选项卡 3
    </md-tab>
    <md-tab value="4">
      <iconify-icon slot="icon" icon="material-symbols:search"></iconify-icon>
      选项卡 4
    </md-tab>
  </md-tabs>
  <md-tab-panel value="1">
    <p>J. Clarkson</p>
  </md-tab-panel>
  <md-tab-panel value="2">
    <p>J. Boar</p>
  </md-tab-panel>
  <md-tab-panel value="3">
    <p>R. Ham</p>
  </md-tab-panel>
  <md-tab-panel value="4">
    <p>Le William</p>
  </md-tab-panel>
</div>
```

### 属性

| 名称           | 类型           | 默认值      | 描述                                                    |
| -------------- | -------------- | ----------- | ------------------------------------------------------- |
| `iconsAbove`   | Boolean        | `false`     | 图标是否在标签的上方而不是前面。                         |
| `secondary`    | Boolean        | `false`     | 是主选项卡还是次选项卡。                                 |

## 选项卡项 (Tab)

- 继承：[`Tab`](../../base/classes/tab.md)

## 选项卡面板 (Tab Panel)
- 继承：[`TabPanel`](../../base/classes/tab-panel.md)
