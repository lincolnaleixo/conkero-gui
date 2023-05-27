<script>
  export let form;
</script>

<div class="container-fluid py-5">
  <div class="col-lg-6">
    <div class="form-wrapper">
      <h3 class="mb-15">Selling Partner API</h3>
      <p class="text-sm mb-25">Enter your credentials below</p>
      <form class="mt-4" method="POST">
        <div class="row">
          <div class="col-12">
            <div class="input-style-1">
              <label for="clientId">Client Id</label>
              <input id="clientId" name="clientId" placeholder="Client Id" />
            </div>
          </div>

          <div class="col-12">
            <div class="input-style-1">
              <label for="clientSecret">Client Secret</label>
              <input
                id="clientSecret"
                name="clientSecret"
                placeholder="Client Secret"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="input-style-1">
              <label for="refreshToken">Refresh Token</label>
              <input
                id="refreshToken"
                name="refreshToken"
                placeholder="Refresh Token"
              />
            </div>
          </div>

          {#if form?.error}
            <div class="mb-4" style="color: red;">
              {form?.message}
            </div>{/if}

          <div class="col-12">
            <div
              class="
                            button-group
                            d-flex
                            justify-content-center
                            flex-wrap
                          "
            >
              <button
                class="
                              main-btn
                              primary-btn
                              btn-hover
                              w-100
                              text-center
                            "
              >
                Add Account
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
