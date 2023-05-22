<script>
  import ErrorPage from "./__error.svelte";

  let error = null;

  import { goto } from "$app/navigation";
  import Cookies from "js-cookie";
  import { onMount } from "svelte";
  import { getUserWithToken } from "../services/api";
  import token from "../store/token";
  import user from "../store/user";

  onMount(async () => {
    const tokenCookie = Cookies.get("token");
    if (tokenCookie) {
      token.set(tokenCookie);
      const response = await getUserWithToken(tokenCookie);
      if (!response.error) {
        user.set(response.data);
        if (
          window.location.href &&
          window.location.href.split("/")[3].length !== 0 &&
          (window.location.href.split("/")[3] !== "auth" ||
            window.location.href.includes("redirect"))
        ) {
          goto(window.location.href);
        } else {
          goto("/dashboard");
        }
      }
    } else goto("/auth/register");
  });

  onMount(() => {
    // Handle any uncaught errors
    window.onerror = function (message, source, lineno, colno, error) {
      // Set the error to be displayed
      // You can customize this logic based on your requirements
      error = true;
    };
  });

  import { browser } from "$app/env";
  import { page } from "$app/stores";

  const publicRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/forgot",
    "/auth/reset",
    "/auth/addAccount",
    "/auth/logout",
    "/auth/successmessage",
    "/auth/sp/redirect",
    "/auth/ads/redirect",
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
    // if (browser) {
    //   window.addEventListener("scroll", scrollNavigation, true);
    // }
    setTimeout(() => {
      document.getElementById("preloader").style.visibility = "hidden";
      document.getElementById("preloader").style.opacity = "0";
    }, 350);
  });
  // function scrollNavigation() {
  //   var scrollup = document.documentElement.scrollTop;
  //   if (scrollup > 50) {
  //     headerClass = "topbar-shadow";
  //   } else {
  //     headerClass = "";
  //   }
  // }
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

{#key error}
  {#if error}
    <ErrorPage />
  {:else if isPublic}
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
{/key}

<style lang="scss" global>
  @import "../assets/scss/themes.scss";
</style>
