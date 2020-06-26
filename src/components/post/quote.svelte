<script>
	import { theme } from './../../stores.js';

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
    color: #a5283a
  }
  .author {
    margin: -1.5rem 0 .5rem;
    text-align: right;
  }
  .dark .tags a {
    color: cadetblue;
  }
</style>

<div class="quote" class:dark={$theme === 'dark'}>
  <div class="date">{post.date}</div>

  " <em>{(post.html).replace(/<(.+?)>/g, '')}</em> "

  <div class="tags">
  {#each post.tags as tag}
    <a href="/blog/tags/{tag}">#{tag}</a>
  {/each}
  </div>

  <div class="author">- <strong>{post.author}</strong></div>
</div>