<script>
  import { page } from "$app/stores";
  import NotFoundScreen from "../components/errors/NotFoundScreen.svelte";
  import OfflineScreen from "../components/errors/OfflineScreen.svelte";
  import ServerErrorScreen from "../components/errors/ServerErrorScreen.svelte";
</script>

{#if $page?.status == 404}
  <NotFoundScreen />
{:else if $page?.status === 500}
  <ServerErrorScreen />
{:else}
  <OfflineScreen />
{/if}
