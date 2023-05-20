<script lang="ts">
	import {
		Dropdown,
		DropdownToggle,
		DropdownMenu,
		TabContent,
		TabPane,
		Nav,
		NavItem,
		NavLink,
		Label
	} from "sveltestrap";

	let activeTab = 1;

	import avatar2 from '../../assets/images/users/avatar-2.jpg';
	import avatar3 from '../../assets/images/users/avatar-3.jpg';
	import avatar6 from '../../assets/images/users/avatar-6.jpg';
	import avatar8 from '../../assets/images/users/avatar-8.jpg';
	import bell from '../../assets/images/svg/bell.svg';

</script>

<Dropdown class="topbar-head-dropdown ms-1 header-item">
	<DropdownToggle
		color=""
		type="button"
		class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle p-0"
		id="page-header-notifications-dropdown"
	>
		<i class="bx bx-bell fs-22" />
		<span
			class="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger"
			>3<span class="visually-hidden">unread messages</span></span
		>
	</DropdownToggle>
	<DropdownMenu class="dropdown-menu-lg dropdown-menu-end p-0" end>
		<div class="dropdown-head bg-primary bg-pattern rounded-top">
			<div class="p-3">
				<div class="row align-items-center">
					<div class="col">
						<h6 class="m-0 fs-16 fw-semibold text-white">
							Notifications
						</h6>
					</div>
					<div class="col-auto dropdown-tabs">
						<span class="badge badge-soft-light fs-13"> 4 New</span>
					</div>
				</div>
			</div>

			<div class="px-2 pt-2">
				<Nav
					class="nav-tabs dropdown-tabs nav-tabs-custom"
					id="notificationItemsTab"
				>
					<NavItem class="waves-effect waves-light">
						<NavLink
							on:click={() => (activeTab = 1)}
							active={activeTab == 1}>All (4)</NavLink
						>
					</NavItem>
					<NavItem class="waves-effect waves-light">
						<NavLink
							on:click={() => (activeTab = 2)}
							active={activeTab == 2}>Messages</NavLink
						>
					</NavItem>
					<NavItem class="waves-effect waves-light">
						<NavLink
							on:click={() => (activeTab = 3)}
							active={activeTab == 3}>Alerts</NavLink
						>
					</NavItem>
				</Nav>
			</div>
		</div>

		<TabContent id="notificationItemsTabContent">
			<TabPane
				id="all-noti-tab"
				tabId={1}
				class={activeTab == 1 ? "active py-2 ps-2" : "py-2 ps-2"}
			>
				<div data-simplebar style="max-height: 300px;" class="pe-2">
					<div class="text-reset notification-item d-block dropdown-item position-relative">
						<div class="d-flex">
							<div class="avatar-xs me-3">
								<span
									class="avatar-title bg-soft-info text-info rounded-circle fs-16"
								>
									<i class="bx bx-badge-check" />
								</span>
							</div>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-2 lh-base">
										Your <b>Elite</b> author Graphic
										Optimization
										<span class="text-secondary"
											>reward</span
										>
										is ready!
									</h6>
								</a>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> Just
										30 sec ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check01"
									/>
									<Label
										class="form-check-label"
										for="all-notification-check01"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="text-reset notification-item d-block dropdown-item position-relative active">
						<div class="d-flex">
							<img
								src={avatar2}
								class="me-3 rounded-circle avatar-xs"
								alt="user-pic"
							/>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-1 fs-13 fw-semibold">
										Angela Bernier
									</h6>
								</a>
								<div class="fs-13 text-muted">
									<p class="mb-1">
										Answered to your comment on the cash
										flow forecast's graph 🔔.
									</p>
								</div>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 48 min
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="text-reset notification-item d-block dropdown-item position-relative">
						<div class="d-flex">
							<div class="avatar-xs me-3">
								<span
									class="avatar-title bg-soft-danger text-danger rounded-circle fs-16"
								>
									<i class="bx bx-message-square-dots" />
								</span>
							</div>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-2 fs-13 lh-base">
										You have received <b
											class="text-success">20</b
										> new messages in the conversation
									</h6>
								</a>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 2 hrs
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="text-reset notification-item d-block dropdown-item position-relative">
						<div class="d-flex">
							<img
								src={avatar8}
								class="me-3 rounded-circle avatar-xs"
								alt="user-pic"
							/>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-1 fs-13 fw-semibold">
										Maureen Gibson
									</h6>
								</a>
								<div class="fs-13 text-muted">
									<p class="mb-1">
										We talked about a project on linkedin.
									</p>
								</div>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 4 hrs
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="my-3 text-center">
						<button
							type="button"
							class="btn btn-soft-success waves-effect waves-light">View All Notifications <i
								class="ri-arrow-right-line align-middle"
							/></button
						>
					</div>
				</div>
			</TabPane>

			<TabPane
				class={activeTab == 2 ? "active py-2 ps-2" : "py-2 ps-2"}
				id="messages-tab"
				tabId={2}
				aria-labelledby="messages-tab"
			>
				<div data-simplebar style="max-height: 300px;" class="pe-2">
					<div class="text-reset notification-item d-block dropdown-item">
						<div class="d-flex">
							<img
								src={avatar3}
								class="me-3 rounded-circle avatar-xs"
								alt="user-pic"
							/>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-1 fs-13 fw-semibold">
										James Lemire
									</h6>
								</a>
								<div class="fs-13 text-muted">
									<p class="mb-1">
										We talked about a project on linkedin.
									</p>
								</div>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 30 min
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="text-reset notification-item d-block dropdown-item">
						<div class="d-flex">
							<img
								src={avatar2}
								class="me-3 rounded-circle avatar-xs"
								alt="user-pic"
							/>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-1 fs-13 fw-semibold">
										Angela Bernier
									</h6>
								</a>
								<div class="fs-13 text-muted">
									<p class="mb-1">
										Answered to your comment on the cash
										flow forecast's graph 🔔.
									</p>
								</div>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 2 hrs
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="text-reset notification-item d-block dropdown-item">
						<div class="d-flex">
							<img
								src={avatar6}
								class="me-3 rounded-circle avatar-xs"
								alt="user-pic"
							/>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-1 fs-13 fw-semibold">
										Kenneth Brown
									</h6>
								</a>
								<div class="fs-13 text-muted">
									<p class="mb-1">
										Mentionned you in his comment on 📃
										invoice #12501.
									</p>
								</div>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 10 hrs
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="text-reset notification-item d-block dropdown-item">
						<div class="d-flex">
							<img
								src={avatar8}
								class="me-3 rounded-circle avatar-xs"
								alt="user-pic"
							/>
							<div class="flex-1">
								<a href="#!" class="stretched-link">
									<h6 class="mt-0 mb-1 fs-13 fw-semibold">
										Maureen Gibson
									</h6>
								</a>
								<div class="fs-13 text-muted">
									<p class="mb-1">
										We talked about a project on linkedin.
									</p>
								</div>
								<p
									class="mb-0 fs-11 fw-medium text-uppercase text-muted"
								>
									<span
										><i class="mdi mdi-clock-outline" /> 3 days
										ago</span
									>
								</p>
							</div>
							<div class="px-2 fs-15">
								<div class="form-check notification-check">
									<input
										class="form-check-input"
										type="checkbox"
										value=""
										id="all-notification-check02"
										checked
									/>
									<Label
										class="form-check-label"
										for="all-notification-check02"
									/>
								</div>
							</div>
						</div>
					</div>

					<div class="my-3 text-center">
						<button
							type="button"
							class="btn btn-soft-success waves-effect waves-light">View All Messages <i
								class="ri-arrow-right-line align-middle"
							/></button
						>
					</div>
				</div>
			</TabPane>
			<TabPane
				class={activeTab == 3 ? "active p-4" : "p-4"}
				id="alerts-tab"
				tabId={3}
				aria-labelledby="alerts-tab"
			>
				<div class="w-25 w-sm-50 pt-3 mx-auto">
					<img
						src={bell}
						class="img-fluid"
						alt="user-pic"
					/>
				</div>
				<div class="text-center pb-5 mt-2">
					<h6 class="fs-18 fw-semibold lh-base">
						Hey! You have no any notifications
					</h6>
				</div>
			</TabPane>
		</TabContent>
	</DropdownMenu>
</Dropdown>
