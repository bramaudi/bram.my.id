<script context="module">
	export async function preload({ params, query }) {
		const posts = await this.fetch(`blog.json`).then(r => r.json())
		const tags = await this.fetch(`blog/tags.json`).then(r => r.json())
		return { posts, tags }
	}
</script>

<script>
	import Tags from '../components/tags.svelte'
	import PostList from '../components/post-list.svelte'
	export let posts;
	export let tags;
</script>

<svelte:head>
	<title>bramaudi</title>
</svelte:head>

<h3>Recent posts</h3>
<PostList posts={posts.slice(0, 10)} />

<h3>Tags</h3>
<Tags tags={tags.slice(0, 10)} />
... see <a href="blog/tags">more tags</a>.