---
type: quick
title: Algoritma Rating
date: 2020-07-02 08:56:20
tags: [algoritma]
---

Logika untuk mendapatkan rating bisa diselesaikan cukup dengan rumus matematika sederhana yakni `total nilai` dari data dibagi `kuantitas` dari banyaknya data.

``` javascript
const data = [4, 3, 3, 4, 2, 5, 2, 3, 5, 1]

let total = 0
data.forEach(data => { total += data })
const hasil = total / data.length // => 32 / 10

console.log("Hasil Rating:", hasil)
// Hasil Rating: 3.2
```