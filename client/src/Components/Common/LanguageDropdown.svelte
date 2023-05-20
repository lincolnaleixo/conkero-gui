<script>
	import {
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		DropdownItem,
	} from "sveltestrap";
	import { setupI18n } from "../../services/i18n";
	import languages from "../../common/data/languages";
	import { browser } from "$app/env";
	import usimg from '../../assets/images/flags/us.svg'

	export let selectedLang = browser
		? localStorage.getItem("I18N_LANGUAGE") || "en"
		: "en";

	let isOpen = false;

	function handleLocaleChange(lang) {
		setupI18n({ withLocale: lang });
		if (browser) {
			localStorage.setItem("I18N_LANGUAGE", lang);
		}
	}
</script>

<Dropdown class="ms-1 topbar-head-dropdown header-item">
	<DropdownToggle
		tag="button"
		color=""
		class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle p-0"
	>
		<img
			id="header-lang-img"
			src={usimg}
			alt="Header Language"
			height="20"
			class="rounded"
		/>
	</DropdownToggle>
	<DropdownMenu class="dropdown-menu-end" end>
		{#each languages as language}
			<DropdownItem
				key={language.value}
				on:click={() => handleLocaleChange(language.value)}
				class={`notify-item language py-2 ${
					selectedLang === language.value ? "active" : "none"
				}`}
			>
				<img
					src={language.flag}
					alt="Skote"
					class="me-2 rounded"
					height="18"
				/>
				<span class="align-middle">
					{language.label}
				</span>
			</DropdownItem>
		{/each}
	</DropdownMenu>
</Dropdown>
