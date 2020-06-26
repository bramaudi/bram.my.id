<script context="module">
  export async function preload() {
    const tags = await this.fetch(`blog/tags.json`).then(r => r.json())
		return { tags }   
  }
</script>

<script>
	import Tags from './tags.svelte';
  export let tags
</script>

<h3>Tags</h3>
<Tags tags={tags.slice(0, 10)} />
... see <a href="blog/tags">more tags</a>.