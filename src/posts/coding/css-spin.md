---
type: quick
title: CSS Spinner
date: 2020-07-15 02:22:03
tags: [css]
---


``` css
.spin {
	display: inline-block;
	border-radius: 100%;
	width: 16px;
	height: 16px;
	border: 2px solid rgba(150,150,150,0.5);
	border-top: 2px solid rgba(150,150,150,1);
	animation: rotating 1s infinite linear;
}
@keyframes rotating {
	100% {
		transform: rotate(360deg);
	}
}
```