<script>
	import { onMount } from "svelte";
	import data from "./LayoutMenuData";
	import { _ } from "svelte-i18n";
	import { page } from "$app/stores";
	
	let pathName = $page.url.pathname;

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
		window.scrollTo({ top: 0, behavior: "smooth" });

		initMenu();
	});

	function activateParentDropdown(item) {
		item.classList.add("active");
		let parentCollapseDiv = item.closest(".collapse.menu-dropdown");

		if (parentCollapseDiv) {
			parentCollapseDiv.classList.add("show");
			var parent = parentCollapseDiv.parentElement;
			if(parent) {
				parent.querySelector("span[data-bs-toggle]").setAttribute("aria-expanded","true"); // 1st parent dropdown
				if (parent.closest(".collapse.menu-dropdown")) {
					parent.closest(".collapse.menu-dropdown").classList.add("show");
					var parentParent = parent.closest(".collapse.menu-dropdown").parentElement;
					if(parentParent) {
						parentParent.querySelector("span[data-bs-toggle]").setAttribute("aria-expanded","true"); // 2nd parent dropdown
						if (parentParent.closest(".collapse.menu-dropdown")) {
							parentParent.closest(".collapse.menu-dropdown").classList.add("show");
							var parentParentParent = parentParent.closest(".collapse.menu-dropdown").parentElement;
							if(parentParentParent) {
								parentParentParent.querySelector("span[data-bs-toggle]").setAttribute("aria-expanded","true"); // 3nd parent dropdown
							}
						}
					}
				}
			}
			return false;
		}
		return false;
	}

	function removeActivation(items) {
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
	}

	let current = "";
	let current_child = "";
	let current_subchild = "";
	let current_sub_subchild = "";

	function changeClassAttribute(attribute, child = null, subchild = null, subsubchild = null) {
		const ul = document.getElementById("navbar-nav");
		const items = ul.getElementsByTagName("a");
		let itemsArray = [...items];
		removeActivation(itemsArray);
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
		return false;
	}
</script>
<svelte:head>
	<script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>
{#each data.Navdata as item}
	{#if item.isHeader}
		<li class="menu-title"><span>{$_(item.label)}</span></li>
	{:else if item.subItems}
		<li class="nav-item">
			<span
                class={current === item.id ? "nav-link menu-link active" : "nav-link menu-link"}
				data-bs-toggle="collapse" 
				aria-expanded={current === item.id ? true : false}
				id={item.stateVariables}
                on:click={() => changeClassAttribute(item.id)}
            >
                <i class={item.icon} /> <span>{$_(item.label)}</span>
				{#if item.badgeName}
					<span class={"badge badge-pill bg-" + item.badgeColor}>{item.badgeName}</span>
				{/if}
            </span>
			<div
				class="collapse menu-dropdown {current === item.id ? 'show' : ''}"
			>
				<ul class="nav nav-sm flex-column">
					{#each item.subItems as subItem}
						{#if !subItem.isChildItem}
							<li class="nav-item">
								<a
									href={subItem.link ? subItem.link : null}
									class={current_child === subItem.id ? "nav-link active" : "nav-link"}
									on:click={() => changeClassAttribute(item.id,subItem.id)}
								>
									{$_(subItem.label)}
									{#if subItem.badgeName}
										<span class={"badge badge-pill bg-" + subItem.badgeColor}>{subItem.badgeName}</span>
									{/if}
								</a>
							</li>
						{:else}
							<li class="nav-item">
								<span class={current_child === subItem.id ? "nav-link active" : "nav-link"}
									id={subItem.stateVariables} data-bs-toggle="collapse"
									aria-expanded={current_child === subItem.id ? true : false}
									on:click={() => changeClassAttribute(item.id,subItem.id)}
								>
									{$_(subItem.label)}
									{#if subItem.badgeName}
										<span class={"badge badge-pill bg-" + subItem.badgeColor}>{subItem.badgeName}</span>
									{/if}
								</span>
								<div class="collapse menu-dropdown {current_child === subItem.id ? 'show' : ''}">
									<ul class="nav nav-sm flex-column">
										{#if subItem.isChildItem}
											{#each subItem.childItems as childItem}
												{#if !childItem.childItems}
													<li class="nav-item">
														<a href={childItem.link ? childItem.link : null}
															on:click={() =>
																changeClassAttribute( item.id, subItem.id, childItem.id )}
																class={current_subchild === childItem.id ? "nav-link active" : "nav-link"}
														>
															{$_(childItem.label)}
														</a>
													</li>
												{:else}
													<span class={current_subchild === childItem.id ? "nav-link active" : "nav-link"}
													id={childItem.id} data-bs-toggle="collapse"
													aria-expanded={current_subchild === childItem.id ? true : false}
													on:click={() => changeClassAttribute(item.id, subItem.id, childItem.id)}>
														{$_(childItem.label)}
													</span>
													<div class="collapse menu-dropdown {current_subchild === childItem.id ? 'show' : ''}">
														<ul class="nav nav-sm flex-column">
															{#each childItem.childItems as subChildItem}
																<li class="nav-item">
																	<a href={subChildItem.link}
																	class={current_sub_subchild === subChildItem.id ? "nav-link active" : "nav-link"}
																	data-key="t-basic-action"
																	on:click={() => changeClassAttribute(item.id, subItem.id, childItem.id, subChildItem.id )}
																	>{$_(subChildItem.label)}</a>
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
	{:else}
		<li class="nav-item">
			<a class={current === item.id ? "nav-link menu-link active" : "nav-link menu-link"} href={item.link ? item.link : "/#"} 
			on:click={() => changeClassAttribute( item.id )}>
				<i class={item.icon} /> <span>{$_(item.label)}</span>
			</a>
		</li>
	{/if}
{/each}