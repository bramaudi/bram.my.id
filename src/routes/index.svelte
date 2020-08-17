<script>
import { onMount } from "svelte";


let count = 5;

const timer = setInterval(() => {
	count -= 1
	!count && clearInterval(timer)
}, 1000)

onMount(() => {
	setTimeout(() => {
		window.location.href = 'https://bramaudi.github.io'
	}, 5000)
})
</script>

This site has been moved to <a href="https://bramaudi.github.io" rel="dofollow">https://bramaudi.github.io</a>.
<br/>
Automatically redirecting on {count} seconds...