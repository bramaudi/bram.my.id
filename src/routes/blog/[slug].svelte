<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Tags from '../../components/tags.svelte'
	export let post;
</script>

<style>
  .post {
    width: calc(100% - 30px);
    float: unset;
    margin: 1rem auto;
  }
  .title {
    font-weight: bold;
    font-size: xx-large;
    margin: 0 0 .4rem;
    line-height: 2.5rem;
  }
  .markdown-body {
    margin-top: 1.3rem;
  }
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="post">
  <div class="heading">
    <div class="title">{post.title}</div>
    <div class="date">{post.date}</div>
    <Tags tags={post.tags} />
  </div>

  <div class='markdown-body'>
    {@html post.html}
  </div>
</div>
