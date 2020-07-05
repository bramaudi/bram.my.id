<script>
	import Tags from './../tags.svelte';
  export let post

  const makeExcerpt = (string, more = '...') => {
    const substrString = string.substr(0, 160)
    const count = string.split('')
    let words = substrString.split(' ')
    if (count[161] !== ' ') {
      words[words.length - 1] = more
      return words.join(' ')
    } else {
      return `${words.join(' ')} ${more}`
    }
  }
</script>

<style>
  .meta {
    margin: 10px 0;
  }
</style>

<div class="post">
  {#if post.title}
    <h3>{post.title}</h3>
  {/if}

  <div class="meta">
    <div class="date">{post.date}</div>
    <Tags tags={post.tags} />
  </div>

  {#if post.summary}
    <div class="content">
      {@html makeExcerpt(post.summary)}
      <a rel='prefetch' href='blog/{post.slug}'>Read more &raquo;</a>
    </div>
  {:else}
    <a rel='prefetch' href='blog/{post.slug}'>Read more ...</a>
  {/if}
</div>