<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import accounts from "../../store/accounts";

  onMount(() => {
    if (!$accounts.length) goto("/auth/addAccount");
  });
</script>
