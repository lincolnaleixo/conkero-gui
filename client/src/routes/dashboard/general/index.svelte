<script>
  import { Container } from "sveltestrap";
  import { adsInit } from "../../../services/api";
  import user from "../../../store/user";

  const handleAds = async () => {
    const response = await adsInit();
    console.log("response", response);
    if (!response.error) window.location.href = response.data;
  };
</script>

<div class="page-content">
  <Container fluid>
    <div>
      <h3>Accounts</h3>
      <button
        type="button"
        disabled={$user.sp}
        class={`btn m-1 ${
          $user.sp ? "btn-outline-primary" : "btn-outline-dark"
        } btn-label rounded-pill`}
        >{#if $user.sp}
          <i
            class="ri-checkbox-circle-fill label-icon align-middle rounded-pill fs-2 me-2"
          />
        {:else}
          <i
            class="ri-add-fill label-icon align-middle rounded-pill fs-2 me-2"
          />
        {/if}
        Selling Partner API (SP-API)</button
      >
      <button
        disabled={$user.ads}
        on:click={handleAds}
        type="button"
        class={`btn m-1 ${
          $user.ads ? "btn-outline-primary" : "btn-outline-dark"
        } btn-label rounded-pill`}
      >
        {#if $user.ads}
          <i
            class="ri-checkbox-circle-fill label-icon align-middle rounded-pill fs-2 me-2"
          />
        {:else}
          <i
            class="ri-add-fill label-icon align-middle rounded-pill fs-2 me-2"
          />
        {/if}
        Advertising API (PPC)</button
      >
    </div>
  </Container>
</div>
