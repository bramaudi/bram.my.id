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
    margin: auto;
		padding: 0;
  }

	ul {
		display: flex;
		font-weight: bold;
		padding: 0 1rem;
		margin: 1rem 1rem 0;
		border-radius: 10px;
		color: #fff;
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

	li:first-child {
		margin-left: auto;
	}

	li:last-child {
		margin-right: auto;
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

	a, span {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	span {
		cursor: pointer;
	}

	/* Dark */
	.dark [aria-current]::after {
		background: cadetblue
	}
	.dark span {
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
      padding: 0;
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
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
		<li><a rel=prefetch aria-current="{segment === 'projects' ? 'page' : undefined}" href="projects">projects</a></li>
    <li><span on:click={toggleTheme} type="button">{$theme}</span></li>
	</ul>
</nav>
