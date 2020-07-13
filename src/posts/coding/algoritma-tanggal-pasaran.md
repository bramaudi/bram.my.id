---
type: post
title: Algoritma Tanggal Pasaran Jawa
date: 2020-07-13 11:28:34
summary: Menghitung dan mengkonversi tanggal kalendar masehi untuk menemukan tanggal pasaran.
tags: [algoritma]
--- 

## TL;DR

Mencari pasaran dilakukan dengan menggunakan modulus, rumusnya ialah selisih antara tanggal acuan dengan tanggal target di modulus-kan dengan 5 dimana 5 ini adalah jumlah nama pasaran.

## Implementasi

Buat sebuah tanggal acuan, misal tanggal *02 Februari 2020* dan pasarannya adalah *Pon*.

``` javascript
const acuan = new Date('2020-02-02');
```

Deklarasi nama pasaran, yakni *Pon*, *Wage*, *Kliwon*, *Legi*, *Pahing* secara berurutan, saya mulai dengan Pon karena sesuai dengan tanggal acuan sebelumnya.

``` javascript
const pasaran = ['pon', 'wage', 'kliwon', 'legi', 'pahing'];
```

Deklarasi tanggal target dan cari selisi hari antara tanggal acuan dengan tanggal target yang diinginkan, misal tanggal target adalah *13 Juli 2020*

``` javascript
const target = new Date('2020-07-13');
const selisih = Math.ceil(Math.abs(target - acuan) / (1000 * 60 * 60 * 24));
```

Index array `pasaran` dari tanggal target adalah dari hasil selisih modulus jumlah pasaran (jumlahnya 5).

``` javascript
const mod = selisih % pasaran.length
console.log(pasaran[mod]) // Kliwon
```

---

## Full Code

Untuk keseluruhan **kode** dari tahap implementasi di atas adalah sebagai berikut:

``` javascript
const acuan = new Date('2020-02-02');
const pasaran = ['pon', 'wage', 'kliwon', 'legi', 'pahing'];

const target = new Date('2020-07-13');
const selisih = Math.ceil(Math.abs(target - acuan) / (1000 * 60 * 60 * 24));
const mod = selisih % pasaran.length // 162 % 5 = 2

console.log(pasaran[mod]) // kliwon
```

---

Original: [Blog Rosihan Ari Yuana](https://blog.rosihanari.net/menentukan-nama-hari-pasaran-jawa-dari-tanggal-tertentu-dengan-php/)