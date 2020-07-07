<script>
	import { theme } from '../stores.js'
  export let current
	export let count
	export let link = ''
</script>

<style>
  div {
    width: max-content;
    margin: 2rem auto 2.5rem;
  }
  a, span {
		text-decoration: none;
		display: inline-block;
		padding: .3rem .8rem;
    margin: 2px;
    border-radius: 10px;
    background: #fff;
	}
	span {
		background: #333333;
    color: #fff;
	}
	.dark a, .dark span {
    background: #888;
    border-color: #333333;
    color: #222222;
	}
	.dark span {
    background: #333333;
    color: #fff;
  }
  
  @media (min-width: 784px) {
    div {
      padding: 0 1rem;
    }
  }
</style>

<div class:dark={$theme === 'dark'}>
	{#if current > 1}
    <a href="{link}?page=1">First</a>
  {:else}
    <span>First</span>
  {/if}

	{#each Array(count) as data, key}
		{#if current == key +1}
			<span>{key +1}</span>
		{:else}
			<a href="{link}?page={key +1}">{key +1}</a>
		{/if}
	{/each}
  
  {#if parseInt(current) !== count}
    <a href="{link}?page={count}">Last</a>
  {:else}
    <span>Last</span>
  {/if}
</div> 