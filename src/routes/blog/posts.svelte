<script context="module">
	export async function preload({ params, query }) {
    const posts = await this.fetch(`blog/posts.json`).then(r => r.json())
		return { posts, query }
	}
</script>

<script>
	import PostList from './../../components/post-list.svelte';
	import Pagination from './../../components/pagination.svelte';
  export let posts
  export let query
  $: current = query.page || 1
</script>

<PostList posts={posts[current -1]} />

<Pagination {current} count={posts.length} />
