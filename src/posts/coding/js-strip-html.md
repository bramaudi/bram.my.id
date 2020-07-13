---
type: quick
date: 2020-06-26 17:25:14
title: Strip Tags HTML dengan Javascript
tags: [javascript, regex]
---

Kalau di `php` mirip function `strip_tags` gunanya untuk menghilangkan tag html menggunakan javascript:

``` js
const text = '<b>text bold</b>'
text.replace(/<(.+?)>/g, '')
// text bold
```