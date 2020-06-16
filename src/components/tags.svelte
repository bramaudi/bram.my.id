<script>
  export let tags
</script>

<div class="tags">
  {#each tags as tag}
    <a href="blog/tags/{tag}">#{tag}</a>
  {/each}
</div>