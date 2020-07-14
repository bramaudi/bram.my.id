<script>
	import Tags from './../tags.svelte';
  export let post
</script>

<div class="grid-item post">
  {#if post.title}
    <h3>{post.title}</h3>
  {/if}
  
  <div class="meta">
    <div class="date">{post.date} &#183; <a href="/blog/{post.slug}#disqus_thread" data-disqus-identifier={post.slug}>0 Komentar</a></div>
    <Tags tags={post.tags} />
  </div>

  <div class="content">
    {@html post.html}
  </div>
</div>