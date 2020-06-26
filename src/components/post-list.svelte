<script>
	import FullPost from './post/full-post.svelte';
	import QuickPost from './post/quick-post.svelte';
	import Quote from './post/quote.svelte';
  import { theme } from '../stores.js'
  export let posts
</script>

<style>
  div {
    margin-top: 1rem;
  }
  div::after {
    display: block;
    content: '';
    clear: both;
  }
</style>

<div class:dark={$theme === 'dark'}>
	{#if !posts.length}
		<div class="wrapper">There is no posts found.</div>
	{/if}
  {#each posts as post}
    {#if post.type === 'quote'}
      <Quote {post} />
    {:else if post.type === 'post'}
      <FullPost {post} />
    {:else if post.type === 'quick'}
      <QuickPost {post} />
    {/if}
  {/each}
</div>