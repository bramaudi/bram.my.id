<script>
  import { theme } from '../stores.js'
  export let tags
</script>

<style>
.tags a {
	display: inline-block;
	text-decoration: none;
	padding: .1rem .3rem;
	margin: .4rem .4rem 0 0;
	border-radius: 3px;
	background: #565656;
	color: #fff;
}
.tags.dark a {
  background: #454545;
  color: #ffffff;
}
</style>

<div class="tags" class:dark={$theme === 'dark'}>
  {#each tags as tag}
    <a href="blog/tags/{tag}">#{tag}</a>
  {/each}
</div>