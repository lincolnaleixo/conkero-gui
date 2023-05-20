<script>
	import avatar2 from '../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../assets/images/users/avatar-3.jpg';
	import avatar5 from '../../assets/images/users/avatar-5.jpg';
</script>
<form class="app-search d-none d-md-block">
	<div class="position-relative">
		<input
			type="text"
			class="form-control"
			placeholder="Search..."
			autocomplete="off"
			id="search-options"
			value=""
		/>
		<span class="mdi mdi-magnify search-widget-icon" />
		<span
			class="mdi mdi-close-circle search-widget-icon search-widget-icon-close d-none"
			id="search-close-options"
		/>
	</div>
	<div class="dropdown-menu dropdown-menu-lg" id="search-dropdown">
		<div data-simplebar style="max-height: 320px;">
			<!-- item-->
			<div class="dropdown-header">
				<h6 class="text-overflow text-muted mb-0 text-uppercase">
					Recent Searches
				</h6>
			</div>

			<div class="dropdown-item bg-transparent text-wrap">
				<a
					href="index"
					class="btn btn-soft-secondary btn-sm btn-rounded">how to setup <i class="mdi mdi-magnify ms-1" /></a
				>
				<a
					href="index"
					class="btn btn-soft-secondary btn-sm btn-rounded">buttons
					<i class="mdi mdi-magnify ms-1" /></a
				>
			</div>
			<!-- item-->
			<div class="dropdown-header mt-2">
				<h6 class="text-overflow text-muted mb-1 text-uppercase">
					Pages
				</h6>
			</div>

			<!-- item-->
			<a href="{null}" class="dropdown-item notify-item">
				<i
					class="ri-bubble-chart-line align-middle fs-18 text-muted me-2"
				/>
				<span>Analytics Dashboard</span>
			</a>

			<!-- item-->
			<a href="{null}" class="dropdown-item notify-item">
				<i
					class="ri-lifebuoy-line align-middle fs-18 text-muted me-2"
				/>
				<span>Help Center</span>
			</a>

			<!-- item-->
			<a href="{null}" class="dropdown-item notify-item">
				<i
					class="ri-user-settings-line align-middle fs-18 text-muted me-2"
				/>
				<span>My account settings</span>
			</a>

			<!-- item-->
			<div class="dropdown-header mt-2">
				<h6 class="text-overflow text-muted mb-2 text-uppercase">
					Members
				</h6>
			</div>

			<div class="notification-list">
				<!-- item -->
				<a href="{null}" class="d-flex dropdown-item notify-item py-2">
					<div class="d-flex">
						<img
							src={avatar2}
							class="me-3 rounded-circle avatar-xs"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="m-0">Angela Bernier</h6>
							<span class="fs-11 mb-0 text-muted">Manager</span>
						</div>
					</div>
				</a>
				<!-- item -->
				<a href="{null}" class="d-flex dropdown-item notify-item py-2">
					<div class="d-flex">
						<img
							src={avatar3}
							class="me-3 rounded-circle avatar-xs"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="m-0">David Grasso</h6>
							<span class="fs-11 mb-0 text-muted"
								>Web Designer</span>
						</div>
					</div>
				</a>
				<!-- item -->
				<a href="{null}" class="d-flex dropdown-item notify-item py-2">
					<div class="d-flex">
						<img
							src={avatar5}
							class="me-3 rounded-circle avatar-xs"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="m-0">Mike Bunch</h6>
							<span class="fs-11 mb-0 text-muted"
								>React Developer</span>
						</div>
					</div>
				</a>
			</div>
		</div>

		<div class="text-center pt-3 pb-1">
			<a href="pages-search-results" class="btn btn-primary btn-sm"
				>View All Results
				<i class="ri-arrow-right-line ms-1" /></a
			>
		</div>
	</div>
</form>
