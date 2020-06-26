<script context="module">
	export async function preload({ params, query }) {
		const tags = await this.fetch(`blog/tags.json`).then(r => r.json())
		return { tags }
	}
</script>

<script>
 import Tags from '../../components/tags.svelte'
	export let tags
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="wrapper">
  <h3>Expore by type</h3>

  <li><a href="blog/quotes">Quotes</a></li>
  <li><a href="blog/posts">Posts</a></li>

  <br>

  <h3>Blog Tags</h3>
  <Tags {tags} />
</div>
