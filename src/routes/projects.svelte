<svelte:head>
  <title>Projects</title>
</svelte:head>

<script>
	import { theme } from './../stores.js';
	import Github from './../components/svg/github.svelte';
	import Link from './../components/svg/link.svelte';
  import { projects } from '../config.json'
</script>

<style>
  h3 {
    padding: 1rem 1rem 0;
  }
  .wrapper {
    padding-bottom: 0;
  }
  .project {
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #ddd;
  }
  .project:last-child {
    border: none;
    margin-bottom: 0;
  }
  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 5px;
    border-radius: 5px;
    background: #ddd;
  }
  .dark .project {
    border-color: #555
  }
  .dark a {
    background: #555;
  }
</style>

<h3>Projects</h3>

<div class="wrapper" class:dark={$theme === 'dark'}>
{#each projects as project}
  <div class="project">
    <h4>{project.name}</h4>
    <p>{project.info}</p>
    <a rel="nofollow" target="_blank" href="{project.url}" class="visit"><Link /> Website</a>
    <a rel="nofollow" target="_blank" href="{project.repo}" class="repo"><Github /> Source Code</a>
  </div>
{/each}
</div>