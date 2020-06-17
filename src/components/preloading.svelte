<script>
  import { theme } from '../stores.js'
	import { stores } from '@sapper/app'
  const { preloading } = stores()
  let showDelay = false

  $: if ($preloading) {
    showDelay = false
    setTimeout(() => {
      showDelay = true
    }, 300)
  }
</script>

<style>
div {
  box-sizing: border-box;
  max-width: 56em;
  width: 0;
  margin: 1rem;
  padding: 2px;
  animation: loading 1s forwards;
  border-radius: 1rem;
  border: none;
  background: #a5283a;
}
.hide {
  width: inherit;
  animation: disapear 0s forwards;
}
.dark {
  background: cadetblue;
}

@keyframes disapear {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 0;
  }
  100% {
    position: absolute;
    visibility: hidden;
  }
}

@keyframes loading {
  0% {
    width: 1%;
  }
  20% {
    width: 20%;
  }
  50% {
    width: 25%;
  }
  80% {
    width: 50%;
  }
  85% {
    width: 70%;
  }
  90% {
    width: 80%;
  }
  100% {
    width: 90%;
  }
}
@media only screen and (min-width: 784px) {
  div {
    margin: 2rem calc(100vw - 60em - 4px);
  }
}
</style>

{#if showDelay}
  <div class:dark={$theme === 'dark'} class:hide={!$preloading}> </div>
{/if}