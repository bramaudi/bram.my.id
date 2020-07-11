---
type: quick
title: "Pagination in Nutshell"
date: 2020-07-12 00:26:00
# summary: "Mempelajari logika pembuatan pagination / penomoran untuk tiap halaman"
tags: [algoritma]
---

Sistem dasar pagination adalah dengan menggunakan teknik **offset** & **limit** untuk mendapatkan data dengan urutan yang diinginkan, *offset* sebagai titik awal data dan *limit* adalah batas data tampil.

``` php
$total = 30; // total banyak data
$get = 1; // posisi tujuan, default: 1 / halaman pertama 
$limit = 10; // data per halaman
$offset = $limit * $get - $limit; // 10 * 1 - 10 = 10
$page = ceil($total / $limit); // jumlah halaman => 3 halaman
```

Contoh kasus implementasi menggunakan Javascript:
[Live Demo](https://Pagination--bramaudi.repl.co)
[Source](https://repl.it/@bramaudi/Pagination)