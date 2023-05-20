<script>
	import { onMount } from "svelte";
	import { browser } from "$app/env";

	onMount(async () => {
		if (browser) {
			const checkbox = document.getElementsByClassName("code-switcher");

			Array.from(checkbox).forEach(function (check) {
				check.addEventListener("change", function () {
					var card = check.closest(".card");
					var preview = card.querySelector(".live-preview");
					var code = card.querySelector(".code-view");
					if (check.checked) {
						// do this
						preview.classList.add("d-none");
						code.classList.remove("d-none");
					} else {
						// do that
						preview.classList.remove("d-none");
						code.classList.add("d-none");
					}
				});
			});
		}
	});
</script>

<div />
