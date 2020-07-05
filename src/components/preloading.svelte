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
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 0;
  height: 5px;
  animation: loading 2s forwards;
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
    width: 75%;
  }
  100% {
    width: 85%;
  }
}
@media only screen and (max-width: 500px) {
  @keyframes loading {
    100% {
      width: 70vw;
    }
  }
}
@media only screen and (min-width: 784px) {
  div {
    
  }
}
</style>

{#if showDelay}
  <div class:dark={$theme === 'dark'} class:hide={!$preloading}></div>
{/if}