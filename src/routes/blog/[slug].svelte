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
  import { theme } from '../../stores.js'
  import Tags from '../../components/tags.svelte'
  import { onMount } from 'svelte'
  export let post;
  
  onMount(() => {
    var disqus_config = function () {
    this.page.url = document.URL;
    this.page.identifier = post.slug;
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://bramaudi.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
  })
</script>

<style>
  .post {
    margin: 1rem 0;
  }
  .heading {
    padding-left: 1rem;
    margin-bottom: 2.5rem;
    border-left: 10px dotted #aaa;
  }
  .title {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: bold;
    font-size: xx-large;
    margin: 0 0 .4rem;
    line-height: 2.5rem;
  }
  .markdown-body {
    margin-top: 1.3rem;
  }
  #disqus_thread {
    margin-top: 2rem;
    border-top: 1px dotted #aaa;
  }
  .dark .heading {
    border-color: #555
  }

  @media (min-width: 784px) {
    .post {
      width: calc(100% - 30px);
      float: unset;
    }
  }
</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="post" class:dark={$theme === 'dark'}>
  <div class="heading">
    <div class="title">{post.title}</div>
    <div class="date">{post.date}</div>
    <Tags tags={post.tags} />
  </div>

  <div class='markdown-body'>
    {@html post.html}
  </div>

  <div id="disqus_thread"></div>
</div>
