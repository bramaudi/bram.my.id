<script>
  export let post
</script>

<div class="quote">
  <div class="date">{post.date}</div>
  " <em>{(post.html).replace(/<(.+?)>/g, '')}</em> "
  <div style="text-align: right">- <strong>{post.author}</strong></div>
</div>