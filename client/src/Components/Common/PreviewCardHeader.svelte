<script>
	import { CardHeader, Label } from "sveltestrap";
	export let title;
</script>

<CardHeader class="align-items-center d-flex">
	<h4 class="card-title mb-0 flex-grow-1">{title}</h4>
	<div class="flex-shrink-0">
		<div class="form-check form-switch form-switch-right form-switch-md">
			<Label class="form-label text-muted">Show Code</Label>
			<input class="form-check-input code-switcher" type="checkbox" />
		</div>
	</div>
</CardHeader>
