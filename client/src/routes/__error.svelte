<script context="module">
  export function load({ error, status }) {
    console.log("error", error, status);
    return {
      props: {
        status, // same as status: status
      },
    };
  }

  // onMount(() => {
  //   console.log("inside on load");
  //   document.getElementById("preloader").style.visibility = "hidden";
  //   document.getElementById("preloader").style.opacity = "0";
  // });
</script>

<script>
  import NotFoundScreen from "../Components/Errors/NotFoundScreen.svelte";
  import OfflineScreen from "../Components/Errors/OfflineScreen.svelte";
  import ServerErrorScreen from "../Components/Errors/ServerErrorScreen.svelte";

  export let status;
</script>

{#if status == 404}
  <!-- Used '==' instead of '===' to match string/number status code (just to be sure) -->
  <NotFoundScreen />
{:else if status === 500}
  <ServerErrorScreen />
{:else}
  <OfflineScreen />
{/if}
