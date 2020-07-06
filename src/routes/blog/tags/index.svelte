<script context="module">
	export async function preload({ params, query }) {
		const tags = await this.fetch(`blog/tags.json`).then(r => r.json())
		return { tags }
	}
</script>

<script>
	import Tags from '../../../components/tags.svelte'
	export let tags
</script>

<svelte:head>
<title>Tags</title>
</svelte:head>

<div class="wrapper">
  <h3>Blog Tags</h3>
  <Tags {tags} />
</div>