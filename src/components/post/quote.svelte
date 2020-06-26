<script>
  export let post
</script>

<style>
  .tags {
    display: block;
  }
  .tags a {
    text-decoration: none;
    display: inline-block;
    padding: 0;
    margin-right: 4px;
    border-radius: 5px;
    color: cadetblue;
  }
  .author {
    margin: -1.5rem 0 .5rem;
    text-align: right;
  }
</style>

<div class="quote">
  <div class="date">{post.date}</div>

  " <em>{(post.html).replace(/<(.+?)>/g, '')}</em> "

  <div class="tags">
  {#each post.tags as tag}
    <a href="/blog/tags/{tag}">#{tag}</a>
  {/each}
  </div>

  <div class="author">- <strong>{post.author}</strong></div>
</div>