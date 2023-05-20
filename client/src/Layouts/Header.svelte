<script>
	import { Form, Input, Dropdown, DropdownMenu, Button } from "sveltestrap";
	import { browser } from "$app/env";

	import SearchOption from "./../Components/Common/SearchOption.svelte";
	import LanguageDropdown from "./../Components/Common/LanguageDropdown.svelte";
	import WebAppsDropdown from "./../Components/Common/WebAppsDropdown.svelte";
	import MyCartDropdown from "./../Components/Common/MyCartDropdown.svelte";
	import FullScreenDropdown from "./../Components/Common/FullScreenDropdown.svelte";
	import NotificationDropdown from "./../Components/Common/NotificationDropdown.svelte";
	import ProfileDropdown from "./../Components/Common/ProfileDropdown.svelte";
	import LightDark from "./../Components/Common/LightDark.svelte";

	import logosm from '../assets/images/logo-sm.png'
	import logodark from '../assets/images/logo-dark.png'
	import logolight from '../assets/images/logo-light.png'
	function toogleMenuBtn() {
		if (browser) {
			var windowSize = document.documentElement.clientWidth;

			if (windowSize > 767)
				document
					.querySelector(".hamburger-icon")
					.classList.toggle("open");

			//For collapse horizontal menu
			if (
				document.documentElement.getAttribute("data-layout") ===
				"horizontal"
			) {
				document.body.classList.contains("menu")
					? document.body.classList.remove("menu")
					: document.body.classList.add("menu");
			}

			//For collapse vertical menu
			if (
				document.documentElement.getAttribute("data-layout") ===
				"vertical"
			) {
				if (windowSize < 1025 && windowSize > 767) {
					document.body.classList.remove("vertical-sidebar-enable");
					document.documentElement.getAttribute(
						"data-sidebar-size"
					) === "sm"
						? document.documentElement.setAttribute(
								"data-sidebar-size",
								""
						  )
						: document.documentElement.setAttribute(
								"data-sidebar-size",
								"sm"
						  );
				} else if (windowSize > 1025) {
					document.body.classList.remove("vertical-sidebar-enable");
					document.documentElement.getAttribute(
						"data-sidebar-size"
					) === "lg"
						? document.documentElement.setAttribute(
								"data-sidebar-size",
								"sm"
						  )
						: document.documentElement.setAttribute(
								"data-sidebar-size",
								"lg"
						  );
				} else if (windowSize <= 767) {
					document.body.classList.add("vertical-sidebar-enable");
					document.documentElement.setAttribute(
						"data-sidebar-size",
						"lg"
					);
				}
			}

			//Two column menu
			if (
				document.documentElement.getAttribute("data-layout") ===
				"twocolumn"
			) {
				document.body.classList.contains("twocolumn-panel")
					? document.body.classList.remove("twocolumn-panel")
					: document.body.classList.add("twocolumn-panel");
			}
		}
	}
</script>

<header id="page-topbar">
	<div class="layout-width">
		<div class="navbar-header">
			<div class="d-flex">
				<!-- LOGO -->
				<div class="navbar-brand-box horizontal-logo">
					<a href="dashboard" class="logo logo-dark">
						<span class="logo-sm">
							<img
								src={logosm}
								alt=""
								height="22"
							/>
						</span>
						<span class="logo-lg">
							<img
								src={logodark}
								alt=""
								height="17"
							/>
						</span>
					</a>

					<a href="dashboard" class="logo logo-light">
						<span class="logo-sm">
							<img
								src={logosm}
								alt=""
								height="22"
							/>
						</span>
						<span class="logo-lg">
							<img
								src={logolight}
								alt=""
								height="17"
							/>
						</span>
					</a>
				</div>

				<button
					type="button"
					class="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
					id="topnav-hamburger-icon"
					on:click={toogleMenuBtn}
				>
					<span class="hamburger-icon">
						<span />
						<span />
						<span />
					</span>
				</button>

				<SearchOption />
			</div>

			<div class="d-flex align-items-center">
				<Dropdown class="d-md-none topbar-head-dropdown header-item">
					<button
						type="button"
						class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
						id="page-header-search-dropdown">
						<i class="bx bx-search fs-22" />
					</button>
					<DropdownMenu
						class="dropdown-menu-lg dropdown-menu-end p-0">
						<Form class="p-3">
							<div class="form-group m-0">
								<div class="input-group">
									<Input
										type="text"
										class="form-control"
										placeholder="Search ..."
									/>
									<Button color="primary" type="submit"
										><i class="mdi mdi-magnify" /></Button
									>
								</div>
							</div>
						</Form>
					</DropdownMenu>
				</Dropdown>

				<LanguageDropdown />

				<WebAppsDropdown />

				<MyCartDropdown />

				<FullScreenDropdown />

				<LightDark />

				<NotificationDropdown />

				<ProfileDropdown />
			</div>
		</div>
	</div>
</header>

<div class="vertical-overlay" />
