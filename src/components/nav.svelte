<script>
	import { theme } from '../stores.js'
	export let segment;
	
	function toggleTheme () {
		const ls = window.localStorage
		const newTheme = $theme === 'dark' ? theme.set('light') : theme.set('dark')
		ls.setItem('theme', $theme)
	}
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
		user-select: none;
		font-size: x-large;
		font-weight: bold;
		text-align: center;
		color: cadetblue;
		margin: 0;
		text-shadow: rgb(255, 255, 255) 0px 3px 0.02px, rgb(255, 255, 255) -1.9px -2.3px 0.02px, rgb(255, 255, 255) 2.9px 0.6px 0.02px, rgb(255, 255, 255) -2.7px 1.3px 0.02px, rgb(255, 255, 255) 1.2px -2.7px 0.02px, rgb(255, 255, 255) 0.7px 2.9px 0.02px, rgb(255, 255, 255) -2.4px -1.8px 0.02px, rgb(255, 255, 255) 3px -0.1px 0.02px, rgb(255, 255, 255) -2.3px 2px 0.02px, rgb(255, 255, 255) 0.5px -3px 0.02px, rgb(255, 255, 255) 1.4px 2.6px 0.02px, rgb(255, 255, 255) -2.8px -1.2px 0.02px, rgb(255, 255, 255) 2.9px -0.8px 0.02px, rgb(255, 255, 255) -1.7px 2.5px 0.02px, rgb(255, 255, 255) -0.2px -3px 0.02px, rgb(255, 255, 255) 2px 2.2px 0.02px, rgb(255, 255, 255) -3px -0.4px 0.02px, rgb(255, 255, 255) 2.6px -1.5px 0.02px, rgb(255, 255, 255) -1.1px 2.8px 0.02px, rgb(255, 255, 255) -0.9px -2.8px 0.02px, rgb(255, 255, 255) 2.5px 1.6px 0.02px, rgb(255, 255, 255) -3px 0.3px 0.02px, rgb(255, 255, 255) 2.1px -2.1px 0.02px, rgb(255, 255, 255) -0.3px 3px 0.02px;
	}

	nav {
		max-width: 56em;
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
		img {
			max-width: 100px;
		}
		.name {
			margin-bottom: 1.5rem;
		}
		nav {
			margin: 0 auto 1rem;
		}
	}
</style>

<div class="header">
  <img src="/images/logo-192.png" alt="Avatar pic of bramaudi">
	<div class="name">bramaudi</div>
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
