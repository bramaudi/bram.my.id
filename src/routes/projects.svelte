<svelte:head>
  <title>Projects</title>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  import MagicGrid from 'magic-grid';
	import { theme } from './../stores.js';
	import Github from './../components/svg/github.svelte';
	import Link from './../components/svg/link.svelte';
  import projects from '../projects.json';

  onMount(() => {
    if (window.matchMedia( "(min-width: 784px)" ).matches) {
      // Define static height to fix magicGrid
      const el = document.querySelector('.grid').children
      for (let i = 0; i < el.length; i++) {
        el[i].style.height = (el[i].clientHeight + 20)+'px'
      }
  
      execGrid()
    }
  })

  function execGrid() {
    let magicGrid = new MagicGrid({
      container: '.grid',
      static: true,
      animate: true,
      useMin: true,
      gutter: 10
    })

    magicGrid.listen()
  }
</script>

<style>
  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 5px;
    border-radius: 5px;
    background: #ddd;
  }
  .dark .project {
    background: #333;
    border-color: #555
  }
  .dark a {
    background: #555;
  }

  .grid {
    padding-top: 1rem;
  }
  .project {
    width: 100%;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    display: flex;
    background: #fff;
  }
  .p-info,
  .p-logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .p-logo {
    width: 100px;
    height: 100px;
    margin: 0 20px 0 0;
  }
  .p-logo img {
    max-width: unset;
    width: 100px;
    height: 100px;
    display: block;
  }

  @media (min-width: 784px) {
    .project {
      width: calc((55rem / 2) - 20px);
    }
    .p-logo {
      width: 150px;
      height: 150px;
    }
    .p-logo img {
      width: 100px;
      height: 100px;
    }
  }
</style>

<div class="grid" class:dark={$theme === 'dark'}>
{#each projects as project}
  <div class="project">
    <div class="p-logo">
      <img src={project.logo} alt="Logo">
    </div>
    <div class="p-info">
      <div>
        <h4>{project.name}</h4>
        <p>{project.info}</p>
        <a rel="nofollow" target="_blank" href="{project.url}" class="visit"><Link /> Website</a>
        <a rel="nofollow" target="_blank" href="{project.repo}" class="repo"><Github /> Source Code</a>
      </div>
    </div>
  </div>
{/each}
</div>