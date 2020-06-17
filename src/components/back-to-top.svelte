<script>
  import { theme } from '../stores.js'
  import { onMount } from 'svelte'
  let hide = true

  onMount(() => {
    window.onscroll = () => {
      if (pageYOffset >= 300) {
        hide = false
      } else {
        hide = true
      }
    }
  })

  function backToTop() {
    window.scrollTo(0,0)
  }
</script>

<style>
.back-to-top {
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  content: ' \25B2';
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 1;
  bottom: -25px;
  left: 50%;
  margin-left: -25px;
  display: block;
  transition: bottom .5s ease-in-out;
  border-radius: 100%;
  background: cadetblue;
  box-shadow: 0 0 8px 2px rgba(0,0,0,0.2);
}
span {
  display: block;
  width: 10px;
  position: absolute;
  top: 15px;
  right: 15px;
  transform: rotate(45deg);
  border: 1px solid #000000;
}
span + span {
  left: 15px;
  transform: rotate(-45deg);
}
.back-to-top.hide {
  bottom: -100px
}
.back-to-top.dark {
  background: #333;
  box-shadow: 0 0 8px 2px rgba(0,0,0,0.5);
}
.back-to-top.dark span {
  border-color: #fff;
}
</style>

<div on:click={backToTop} class="back-to-top" class:hide={hide} class:dark={$theme === 'dark'}>
  <span></span>
  <span></span>
</div>