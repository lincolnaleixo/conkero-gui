<script>
  import { onMount } from "svelte";

  onMount(async () => {
    console.log("redirect component onMount");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    console.log("urlsParams", urlParams);
  });
</script>
