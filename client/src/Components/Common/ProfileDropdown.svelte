<script>
  import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
  } from "sveltestrap";
  import avatar1 from "../../assets/images/users/avatar-1.jpg";
</script>

<Dropdown class="ms-sm-3 header-item topbar-user">
  <DropdownToggle
    type="button"
    color=""
    class="btn"
    id="page-header-user-dropdown p-0"
  >
    <span class="d-flex align-items-center">
      <img
        class="rounded-circle header-profile-user"
        src={avatar1}
        alt="Header Avatar"
      />
      <span class="text-start ms-xl-2">
        <span class="d-none d-xl-inline-block ms-1 fw-medium user-name-text"
          >Anna Adame</span
        >
        <span class="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text"
          >Founder</span
        >
      </span>
    </span>
  </DropdownToggle>
  <DropdownMenu class="dropdown-menu-end" end>
    <!-- item-->
    <h6 class="dropdown-header">Welcome Anna!</h6>
    <DropdownItem href="/pages/profile/simple/simplepage"
      ><i class="mdi mdi-account-circle text-muted fs-16 align-middle me-1" />
      <span class="align-middle">Profile</span></DropdownItem
    >
    <DropdownItem href="/apps-chat"
      ><i
        class="mdi mdi-message-text-outline text-muted fs-16 align-middle me-1"
      />
      <span class="align-middle">Messages</span></DropdownItem
    >
    <DropdownItem href="/tasks/apps-tasks-kanban"
      ><i
        class="mdi mdi-calendar-check-outline text-muted fs-16 align-middle me-1"
      />
      <span class="align-middle">Taskboard</span></DropdownItem
    >
    <DropdownItem href="/pages/faqs/pages-faqs"
      ><i class="mdi mdi-lifebuoy text-muted fs-16 align-middle me-1" />
      <span class="align-middle">Help</span></DropdownItem
    >
    <div class="dropdown-divider" />
    <DropdownItem href="/pages/profile/simple/simplepage"
      ><i class="mdi mdi-wallet text-muted fs-16 align-middle me-1" />
      <span class="align-middle">Balance : <b>$5971.67</b></span></DropdownItem
    >
    <DropdownItem href="/pages/profile/simple/simplepage"
      ><span class="badge bg-soft-success text-success mt-1 float-end">New</span
      ><i class="mdi mdi-cog-outline text-muted fs-16 align-middle me-1" />
      <span class="align-middle">Settings</span></DropdownItem
    >
    <DropdownItem href="/auth/lockscreen/auth-lockscreen-basic"
      ><i class="mdi mdi-lock text-muted fs-16 align-middle me-1" />
      <span class="align-middle">Lock screen</span></DropdownItem
    >
    <DropdownItem href="/auth/logout/auth-logout-basic"
      ><i class="mdi mdi-logout text-muted fs-16 align-middle me-1" />
      <span class="align-middle" data-key="t-logout">Logout</span></DropdownItem
    >
  </DropdownMenu>
</Dropdown>
