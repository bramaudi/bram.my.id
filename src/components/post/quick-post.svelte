<svelte:head>
  <script src="js/prism.js"></script>
	<link rel="stylesheet" href="css/prism.css">
	<link rel="stylesheet" href="css/markdown.css">
</svelte:head>

<script>
	import Tags from './../tags.svelte';
  export let post
</script>

<div class="post">
  {#if post.title}
    <h3>{post.title}</h3>
  {/if}
  
  <div class="meta">
    <div class="date">{post.date}</div>
    <Tags tags={post.tags} />
  </div>

  <div class="content">
    {@html post.html}
  </div>
</div>