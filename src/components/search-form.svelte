<script>
  import { theme } from '../stores.js'
  import { createEventDispatcher } from 'svelte'
  export let keyword
  const dispatch = createEventDispatcher()

  function forward(e) {
    dispatch('connect', {
      keyword
    })
  }
</script>

<style>
input {
  position: relative;
  width: 100%;
  outline: none;
	margin: 1rem 0 1rem;
	padding: 1rem;
  font-size: inherit;
  background: none;
  border: none;
  color: #fff;
	border-bottom: 1px solid cadetblue;
}
input::placeholder {
  color: #555;
}
.dark input::placeholder {
  color: #888;
}
.dark input {
	border-color: #333333;
}

@media (min-width: 784px) {
  input {
    width: calc(100% - 2rem);
    margin: 1rem
  }
}
</style>

<form class:dark={$theme === 'dark'}>
	<input
    type="text"
    id="search"
    on:keyup={forward}
    bind:value={keyword}
    placeholder="Search posts ...">
</form>