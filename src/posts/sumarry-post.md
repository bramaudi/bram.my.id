---
type: quick
title: A some quick post example.
date: 2020-06-26 07:18:32
tags: ['code', 'javascript']
---

Cara strip atau hialngin tag html menggunakan native javascript:

``` js
const text = '<b>text bold</b>'
console.log(text.replace(/<(.+?)>/g, '')) // text bold
```