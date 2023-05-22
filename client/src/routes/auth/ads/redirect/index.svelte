<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { authorizeAds, updateUser } from "../../../../services/api";
  import token from "../../../../store/token";
  import user from "../../../../store/user";

  onMount(async () => {
    console.log("redirect component onMount");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");
    if (code && $user._id) {
      const adsResponse = await authorizeAds({ code, userId: $user._id });
      if (adsResponse.error) return;
      const userResponse = await updateUser(
        {
          ads: adsResponse.data._id,
        },
        $token
      );
      if (userResponse.error) return;
      console.log("userResponse", userResponse);
      user.set(userResponse.data);
      goto("/dashboard");
    }
  });
</script>
