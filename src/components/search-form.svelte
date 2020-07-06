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
	margin: 1rem 0 0;
	padding: 1rem;
  font-size: inherit;
  background: none;
  border: none;
  border-radius: 10px;
  background:#f0f0f0;
  color: #222;
	border: 2px solid #fff;
}
input::placeholder {
  color: #555;
}
.dark input::placeholder {
  color: #888;
}
.dark input {
  background: #333;
  color: #aaa;
	border-color: #555;
}

@media (min-width: 784px) {
  input {
    width: calc(100% - 2rem);
    margin: 1rem;
    margin-bottom: 0;
  }
}
</style>

<form on:submit={(e) => e.preventDefault()} class:dark={$theme === 'dark'}>
	<input
    type="text"
    id="search"
    on:keyup={forward}
    bind:value={keyword}
    placeholder="Search posts ...">
</form>