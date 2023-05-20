<script>
	export let code,id;
	import { onMount } from "svelte";

	import { browser } from "$app/env";
	onMount(async () => {
		if (browser) {
}			document.getElementById(id).insertAdjacentText('beforeend',code);
	});
</script>

<pre class="language-markup" style="max-height: 352px;" tabindex="0"><code class="language-markup" id={id}></code></pre>