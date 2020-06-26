<svelte:head>
  <link rel="stylesheet" href="/css/prism.css">
  <script src="/js/prism.js"></script>
</svelte:head>

<script>
	import Tags from './../tags.svelte';
  export let post
</script>

<div class="post">
  {#if post.title}
    <h3>{post.title}</h3>
  {/if}
  
  <Tags tags={post.tags} />

  <div class="content">
    {@html post.html}
  </div>
</div>