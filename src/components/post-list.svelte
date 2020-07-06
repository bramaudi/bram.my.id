<script>
	import FullPost from './post/full-post.svelte';
	import QuickPost from './post/quick-post.svelte';
	import Quote from './post/quote.svelte';
  import { theme } from '../stores.js';
  import MagicGrid from 'magic-grid';
  import { onMount } from 'svelte';
  export let posts

  onMount(() => {
    if (window.matchMedia( "(min-width: 784px)" ).matches) {
      // Define static height to fix magicGrid
      const el = document.querySelector('.grid').children
      for (let i = 0; i < el.length; i++) {
        el[i].style.height = (el[i].clientHeight + 20)+'px'
      }
  
      execGrid()
    }
  })

  function execGrid() {
    const magicGrid = new MagicGrid({
      container: '.grid',
      static: true,
      animate: true,
      useMin: true,
      gutter: 10
    })

    magicGrid.listen()
  }
</script>

<style>
  .grid {
    padding-top: 1rem;
  }
  .grid > :global(div) {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 784px) {
    .grid > :global(div) {
      width: calc((55rem / 2) - 20px);
    }
  }
</style>

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