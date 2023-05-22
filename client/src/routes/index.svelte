<script>
  import { goto } from "$app/navigation";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import token from "../store/token";

  onMount(() => {
    const tokenCookie = Cookies.get("token");

    if (tokenCookie) {
      goto("/dashboard");
      token.set(tokenCookie);
    } else goto("/auth/register");
  });
</script>
