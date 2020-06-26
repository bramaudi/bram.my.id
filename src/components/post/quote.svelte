<script>
  export let post
</script>

<svelte:head>
  <link rel="stylesheet" href="/css/markdown.css">
</svelte:head>

<div class="quote">
  <div class="date">{post.date}</div>
  " <em>{(post.html).replace(/<(.+?)>/g, '')}</em> "
  <div style="text-align: right">- <strong>{post.author}</strong></div>
</div>