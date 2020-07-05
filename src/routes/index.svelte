<script context="module">
	import SearchForm from './../components/search-form.svelte';
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts, query };
		});
	}
</script>

<script>
  import { theme } from '../stores.js'
	import PostList from '../components/post-list.svelte'
	import Pagination from '../components/pagination.svelte'
	export let posts
	export let query
	$: current = query.page || 1
  let keyword = ''

  function getKeyword(e) {
    keyword = e.detail.keyword
  }
  
	function filteredPosts(posts, keyword) {
		return posts.filter(post => {
			post = post.title ? post['title'].toLowerCase() : post['html'].toLowerCase()
			return post.indexOf(keyword) > -1; 
		});
	}
</script>

<svelte:head>
	<title>bramaudi</title>
	<script src="js/prism.js"></script>
</svelte:head>

<SearchForm {keyword} on:connect={getKeyword} />

{#if keyword === ''}
	<PostList posts={posts[current -1]} />
{:else}
	<PostList posts={filteredPosts(posts[current -1], keyword)} />
{/if}

<Pagination {current} count={posts.length} />