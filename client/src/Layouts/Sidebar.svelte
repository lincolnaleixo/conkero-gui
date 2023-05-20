<script>
	//Import Components
	import { Container } from "sveltestrap";
	import VerticalLayout from "./VerticalLayout.svelte";
	import HorizontalLayout from "./HorizontalLayout.svelte";
	import TwoColumnLayout from "./TwoColumnLayout.svelte";

	function removesidebar() {
		document.body.classList.remove("vertical-sidebar-enable");
	}
	
	export let layoutType;

	import logosm from '../assets/images/logo-sm.png'
	import logodark from '../assets/images/logo-dark.png'
	import logolight from '../assets/images/logo-light.png'

	const verticalSidebarClass = () =>{
        if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover-active');
            } else if (document.documentElement.getAttribute('data-sidebar-size') === 'sm-hover-active') {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
            } else {
            document.documentElement.setAttribute('data-sidebar-size', 'sm-hover');
        }
     }
</script>
<svelte:head>
	<script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>
<div class="app-menu navbar-menu">
	<!-- LOGO -->
	<div class="navbar-brand-box">
		<!-- Dark Logo-->
		<a href="/#" class="logo logo-dark">
			<span class="logo-sm">
				<img src={logosm} alt="" height="22" />
			</span>
			<span class="logo-lg">
				<img
					src={logodark}
					alt=""
					height="17"
				/>
			</span>
		</a>
		<!-- Light Logo-->
		<a href="/#" class="logo logo-light">
			<span class="logo-sm">
				<img src={logosm} alt="" height="22" />
			</span>
			<span class="logo-lg">
				<img
					src={logolight}
					alt=""
					height="17"
				/>
			</span>
		</a>
		<button
            type="button"
            class="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
            id="vertical-hover"
            on:click="{verticalSidebarClass}"
        >
            <i class="ri-record-circle-line" />
        </button>
	</div>

	{#if layoutType === "horizontal"}
		<div id="scrollbar">
			<div class="container-fluid">
				<div id="two-column-menu" />
				<ul class="navbar-nav" id="navbar-nav">
					<HorizontalLayout />
				</ul>
			</div>
			<!-- Sidebar -->
		</div>
	{:else if layoutType === "twocolumn"}
		<TwoColumnLayout {layoutType} />
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

	<div class="sidebar-background"></div>
</div>

<div class="vertical-overlay" on:click|self={removesidebar} />
