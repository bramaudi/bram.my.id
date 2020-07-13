<script>
	import { onMount } from 'svelte';
	import { theme } from '../stores.js';
	import BackToTop from '../components/back-to-top.svelte';
	import Nav from '../components/nav.svelte';;
	import Preloading from '../components/preloading.svelte';

	onMount(() => {
		const ls = window.localStorage
		if (ls.getItem('theme')) {
			$theme = ls.getItem('theme')
		} else {
			ls.setItem('theme', $theme)
		}
	})

	export let segment;
</script>

<style>
	main {
		max-width: 55em;
    margin: 0 1rem 1rem;
    padding: 0;
		box-sizing: border-box;
		border-radius: 1rem;
	}

	@media only screen and (min-width: 784px) {
		main {
      margin: 0 auto;
      padding-left: 0;
		}
	}
</style>

<svelte:head>
	{#if $theme === 'dark'}
	<style>
	::-webkit-scrollbar-track {
		background: #333333;
	}
	::-webkit-scrollbar-thumb {
		background: #888888;
	}
	::-webkit-scrollbar-thumb:hover {
		background: #696969;
	}

	html {
		background: #242424;
		color: #dedede;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #fff;
	}

	table th, table td {
		border: 1px solid #333333;
	}
	table tr {
		background-color: #242424 !important;
		border-top: 1px solid #dedede !important;
	}
	table tr:nth-child(2n) {
		background-color: #292929 !important;
	}

	blockquote {
		color: #797979 !important;
		border-color: #555555 !important;
	}

	blockquote code {
		color: #dedede !important;
	}

	code {
		background: #506475 !important;
	}
	pre > code {
		background: inherit !important;
  }

  .wrapper {
    background: #333
  }
  
  .post,.quote,.quick {
    background: #333 !important
	}
	
	.post .content a, .quick .content a { color: cadetblue !important;}
	.post .content em, .quick .content em, .quote em em  { color: aquamarine !important;}
	.post .content strong, .quick .content strong, .quote em strong { color: darkcyan !important;}

  .quote {
    border-color: #454545;
    box-shadow: inset 0 0 20px 5px #222;
	}
	
	h3.subtitle:before {
    color: cadetblue
  }
  h3.subtitle {
    color: #aaa
  }
	</style>
	{/if}
</svelte:head>

<BackToTop />
<Nav {segment}/>

<Preloading />
<main class:dark={$theme === 'dark'}>
	<slot></slot>
</main>