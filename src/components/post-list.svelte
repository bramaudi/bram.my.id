<script>
	import FullPost from './post/full-post.svelte';
	import QuickPost from './post/quick-post.svelte';
  import Quote from './post/quote.svelte';
  import { beforeUpdate, afterUpdate } from 'svelte';
  import { theme } from '../stores.js';
  export let posts
  
  afterUpdate(() => {
    runIsotope()
  })

  function runIsotope() {
    const grid = document.querySelector('.grid')
    const masonry = new Isotope(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item',
        gutter: 10
      }
    })
  }
</script>

<sapper:head>
  <script src="/js/isotope.pkgd.min.js"></script>
</sapper:head>

<style>
  .grid {
    margin: 1rem auto 0;
    padding: 0
  }
  :global(.grid-item) {
    width: 100%;
  }
  @media (min-width: 784px) {
    .grid {
      margin: 1rem auto;
      padding: 0 0 0 15px;
    }
    :global(.grid-item) { width: calc(50% - 20px); }
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