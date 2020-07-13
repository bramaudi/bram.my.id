---
type: quick
title: Fix MySQL Permission
date: 2020-07-13 10:38:37
tags: [linux, mysql]
---

**Masalah**: MySQL tidak bisa login user root tanpa menggunakan super user.

``` bash
sudo mysql -u root
```

``` sql
use mysql;
update user set plugin='' where User='root';
flush privileges;
\q
```