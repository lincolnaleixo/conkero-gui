<script>
  import { onMount } from "svelte";

  onMount(async () => {
    console.log("redirect component onMount");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const error = urlParams.get("error_description");
    console.log("error", error);
  });
</script>
