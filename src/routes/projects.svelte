<script>
  import { onMount, afterUpdate } from 'svelte';
	import { theme } from './../stores.js';
	import Github from './../components/svg/github.svelte';
	import Link from './../components/svg/link.svelte';
  import projects from '../projects.json';
  let Isotope
  
  onMount(async () => {
    const module = await import('isotope-layout')
    Isotope = module.default
    runIsotope()
  })

  afterUpdate(() => {
    runIsotope()
  })

  function runIsotope() {
    const grid = document.querySelector('.grid')
    Isotope && new Isotope(grid, {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item',
        gutter: 10
      }
    })
  }
</script>

<sapper:head>
  <title>Projects</title>
</sapper:head>

<style>
  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 5px;
    margin: 0 5px 5px 0;
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
    margin-bottom: 2rem;
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
  <div class="grid-item project">
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