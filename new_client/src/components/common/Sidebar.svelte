<script>
  import Link from "svelte-link";

  export let settings = false;
  const handleSettingsClick = () => {
    settings = !settings;
  };
</script>

<aside class="sidebar-nav-wrapper">
  <div class="navbar-logo">
    <Link href="/dashboard">
      <h2>Conkero</h2>
    </Link>
  </div>
  <nav class="sidebar-nav">
    <ul>
      <li class="nav-item {settings ? 'nav-item-has-children' : ''}">
        <a
          on:click|preventDefault={handleSettingsClick}
          href="#0"
          data-bs-toggle="collapse"
          data-bs-target="#ddmenu_1"
          aria-controls="ddmenu_1"
          aria-expanded={settings ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span class="icon">
            <i class="ri-tools-line" />
          </span>
          <span class="text">Settings</span>
        </a>
        <ul
          id="ddmenu_1"
          class="collapse {settings ? 'show' : ''} dropdown-nav"
        >
          <li>
            <Link href="/dashboard/general" class="active">General</Link>
          </li>
        </ul>
      </li>

      <li class="nav-item mt-4">
        <Link href="/dashboard/logout">
          <span class="icon">
            <i class="ri-logout-circle-r-line" style="color: red;" />
          </span>
          <span class="text" style="color: red;">Logout</span>
        </Link>
      </li>
    </ul>
  </nav>
</aside>
<div class="overlay" />
