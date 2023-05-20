<script>
	import { onMount } from "svelte";
	import { Container } from "sveltestrap";
	import data from "./LayoutMenuData";
	import Link from "svelte-link";
	import logoSm from "../assets/images/logo-sm.png";
	import { _ } from "svelte-i18n";
	import { browser } from "$app/env";
	import { page } from "$app/stores";
	import VerticalLayout from "./VerticalLayout.svelte";

	const navData = data.Navdata;

	var pathName = "";

	let current = "";
	let current_child = "";
	let current_subchild = "";
	let current_sub_subchild = "";

	const removeActivation = (items, target = null) => {
		let activeItems = items.filter((x) => x.classList.contains("active"));
		activeItems.forEach((item) => {
			if (item.classList.contains("menu-link")) {
				if (!item.classList.contains("active")) {
					item.setAttribute("aria-expanded", false);
				}
				item.nextElementSibling.classList.remove("show");
			}
			if (item.classList.contains("nav-link")) {
				if (item.nextElementSibling) {
					item.nextElementSibling.classList.remove("show");
				}
				item.setAttribute("aria-expanded", false);
			}
			item.classList.remove("active");
		});
		if (browser) {
			const ul = document.getElementById("two-column-menu");
			const iconItems = ul.getElementsByTagName("a");
			let itemsArray = [...iconItems];
			let activeIconItems = itemsArray.filter((x) =>
				x.classList.contains("active")
			);
			activeIconItems.forEach((item) => {
				item.classList.remove("active");
				var id = item.getAttribute("subitems");
				if (document.getElementById(id))
					document.getElementById(id).classList.remove("show");
			});
		}

		// setTimeout(() => {
		if (target && typeof target != undefined) {
			if (target.getAttribute("subitems")) {
				var subitem = target.getAttribute("subitems");
				target.classList.add("active");
				document.getElementById(subitem)
					? document.getElementById(subitem).classList.add("show")
					: "";
			} else {
				activateParentDropdown(target);
				target.nextElementSibling
					? target.nextElementSibling.classList.add("show")
					: "";
			}
		}
		// }, 0);
	};

	function activateParentDropdown(item) {
		item.classList.add("active");
		let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

		if (parentCollapseDiv) {
			// to set aria expand true remaining
			parentCollapseDiv.classList.add("show"); // 1st parent
			// parentCollapseDiv.setAttribute("aria-expanded", "true");
			var parent = parentCollapseDiv.parentElement;
			var children = parentCollapseDiv.getAttribute("childitem");
			if(children) {
				document.getElementById(children).classList.add("active");
				document.getElementById(children).setAttribute("aria-expanded", "true");
			} else {
				(parentCollapseDiv.parentElement.children[0]) ? parentCollapseDiv.parentElement.children[0].classList.add("active") : "";
				(parentCollapseDiv.parentElement.children[0]) ? parentCollapseDiv.parentElement.children[0].setAttribute("aria-expanded", "true") : "";
				
			}
			if (parent.closest(".collapse.menu-dropdown")) {
				parent.closest(".collapse.menu-dropdown").classList.add("show"); // 2nd parent
				parent.closest(".collapse.menu-dropdown").setAttribute("aria-expanded", "true");
				var parentElementDiv = parent.closest(".collapse.menu-dropdown");
				if (parentElementDiv) {
					parentElementDiv.classList.add("show");
					parentElementDiv.parentElement.children[0].setAttribute("aria-expanded", "true");
					parentElementDiv.parentElement.children[0].classList.add("active");
					if(parentElementDiv.parentElement.closest(".collapse.menu-dropdown")) {
						var parentParent = parentElementDiv.parentElement.closest(".collapse.menu-dropdown");
						parentParent.classList.add("show");
						// parentParent.setAttribute("aria-expanded", "true");	
						var id = parentParent.getAttribute("id");
						activateIconSidebarActive(id);
					} else {
						var id = parentElementDiv.getAttribute("id");
						activateIconSidebarActive(id);	
					}
				} else {
					var id = parent.getAttribute("id");
					activateIconSidebarActive(id);
				}
			} else {
				var id = parentCollapseDiv.getAttribute("id");
				activateIconSidebarActive(id);
			}
			return false;
		}
		return false;
	}

	var pathName = "";

	function activateIconSidebarActive(id) {
		if (browser) {
			var menu = document.querySelector("#two-column-menu a[subitems='" + id + "'].nav-icon");
			if (menu !== null) {
				menu.classList.add("active");
			}
		}
	}

	const initialMenu = () => {
		if (browser) {
			pathName = $page.url.pathname;
			if (pathName === "/Widgets/widget") {
				document.body.classList.add("twocolumn-panel");
			} else {
				document.body.classList.remove("twocolumn-panel");
			}
			const ul = document.getElementById("navbar-nav");
			const items = ul.getElementsByTagName("a");
			let itemsArray = [...items]; // converts NodeList to Array
			removeActivation(itemsArray);

			let matchingMenuItem = itemsArray.find((x) => {
				return x.pathname === pathName;
			});

			if (matchingMenuItem) {
				activateParentDropdown(matchingMenuItem);
			} else {
				activateIconSidebarActive(pathName);
			}
		}
	};

	onMount(async () => {
		const initMenu = () => {
			if (browser) {
				pathName = $page.url.pathname;
				if (pathName === "/Widgets/widget") {
					document.body.classList.add("twocolumn-panel");
				} else {
					document.body.classList.remove("twocolumn-panel");
				}
				const ul = document.getElementById("navbar-nav");
				const items = ul.getElementsByTagName("a");
				let itemsArray = [...items]; // converts NodeList to Array
				removeActivation(itemsArray);

				let matchingMenuItem = itemsArray.find((x) => {
					return x.pathname === pathName;
				});

				if (matchingMenuItem) {
					activateParentDropdown(matchingMenuItem);
				} else {
					activateIconSidebarActive(pathName);
				}
			}
		};

		initMenu();
	});

	function changeClassAttribute(e, attribute, child = null, subchild = null, subsubchild = null) {
		document.body.classList.remove("twocolumn-panel");
		e ? e.preventDefault() : "";
		if (!e) {
			if (subchild && subchild === current_subchild && subsubchild == null) {
				current_subchild = null;
			} else if ( attribute === current && child === null && subchild === null ) {
				current = null;
				current_child = null;
				current_subchild = null;
			} else if ( attribute === current && child === current_child && subchild !== null ) {
				current = attribute;
				current_child = child;
				current_subchild = subchild;
			} else {
				current = attribute;
				current_child = child;
				current_subchild = subchild;
				current_sub_subchild = subsubchild;
			}
			if(subsubchild != null) {
				current_sub_subchild = subsubchild;
			}

			if(attribute === 'widgets'){
				document.body.classList.add("twocolumn-panel");
			}

			setTimeout(() => {
				// add active class to the menu
				document.querySelector(
					"#navbar-nav a[id='" + current_child + "'].nav-link"
				)
					? document
							.querySelector(
								"#navbar-nav a[id='" +
									current_child +
									"'].nav-link"
							)
							.classList.add("active")
					: "";
				// add active class to the submenu
				if (current_subchild)
					document.querySelector(
						"#navbar-nav a[id='" + current_subchild + "'].nav-link"
					)
						? document
								.querySelector(
									"#navbar-nav a[id='" +
										current_subchild +
										"'].nav-link"
								)
								.classList.add("active")
						: "";
				// add the active class to the icon sidebar
				activateIconSidebarActive(current);
				document.getElementById(current)
					? document.getElementById(current).classList.add("show")
					: "";
			}, 0);
			return false;
		} else {
			const ul = document.getElementById("navbar-nav");
			const items = ul.getElementsByTagName("a");
			let itemsArray = [...items]; // converts NodeList to Array
			removeActivation(itemsArray, e.target);
		}
	}

	var menu = "twocolumn";

	const setIsMenu = (newmenu) => {
		menu = newmenu;
	};

	const windowResizeHover = () => {
		setTimeout(initialMenu, 500);
		var windowSize = document.documentElement.clientWidth;
		if (windowSize < 767) {
			document.documentElement.setAttribute("data-layout", "vertical");
			setIsMenu("vertical");
		} else {
			document.documentElement.setAttribute("data-layout", "twocolumn");
			setIsMenu("twocolumn");
		}
	};

	onMount(() => {
		window.addEventListener("resize", windowResizeHover);

		return () => {
			window.removeEventListener("resize", windowResizeHover);
		};
	});
