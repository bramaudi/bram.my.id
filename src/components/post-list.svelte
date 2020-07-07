<script>
	import FullPost from './post/full-post.svelte';
	import QuickPost from './post/quick-post.svelte';
  import Quote from './post/quote.svelte';
  import { onMount, afterUpdate } from 'svelte';
  import { theme } from '../stores.js';
  export let posts
  let Isotope
  
  onMount(async () => {
    const module = await import('isotope-layout')
    Isotope = module.default
    runIsotope()
  })

  afterUpdate(() => {
    runIsotope()
  })

  function runIsotope() {
    const grid = document.querySelector('.grid')
    Isotope && new Isotope(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item',
        gutter: 10
      }
    })
  }
</script>

<div class:dark={$theme === 'dark'}>
	{#if !posts.length}
		<div class="wrapper">There is no posts found.</div>
	{/if}
  <div class="grid">
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
</div>