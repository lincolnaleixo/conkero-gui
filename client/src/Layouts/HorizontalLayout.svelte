<script>
	import { onMount } from "svelte";
	import { Col, Collapse, Row } from "sveltestrap";
	import data from "./LayoutMenuData";
	import Link from "svelte-link";
	import { _ } from "svelte-i18n";
	import { browser } from "$app/env";
	import { page } from "$app/stores";

	const navData = data.Navdata;
	let pathName = "";
	let menuItems = [];
	let splitMenuItems = [];
	let menuSplitContainer = 6;
	navData.forEach(function (value, key) {
		if (value["isHeader"]) {
			menuSplitContainer++;
		}
		if (key >= menuSplitContainer) {
			let val = value;
			val.childItems = value.subItems;
			val.isChildItem = value.subItems ? true : false;
			delete val.subItems;
			splitMenuItems.push(val);
		} else {
			menuItems.push(value);
		}
	});
	menuItems.push({
		id: "more",
		label: "More",
		icon: "ri-briefcase-2-line",	
		link: "/#",
		stateVariables: "isMoreMenu",
		subItems: splitMenuItems,
	});

	const initMenu = () => {
		pathName = $page.url.pathname;

		const ul = document.getElementById("navbar-nav");
		const items = ul.getElementsByTagName("a");
		let itemsArray = [...items];
		removeActivation(itemsArray);

		let matchingMenuItem = itemsArray.find((x) => {
			return x.pathname === pathName;
		});

		if (matchingMenuItem) {
			activateParentDropdown(matchingMenuItem);
		}
	};

	onMount(async () => {
		if (browser) {
			window.scrollTo({ top: 0, behavior: "smooth" });
			pathName = $page.url.pathname;

			const initMenu = () => {
				pathName = $page.url.pathname;

				const ul = document.getElementById("navbar-nav");
				const items = ul.getElementsByTagName("a");
				let itemsArray = [...items];
				removeActivation(itemsArray);

				let matchingMenuItem = itemsArray.find((x) => {
					return x.pathname === pathName;
				});

				if (matchingMenuItem) {
					activateParentDropdown(matchingMenuItem);
				}
			};
			initMenu();
		}
	});

	function callInitMenu() {
		initMenu();
	}

	function activateParentDropdown(item) {
		item.classList.add("active");
		let parentCollapseDiv = item.closest(".menu-dropdown");

		if (parentCollapseDiv) {
			// to set aria expand true remaining
			parentCollapseDiv.classList.add("show");
			parentCollapseDiv.parentElement.children[0].classList.add("active");
			parentCollapseDiv.parentElement.children[0].setAttribute(
				"aria-expanded",
				"true"
			);
			if (parentCollapseDiv.parentElement.closest(".menu-dropdown")) {
				parentCollapseDiv.parentElement.closest(".collapse")
					? parentCollapseDiv.parentElement
							.closest(".collapse")
							.classList.add("show")
					: "";
				var parentElementDiv = parentCollapseDiv.parentElement.closest(
					".collapse"
				)
					? parentCollapseDiv.parentElement.closest(".collapse")
							.previousElementSibling
					: "";
				if (parentElementDiv) {
					parentElementDiv.classList.add("active");
					var parentElementSibling =
						parentElementDiv.parentElement.parentElement
							.parentElement.previousElementSibling;
					if (parentElementSibling)
						parentElementSibling.classList.add("active");
				}
				parentCollapseDiv.parentElement
					.closest(".menu-dropdown")
					.parentElement.children[0].classList.add("active");
			}
			return false;
		}
		return false;
	}

	const removeActivation = (items) => {
		let actiItems = items.filter((x) => x.classList.contains("active"));

		actiItems.forEach((item) => {
			if (item.classList.contains("menu-link")) {
				if (!item.classList.contains("active")) {
					item.setAttribute("aria-expanded", false);
				}
				if (item.nextElementSibling) {
					item.nextElementSibling.classList.remove("show");
				}
			}
			if (item.classList.contains("nav-link")) {
				if (item.nextElementSibling) {
					item.nextElementSibling.classList.remove("show");
				}
				item.setAttribute("aria-expanded", false);
			}
			item.classList.remove("active");
		});
	};
</script>
<svelte:head>
	<script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>

