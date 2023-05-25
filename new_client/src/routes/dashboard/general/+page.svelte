<script>
  import { page } from "$app/stores";
  import { adsInit } from "../../../services/api";

  export let user = $page.data.user;

  const handleAds = async () => {
    const response = await adsInit();
    if (!response.error) window.location.href = response.data;
  };
</script>

<div class="container-fluid py-5">
  <h2 class="mb-2">Accounts</h2>
  <button
    type="button"
    disabled={user.sp}
    class={`btn ${
      user.sp ? "btn-outline-primary" : "btn-outline-dark"
    } btn-label rounded-pill`}
    >{#if user.sp}
      <i
        class="ri-checkbox-circle-fill label-icon align-middle rounded-pill fs-0 me-0"
      />
    {:else}
      <i class="ri-add-fill label-icon align-middle rounded-pill fs-0 me-0" />
    {/if}
    Selling Partner API (SP-API)</button
  >
  <button
    disabled={user.ads}
    on:click={handleAds}
    type="button"
    class={`btn m-1 ${
      user.ads ? "btn-outline-primary" : "btn-outline-dark"
    } btn-label rounded-pill`}
  >
    {#if user.ads}
      <i
        class="ri-checkbox-circle-fill label-icon align-middle rounded-pill fs-0 me-0"
      />
    {:else}
      <i class="ri-add-fill label-icon align-middle rounded-pill fs-0 me-0" />
    {/if}
    Advertising API (PPC)</button
  >
</div>