</script>

<svelte:head>
	<script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>

{#if menu == "twocolumn"}
	<div id="scrollbar">
		<Container fluid>
			<div id="two-column-menu">
				<div data-simplebar class="twocolumn-iconview">
					<Link href="#!" class="logo">
						<img src={logoSm} alt="" height="22" />
					</Link>
					{#each navData as item}
						{#if item.icon}
							{#if item.subItems}
								<li>
									<a
										href="{null}"
										subitems={item.id}
										class={current === item.id
											? "nav-icon active"
											: "nav-icon"}
										id={item.stateVariables}
										on:click={(e) =>
											changeClassAttribute(e, item.id)}
									>
										<i class={item.icon} />
									</a>
								</li>
							{:else}
								<a
									href={item.link}
									subitems={item.id}
									class={current === item.id
										? "nav-icon active"
										: "nav-icon"}
									id={item.stateVariables}
									on:click={(e) => {
										changeClassAttribute("", item.id);
									}}
								>
									<i class={item.icon} />
								</a>
							{/if}
						{/if}
					{/each}
				</div>
			</div>
			<div data-simplebar id="navbar-nav" class="navbar-nav">
				{#each navData as item}
					{#if item.subItems}
						<li class="nav-item">
							<div
								class={current === item.id
									? "collapse menu-dropdown show"
									: "collapse menu-dropdown"}
								id={item.id}
							>
								<ul class="nav nav-sm flex-column">
									{#each item.subItems as subItem}
										{#if !subItem.isChildItem}
											<li class="nav-item">
												<Link
													id={subItem.id}
													class={current_child === subItem.id ? "nav-link active" : "nav-link"}
													href={subItem.link}
													on:click={() => changeClassAttribute("", item.id, subItem.id)}>
													{$_(subItem.label)}
													{#if subItem.badgeName}
														<span class={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">
															{$_( subItem.badgeName )}
														</span>
													{/if}
												</Link>
											</li>
										{:else}
											<li class="nav-item">
												<Link
													class={current_child === subItem.id ? "nav-link active" : "nav-link"}
													href="{null}"
													data-bs-toggle="collapse"
													aria-expanded={current_child === subItem.id ? "true" : "false"}
													id={subItem.id}
													on:click={(e) =>
														changeClassAttribute(e, item.id, subItem.id )}
												>
													{$_(subItem.label)}
												{#if subItem.badgeName}
												<span class={"badge badge-pill bg-" + subItem.badgeColor} data-key="t-new">
													{$_( subItem.badgeName )}
												</span>
												{/if}
												</Link>
												
												<div
													class={current_child === subItem.id ? "collapse menu-dropdown show" : "collapse menu-dropdown"}
													id={subItem.stateVariables}
													istrue={current_child === subItem.id}
												>
													<ul class="nav nav-sm flex-column">
														{#if subItem.childItems}
															{#each subItem.childItems as childItem}
															{#if !childItem.childItems}
																<li class="nav-item">
																	<a
																		on:click={(e) => changeClassAttribute("",item.id, subItem.id, childItem.id )}
																		class={current_subchild === childItem.id ? "nav-link active" : "nav-link"}
																		href={childItem.link}
																		id={childItem.id}
																	>
																		{$_(childItem.label)}
																		{#if childItem.isChildItem}
																			<span class="badge badge-pill bg-danger" data-key="t-new">New</span>
																		{/if}
																	</a>
																	</li>
																{:else}
																<span class={current_subchild === childItem.id ? "nav-link active" : "nav-link"}
																	id={childItem.id}
																	data-bs-toggle="collapse"
																	aria-expanded={current_subchild === childItem.id ? "true" : "false"}
																	on:click={(e) => changeClassAttribute(e,item.id, subItem.id, childItem.id)}>
																		{$_(childItem.label)}
																	</span>
																		<div
																			class="collapse menu-dropdown {current_subchild === childItem.id ? 'show' : ''}"
																			id={item.id}
																			childItem={childItem.id}
																		>
																			<ul class="nav nav-sm flex-column">
																				{#each childItem.childItems as subChildItem}
																					<li class="nav-item">
																						<a
																							class={current_sub_subchild === subChildItem.id ? "nav-link active here" : "nav-link else"}
																							href={subChildItem.link}
																							on:click={(e) => changeClassAttribute("",item.id, subItem.id, childItem.id, subChildItem.id )}
																						>
																							{$_( subChildItem.label )}
																						</a>
																					</li>
																				{/each}
																			</ul>
																		</div>
																{/if}
															{/each}
														{/if}
													</ul>
												</div>
											</li>
										{/if}
									{/each}
								</ul>
							</div>
						</li>
					{/if}
				{/each}
			</div>
		</Container>
	</div>
{:else}
	<div id="scrollbar" data-simplebar class="h-100">
		<Container fluid>
			<div id="two-column-menu" />
			<ul class="navbar-nav" id="navbar-nav">
				<VerticalLayout />
			</ul>
		</Container>
	</div>
{/if}