{#each menuItems as item}
	{#if !item.isHeader}
		{#if item.subItems}
			<li class="nav-item">
				<Link
					class="nav-link menu-link"
					href={item.link ? item.link : "/#"}
					data-bs-toggle="collapse"
					id={item.stateVariables}
				>
					<i class={item.icon} />
					<span data-key="t-apps">{$_(item.label)}</span>
				</Link>
				<Collapse
					class={item.subItems.length > 16
						? "menu-dropdown mega-dropdown-menu"
						: "menu-dropdown"}
					toggler="#{item.stateVariables}"
					isOpen={item.stateVariables}
				>
					{#if item.subItems.length > 16}
						<Row>
							{#each item.subItems as subItem, index (index)}
								{#if index % 2 === 0}
									<Col lg={4}>
										<ul class="nav nav-sm flex-column">
											<li class="nav-item">
												<Link
													href={subItem.link}
													class="nav-link"
													on:click={callInitMenu}
													>{$_(subItem.label)}</Link
												>
											</li>
										</ul>
									</Col>
								{:else}
									<Col lg={4}>
										<ul class="nav nav-sm flex-column">
											<li class="nav-item">
												<Link
													href={subItem.link}
													class="nav-link"
													on:click={callInitMenu}
													>{$_(subItem.label)}</Link
												>
											</li>
										</ul>
									</Col>
								{/if}
							{/each}
						</Row>
					{:else}
						<ul class="nav nav-sm flex-column">
							{#each item.subItems as subItem, index (index)}
								{#if !subItem.isChildItem}
									<li class="nav-item">
										<Link
											on:click={callInitMenu}
											href={subItem.link
												? subItem.link
												: "/#"}
											class="nav-link"
										>
											{$_(subItem.label)}
										</Link>
									</li>
								{:else}
									<li class="nav-item">
										<Link
											class="nav-link not"
											href="{null}"
											id={subItem.stateVariables}
											data-bs-toggle="collapse"
											on:click={callInitMenu}
										>
											{$_(subItem.label)}
										</Link>
										<Collapse
											class="menu-dropdown"
											toggler="#{subItem.stateVariables}"
											isOpen={subItem.stateVariables}
										>
											<ul class="nav nav-sm flex-column">
												{#if subItem.childItems}
													{#each subItem.childItems as subChildItem}
														{#if !subChildItem.isChildItem}
															<li
																class="nav-item"
															>
																<Link
																	href={subChildItem.link
																		? subChildItem.link
																		: "/#"}
																	on:click={callInitMenu}
																	class="nav-link not open"
																>
																	{$_(
																		subChildItem.label
																	)}
																</Link>
															</li>
														{:else}
															<li
																class="nav-item"
															>
																<Link
																	class="nav-link iopen"
																	href="{null}"
																	data-bs-toggle="collapse"
																	id={subChildItem.stateVariables}
																	on:click={callInitMenu}
																>
																	{$_(
																		subChildItem.label
																	)}
																</Link>
																<Collapse
																	class="menu-dropdown"
																	toggler="#{subChildItem.stateVariables}"
																	isOpen={subChildItem.stateVariables}
																>
																	<ul
																		class="nav nav-sm flex-column"
																	>
																		{#if subChildItem.childItems}
																			{#each subChildItem.childItems as subSubChildItem}
																				<li
																					class="nav-item apex"
																				>
																					<Link
																						on:click={callInitMenu}
																						href={subSubChildItem.link
																							? subSubChildItem.link
																							: "/#"}
																						class="nav-link"
																					>
																						{$_(
																							subSubChildItem.label
																						)}
																					</Link>
																				</li>
																			{/each}
																		{/if}
																	</ul>
																</Collapse>
															</li>
														{/if}
													{/each}
												{/if}
											</ul>
										</Collapse>
									</li>
								{/if}
							{/each}
						</ul>
					{/if}
				</Collapse>
			</li>
		{:else}
			<li class="nav-item">
				<Link
					class="nav-link menu-link"
					href={item.link ? item.link : "/#"}
				>
					<i class={item.icon} /> <span>{$_(item.label)}</span>
				</Link>
			</li>
		{/if}
	{:else}
		<li class="menu-title">
			<span data-key="t-menu">{$_(item.label)}</span>
		</li>
	{/if}
{/each}
