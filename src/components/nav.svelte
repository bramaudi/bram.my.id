<script>
	import { onMount } from 'svelte'
	import { theme } from '../stores.js'
	export let segment;
	
	function toggleTheme () {
		const ls = window.localStorage
		const newTheme = $theme === 'dark' ? theme.set('light') : theme.set('dark')
		ls.setItem('theme', $theme)
	}

	onMount(() => {
		// config
		const radius = 3; 
		const steps = 24;
		const blur = 0.02;
		const color = '#fff';
		// generate text shadows, spread evenly around a circle
		const radianStep = steps / (Math.PI * 2);
		let cssStr = '';
		for(let i=0; i < steps; i++) {
			const curRads = radianStep * i;
			const xOffset = (radius * Math.sin(curRads)).toFixed(1);
			const yOffset = (radius * Math.cos(curRads)).toFixed(1);
			if(i > 0) cssStr += ", ";
			cssStr += xOffset + "px " + yOffset + "px " + blur + "px " + color;
		}
		// apply text-shadow to element & output code
		document.querySelector('.name').style.textShadow = cssStr;
	})

</script>

<style>
	img {
		display: block;
		margin: 2rem auto .5rem;
		max-width: 77px;
		border-radius: 100%;
		border: 3px solid #ffffff;
	}
	.name {
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		color: cadetblue;
		margin: 0;
	}

	nav {
		display: flex;
		font-weight: 300;
		padding: 0 1rem;
		margin: 1rem;
		border-radius: 10px;
		background: #ffffff;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 5px;
		display: block;
		border-radius: 20rem;
		bottom: 7px;
		background-color: #a5283a;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	button {
		cursor: pointer;
		outline: none;
		padding: 0;
		margin: 0 10px 0 auto;
		font-weight: 300;
		font-size: medium;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		border: none;
		background: none;
	}

	/* Dark */
	nav.dark {
		background: #333333;
		color: #ffffff;
		border-color: #525252;
	}
	.dark [aria-current]::after {
		background: cadetblue
	}
	.dark button {
		color: #ffffff
	}

	@media only screen and (min-width: 784px) {
		nav {
			margin: 0 calc(100vw - 60em - 4px) 1.5rem;
		}
	}
</style>

<div class="header">
  <img src="/images/logo-192.png" alt="Avatar pic of bramaudi">
	<div class="name">bramaudi</div>
	<code></code>
</div>

<nav class:dark={$theme === 'dark'}>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<li><a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
	</ul>

	<button on:click={toggleTheme} type="button">{$theme}</button>
</nav>
