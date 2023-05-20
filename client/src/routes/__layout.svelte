<script>
  import { browser } from "$app/env";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  const publicRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/reset",
    "/auth/logout",
    "/auth/successmessage",
    "/auth/errors/auth-404-basic",
    "/auth/errors/auth-500",
    "/auth/errors/auth-offline",
  ];

  $: isPublic = publicRoutes.includes($page.url.pathname);

  import { addMessages, init } from "svelte-i18n";
  import en from "../lang/en.json";

  import Rightbar from "../Components/Common/RightSidebar.svelte";
  import Footer from "../Layouts/Footer.svelte";
  import Header from "../Layouts/Header.svelte";
  import Sidebar from "../Layouts/Sidebar.svelte";

  let open = false;
  let headerClass = "";
  let layoutType = "vertical";

  addMessages("en", en);

  init({
    fallbackLocale: "en",
    initialLocale: "en",
  });
  onMount(() => {
    if (browser) {
      window.addEventListener("scroll", scrollNavigation, true);
    }
    setTimeout(() => {
      document.getElementById("preloader").style.visibility = "hidden";
      document.getElementById("preloader").style.opacity = "0";
    }, 350);
  });
  function scrollNavigation() {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      headerClass = "topbar-shadow";
    } else {
      headerClass = "";
    }
  }
</script>

<svelte:head>
  <script src="//cdn.jsdelivr.net/npm/apexcharts"></script>
  <script src="//cdn.lordicon.com/xdjxvujz.js"></script>
  <script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
  <script
    src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>
<div id="preloader">
  <div id="status">
    <div class="spinner-border text-primary avatar-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</div>
{#if isPublic}
  <slot />
{:else}
  <div id="layout-wrapper">
    <Header {headerClass} />
    <Sidebar {layoutType} />
    <div class="main-content" id="maincontent">
      <slot />
      <Footer />
    </div>
    <Rightbar bind:open {layoutType} />
  </div>
{/if}

<style lang="scss" global>
  @import "../assets/scss/themes.scss";
</style>
