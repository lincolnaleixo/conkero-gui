<script>
    import { browser } from "$app/env";
    
    function setLayoutMode(mode, modeType, modeTypeId, html) {
    var isModeTypeId = document.getElementById(modeTypeId);
    html.setAttribute(mode, modeType);
    if (isModeTypeId) {
      document.getElementById(modeTypeId).click();
    }
  }

    function onChangeLayoutMode() {
        if (browser) {
            var html = document.getElementsByTagName("HTML")[0];
            html.hasAttribute("data-layout-mode") &&
            html.getAttribute("data-layout-mode") == "dark"
                ? setLayoutMode(
                      "data-layout-mode",
                      "light",
                      "layout-mode-light",
                      html
                  )
                : setLayoutMode(
                      "data-layout-mode",
                      "dark",
                      "layout-mode-dark",
                      html
                  );
        }
    }
</script>

<div class="ms-1 header-item d-none d-sm-flex">
    <button
        type="button"
        class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
        on:click={onChangeLayoutMode}
    >
        <i class="bx bx-moon fs-22" />
    </button>
</div>
