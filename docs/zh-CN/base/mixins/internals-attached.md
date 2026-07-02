---
title: InternalsAttached - Base - SEELE
---

# InternalsAttached

- 接受：继承 [`LitElement`](https://lit.dev/docs/api/LitElement/) 的类

InternalsAttached 混合类通过 `internals` 符号提供对 Element Internals API 的访问。

## 属性

| 名称          | 类型             | 描述                                                      |
| ------------- | ---------------- | --------------------------------------------------------- |
| `[internals]` | ElementInternals | 通过 `internals` 符号访问元素的内部。首次访问时自动创建。 |
