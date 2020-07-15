<script>
  import { theme } from '../../stores.js'
	import Tags from './../tags.svelte';
  export let post
</script>

<style>
  .meta {
    margin: 10px 0;
  }
  .post {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-left: 2rem;
    background: honeydew;
    border-left: 8px dashed #aaa;
  }
  a {
    text-decoration: none;
  }
  h3 {
    display: inline;
    border-bottom: 1px dotted #222;
    font-size: x-large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  .dark {
    border-color: #555
  }
  .dark h3 {
    border-color: #aaa
  }
</style>

<div class="grid-item post" class:dark={$theme === 'dark'}>
  {#if post.title}
  <a rel='prefetch' href='blog/{post.slug}'>
    <h3>{post.title}</h3>
  </a>
  {/if}

  <div class="meta">
    <div class="date">{post.date}</div>
    <Tags tags={post.tags} />
  </div>

  <div class="content">
    {#if post.summary}{post.summary}{/if}
  </div>
</div>