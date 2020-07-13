<script>
	import Tags from './../tags.svelte';
  export let post
</script>

<style>
  .meta {
    margin: 10px 0;
  }
</style>

<div class="grid-item post">
  {#if post.title}
    <h3>{post.title}</h3>
  {/if}

  <div class="meta">
    <div class="date">{post.date}</div>
    <Tags tags={post.tags} />
  </div>

  <div class="content">
    {#if post.summary}{post.summary}{/if}
    <a rel='prefetch' href='blog/{post.slug}'>Read more &raquo;</a>
  </div>
</div>