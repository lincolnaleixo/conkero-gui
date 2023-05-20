<script>
  import { onMount } from "svelte";
  export let open = false;
  import { Label, Collapse } from "sveltestrap";
  import { browser } from "$app/env";

  export let layoutType;

  //import Images
  import img01 from "../../assets/images/sidebar/img-1.jpg";
  import img02 from "../../assets/images/sidebar/img-2.jpg";
  import img03 from "../../assets/images/sidebar/img-3.jpg";
  import img04 from "../../assets/images/sidebar/img-4.jpg";

  let leftSidebarType = "light";
  let layoutModeType = "light";
  let layoutWidthType = "lg";
  let layoutPositionType = "fixed";
  let topbarThemeType = "dark";
  let leftsidbarSizeType = "lg";
  let leftSidebarViewType = "detached";
  let leftSidebarTypes = "gradient";
  let leftSidebarImageTypes = "none";

  let isOpen = false;

  function topFunction() {
    if (browser) {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }

  // When the user scrolls down 20px from the top of the document, show the button

  onMount(async () => {
    if (browser) {
      changeLayout(layoutType);
      changeLayoutMode(layoutModeType);
      changeLayoutWidth(layoutWidthType);
      changeLeftsidebarSizeType(leftsidbarSizeType);
      changeLayoutPosition(layoutPositionType);
      changeTopbarTheme(topbarThemeType);
      changeLeftsidebarViewType(leftSidebarViewType);
      changeSidebarTheme(leftSidebarType);

      window.onscroll = function () {
        scrollFunction();
      };
    }
  });

  function changeLayout(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-layout", value);
  }

  function changeLayoutMode(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-layout-mode", value);
  }

  function changeLayoutWidth(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-layout-width", value);
  }

  function changeLeftsidebarSizeType(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-sidebar-size", value);
  }
  function changeLayoutPosition(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-layout-position", value);
  }
  function changeTopbarTheme(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-topbar", value);
  }
  function changeLeftsidebarViewType(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-layout-style", value);
  }
  function changeSidebarTheme(value) {
    if (document.documentElement)
      document.documentElement.setAttribute("data-sidebar", value);
  }

  function changeBodyAttribute(attribute, value) {
    if (document.documentElement)
      document.documentElement.setAttribute(attribute, value);
  }

  function scrollFunction() {
    if (browser) {
      var mybutton = document.getElementById("back-to-top");

      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }
</script>

<div>
  <button
    on:click={topFunction}
    class="btn btn-danger btn-icon"
    id="back-to-top"
  >
    <i class="ri-arrow-up-line" />
  </button>
  <div class="customizer-setting d-none d-md-block">
    <a
      href={null}
      class="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2"
      on:click={() => (open = !open)}
    >
      <i class="mdi mdi-spin mdi-cog-outline fs-22" />
    </a>
  </div>
  <div
    class="offcanvas offcanvas-end border-0 {open === true ? 'show' : ''}"
    id="theme-settings-offcanvas"
    style="visibility: visible;"
    aria-modal="true"
    role="dialog"
  >
    <div
      class="d-flex align-items-center bg-primary bg-gradient p-3 offcanvas-header"
    >
      <h5 class="m-0 me-2 text-white">Theme Customizer</h5>

      <button
        type="button"
        class="btn-close btn-close-white ms-auto"
        on:click={() => (open = false)}
      />
    </div>
    <div class="offcanvas-body p-0">
      <div data-simplebar class="h-100">
        <div class="p-4">
          <h6 class="mt-4 mb-0 fw-semibold text-uppercase">Color Scheme</h6>
          <p class="text-muted">Choose Light or Dark Scheme.</p>

          <div class="colorscheme-cardradio">
            <div class="row">
              <div class="col-4">
                <div class="form-check card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-light"
                    value="light"
                    on:change={() =>
                      changeBodyAttribute("data-layout-mode", "light")}
                    checked={layoutModeType == "light"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-md w-100"
                    for="layout-mode-light"
                  >
                    <span class="d-flex gap-1 h-100">
                      <span class="flex-shrink-0">
                        <span
                          class="bg-light d-flex h-100 flex-column gap-1 p-1"
                        >
                          <span
                            class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                          />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                        </span>
                      </span>
                      <span class="flex-grow-1">
                        <span class="d-flex h-100 flex-column">
                          <span class="bg-light d-block p-1" />
                          <span class="bg-light d-block p-1 mt-auto" />
                        </span>
                      </span>
                    </span>
                  </Label>
                </div>
                <h5 class="fs-13 text-center mt-2">Light</h5>
              </div>

              <div class="col-4">
                <div class="form-check card-radio dark">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-layout-mode"
                    id="layout-mode-dark"
                    value="dark"
                    on:change={() =>
                      changeBodyAttribute("data-layout-mode", "dark")}
                    checked={layoutModeType == "dark"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-md w-100 bg-dark"
                    for="layout-mode-dark"
                  >
                    <span class="d-flex gap-1 h-100">
                      <span class="flex-shrink-0">
                        <span
                          class="bg-soft-light d-flex h-100 flex-column gap-1 p-1"
                        >
                          <span
                            class="d-block p-1 px-2 bg-soft-light rounded mb-2"
                          />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                        </span>
                      </span>
                      <span class="flex-grow-1">
                        <span class="d-flex h-100 flex-column">
                          <span class="bg-soft-light d-block p-1" />
                          <span class="bg-soft-light d-block p-1 mt-auto" />
                        </span>
                      </span>
                    </span>
                  </Label>
                </div>
                <h5 class="fs-13 text-center mt-2">Dark</h5>
              </div>
            </div>
          </div>
          {#if layoutType !== "twocolumn"}
            <div id="layout-width">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">Layout Width</h6>
              <p class="text-muted">Choose Fluid or Boxed layout.</p>

              <div class="row">
                <div class="col-4">
                  <div class="form-check card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-width"
                      id="layout-width-fluid"
                      value="lg"
                      on:change={() =>
                        changeBodyAttribute("data-layout-width", "lg")}
                      checked={layoutWidthType == "lg"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="layout-width-fluid"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Fluid</h5>
                </div>
                <div class="col-4">
                  <div class="form-check card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-width"
                      id="layout-width-boxed"
                      value="boxed"
                      on:change={() =>
                        changeBodyAttribute("data-layout-width", "boxed")}
                      checked={layoutWidthType == "boxed"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100 px-2"
                      for="layout-width-boxed"
                    >
                      <span class="d-flex gap-1 h-100 border-start border-end">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Boxed</h5>
                </div>
              </div>
            </div>

            <div id="layout-position">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">
                Layout Position
              </h6>
              <p class="text-muted">
                Choose Fixed or Scrollable Layout Position.
              </p>

              <div class="btn-group radio" role="group">
                <input
                  type="radio"
                  class="btn-check"
                  name="data-layout-position"
                  id="layout-position-fixed"
                  value="fixed"
                  on:change={() =>
                    changeBodyAttribute("data-layout-width", "fixed")}
                  checked={layoutPositionType == "fixed"}
                />
                <Label class="btn btn-light w-sm" for="layout-position-fixed"
                  >Fixed</Label
                >

                <input
                  type="radio"
                  class="btn-check"
                  name="data-layout-position"
                  id="layout-position-scrollable"
                  value="scrollable"
                  on:change={() =>
                    changeBodyAttribute("data-layout-width", "scrollable")}
                  checked={layoutPositionType == "scrollable"}
                />
                <Label
                  class="btn btn-light w-sm ms-0"
                  for="layout-position-scrollable">Scrollable</Label
                >
              </div>
            </div>
          {/if}

          <h6 class="mt-4 mb-0 fw-semibold text-uppercase">Topbar Color</h6>
          <p class="text-muted">Choose Light or Dark Topbar Color.</p>

          <div class="row">
            <div class="col-4">
              <div class="form-check card-radio h-auto">
                <input
                  class="form-check-input"
                  type="radio"
                  name="data-topbar"
                  id="topbar-color-light"
                  value="light"
                  on:change={() => changeBodyAttribute("data-topbar", "light")}
                  checked={topbarThemeType == "light"}
                />
                <Label
                  class="form-check-label p-0 avatar-md w-100"
                  for="topbar-color-light"
                >
                  <span class="d-flex gap-1 h-100">
                    <span class="flex-shrink-0">
                      <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                        <span
                          class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                        />
                        <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                        <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                        <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                      </span>
                    </span>
                    <span class="flex-grow-1">
                      <span class="d-flex h-100 flex-column">
                        <span class="bg-light d-block p-1" />
                        <span class="bg-light d-block p-1 mt-auto" />
                      </span>
                    </span>
                  </span>
                </Label>
              </div>
              <h5 class="fs-13 text-center mt-2">Light</h5>
            </div>
            <div class="col-4">
              <div class="form-check card-radio">
                <input
                  class="form-check-input"
                  type="radio"
                  name="data-topbar"
                  id="topbar-color-dark"
                  value="dark"
                  on:change={() => changeBodyAttribute("data-topbar", "dark")}
                  checked={topbarThemeType == "dark"}
                />
                <Label
                  class="form-check-label p-0 avatar-md w-100"
                  for="topbar-color-dark"
                >
                  <span class="d-flex gap-1 h-100">
                    <span class="flex-shrink-0">
                      <span class="bg-light d-flex h-100 flex-column gap-1 p-1">
                        <span
                          class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                        />
                        <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                        <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                        <span class="d-block p-1 px-2 pb-0 bg-soft-primary" />
                      </span>
                    </span>
                    <span class="flex-grow-1">
                      <span class="d-flex h-100 flex-column">
                        <span class="bg-primary d-block p-1" />
                        <span class="bg-light d-block p-1 mt-auto" />
                      </span>
                    </span>
                  </span>
                </Label>
              </div>
              <h5 class="fs-13 text-center mt-2">Dark</h5>
            </div>
          </div>
          {#if layoutType === "vertical"}
            <div id="sidebar-size">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">Sidebar Size</h6>
              <p class="text-muted">Choose a size of Sidebar.</p>

              <div class="row">
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-default"
                      value="lg"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar-size", "lg")}
                      checked={leftsidbarSizeType == "lg"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-default"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Default</h5>
                </div>

                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-compact"
                      value="md"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar-size", "md")}
                      checked={leftsidbarSizeType == "md"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-compact"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 bg-soft-primary rounded mb-2"
                            />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Compact</h5>
                </div>

                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-small"
                      value="sm"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar-size", "sm")}
                      checked={leftsidbarSizeType == "sm"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-small"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span class="bg-light d-flex h-100 flex-column gap-1">
                            <span class="d-block p-1 bg-soft-primary mb-2" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Small (Icon View)</h5>
                </div>

                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar-size"
                      id="sidebar-size-small-hover"
                      value="sm-hover"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar-size", "sm-hover")}
                      checked={leftsidbarSizeType == "sm-hover"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-size-small-hover"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span class="bg-light d-flex h-100 flex-column gap-1">
                            <span class="d-block p-1 bg-soft-primary mb-2" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                            <span class="d-block p-1 pb-0 bg-soft-primary" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Small Hover View</h5>
                </div>
              </div>
            </div>

            <div id="sidebar-view">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">Sidebar View</h6>
              <p class="text-muted">Choose Default or Detached Sidebar view.</p>

              <div class="row">
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-style"
                      id="sidebar-view-default"
                      value="default"
                      on:change={() =>
                        changeBodyAttribute("data-layout-style", "default")}
                      checked={leftSidebarViewType == "default"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-view-default"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-light d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Default</h5>
                </div>
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-layout-style"
                      id="sidebar-view-detached"
                      value="detached"
                      on:change={() =>
                        changeBodyAttribute("data-layout-style", "detached")}
                      checked={leftSidebarViewType == "detached"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-view-detached"
                    >
                      <span class="d-flex h-100 flex-column">
                        <span
                          class="bg-light d-flex p-1 gap-1 align-items-center px-2"
                        >
                          <span
                            class="d-block p-1 bg-soft-primary rounded me-1"
                          />
                          <span
                            class="d-block p-1 pb-0 px-2 bg-soft-primary ms-auto"
                          />
                          <span class="d-block p-1 pb-0 px-2 bg-soft-primary" />
                        </span>
                        <span class="d-flex gap-1 h-100 p-1 px-2">
                          <span class="flex-shrink-0">
                            <span
                              class="bg-light d-flex h-100 flex-column gap-1 p-1"
                            >
                              <span
                                class="d-block p-1 px-2 pb-0 bg-soft-primary"
                              />
                              <span
                                class="d-block p-1 px-2 pb-0 bg-soft-primary"
                              />
                              <span
                                class="d-block p-1 px-2 pb-0 bg-soft-primary"
                              />
                            </span>
                          </span>
                        </span>
                        <span class="bg-light d-block p-1 mt-auto px-2" />
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Detached</h5>
                </div>
              </div>
            </div>
          {/if}

          {#if layoutType !== "horizontal"}
            <div id="sidebar-color" class="h-100">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">
                Sidebar Color
              </h6>
              <p class="text-muted">Choose a color of Sidebar.</p>

              <div class="row">
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-light"
                      value="light"
                      on:change={() => {
                        changeBodyAttribute("data-sidebar", "light");
                        isOpen = false;
                      }}
                      checked={leftSidebarType == "light"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-color-light"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-white border-end d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-primary rounded mb-2"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                            <span
                              class="d-block p-1 px-2 pb-0 bg-soft-primary"
                            />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Light</h5>
                </div>
                <div class="col-4">
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-dark"
                      value="dark"
                      on:change={() => {
                        changeBodyAttribute("data-sidebar", "dark");
                        isOpen = false;
                      }}
                      checked={leftSidebarType == "dark"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-md w-100"
                      for="sidebar-color-dark"
                    >
                      <span class="d-flex gap-1 h-100">
                        <span class="flex-shrink-0">
                          <span
                            class="bg-primary d-flex h-100 flex-column gap-1 p-1"
                          >
                            <span
                              class="d-block p-1 px-2 bg-soft-light rounded mb-2"
                            />
                            <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                            <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          </span>
                        </span>
                        <span class="flex-grow-1">
                          <span class="d-flex h-100 flex-column">
                            <span class="bg-light d-block p-1" />
                            <span class="bg-light d-block p-1 mt-auto" />
                          </span>
                        </span>
                      </span>
                    </Label>
                  </div>
                  <h5 class="fs-13 text-center mt-2">Dark</h5>
                </div>
                <div class="col-4">
                  <button
                    on:click={() => {
                      isOpen = !isOpen;
                      changeBodyAttribute("data-sidebar", "gradient");
                    }}
                    class={"btn btn-link avatar-md w-100 p-0 overflow-hidden border" +
                      (isOpen ? " active" : "")}
                    type="button"
                    data-bs-target="#collapseBgGradient"
                  >
                    <span class="d-flex gap-1 h-100">
                      <span class="flex-shrink-0">
                        <span
                          class="bg-vertical-gradient d-flex h-100 flex-column gap-1 p-1"
                        >
                          <span
                            class="d-block p-1 px-2 bg-soft-light rounded mb-2"
                          />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                          <span class="d-block p-1 px-2 pb-0 bg-soft-light" />
                        </span>
                      </span>
                      <span class="flex-grow-1">
                        <span class="d-flex h-100 flex-column">
                          <span class="bg-light d-block p-1" />
                          <span class="bg-light d-block p-1 mt-auto" />
                        </span>
                      </span>
                    </span>
                  </button>
                  <h5 class="fs-13 text-center mt-2">Gradient</h5>
                </div>
              </div>
              <Collapse {isOpen} class="collapse" id="collapseBgGradient">
                <div
                  class="d-flex gap-2 flex-wrap img-switch p-2 px-3 bg-light rounded"
                >
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient"
                      value="gradient"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar", "gradient")}
                      checked={leftSidebarTypes == "gradient"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient"
                      />
                    </Label>
                  </div>
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient-2"
                      value="gradient-2"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar", "gradient-2")}
                      checked={leftSidebarTypes == "gradient-2"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient-2"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient-2"
                      />
                    </Label>
                  </div>
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient-3"
                      value="gradient-3"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar", "gradient-3")}
                      checked={leftSidebarTypes == "gradient-3"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient-3"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient-3"
                      />
                    </Label>
                  </div>
                  <div class="form-check sidebar-setting card-radio">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="data-sidebar"
                      id="sidebar-color-gradient-4"
                      value="gradient-4"
                      on:change={() =>
                        changeBodyAttribute("data-sidebar", "gradient-4")}
                      checked={leftSidebarTypes == "gradient-4"}
                    />
                    <Label
                      class="form-check-label p-0 avatar-xs rounded-circle"
                      for="sidebar-color-gradient-4"
                    >
                      <span
                        class="avatar-title rounded-circle bg-vertical-gradient-4"
                      />
                    </Label>
                  </div>
                </div>
              </Collapse>
            </div>
            <div id="sidebar-img">
              <h6 class="mt-4 mb-0 fw-semibold text-uppercase">
                Sidebar Images
              </h6>
              <p class="text-muted">Choose a image of Sidebar.</p>

              <div class="d-flex gap-2 flex-wrap img-switch">
                <div class="form-check sidebar-setting card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    id="sidebarimg-none"
                    value="none"
                    on:change={() =>
                      changeBodyAttribute("data-sidebar-image", "none")}
                    checked={leftSidebarImageTypes == "none"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-sm h-auto"
                    for="sidebarimg-none"
                  >
                    <span
                      class="avatar-md w-auto bg-light d-flex align-items-center justify-content-center"
                    >
                      <i class="ri-close-fill fs-20" />
                    </span>
                  </Label>
                </div>

                <div class="form-check sidebar-setting card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    id="sidebarimg-01"
                    value="img-1"
                    on:change={() =>
                      changeBodyAttribute("data-sidebar-image", "img-1")}
                    checked={leftSidebarImageTypes == "img-1"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-sm h-auto"
                    for="sidebarimg-01"
                  >
                    <img
                      src={img01}
                      alt=""
                      class="avatar-md w-auto object-cover"
                    />
                  </Label>
                </div>

                <div class="form-check sidebar-setting card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    id="sidebarimg-02"
                    value="img-2"
                    on:change={() =>
                      changeBodyAttribute("data-sidebar-image", "img-2")}
                    checked={leftSidebarImageTypes == "img-2"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-sm h-auto"
                    for="sidebarimg-02"
                  >
                    <img
                      src={img02}
                      alt=""
                      class="avatar-md w-auto object-cover"
                    />
                  </Label>
                </div>
                <div class="form-check sidebar-setting card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    id="sidebarimg-03"
                    value="img-3"
                    on:change={() =>
                      changeBodyAttribute("data-sidebar-image", "img-3")}
                    checked={leftSidebarImageTypes == "img-3"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-sm h-auto"
                    for="sidebarimg-03"
                  >
                    <img
                      src={img03}
                      alt=""
                      class="avatar-md w-auto object-cover"
                    />
                  </Label>
                </div>
                <div class="form-check sidebar-setting card-radio">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="data-sidebar-image"
                    id="sidebarimg-04"
                    value="img-4"
                    on:change={() =>
                      changeBodyAttribute("data-sidebar-image", "img-4")}
                    checked={leftSidebarImageTypes == "img-4"}
                  />
                  <Label
                    class="form-check-label p-0 avatar-sm h-auto"
                    for="sidebarimg-04"
                  >
                    <img
                      src={img04}
                      alt=""
                      class="avatar-md w-auto object-cover"
                    />
                  </Label>
                </div>
              </div>
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="offcanvas-footer border-top p-3 text-center">
      <div class="row">
        <div class="col-12">
          <a
            href="https://1.envato.market/Conkero-admin"
            type="button"
            class="btn btn-primary w-100">Preview</a
          >
        </div>
      </div>
    </div>
  </div>
</div>
{#if open}
  <div class="offcanvas-backdrop fade show" />
{/if}
