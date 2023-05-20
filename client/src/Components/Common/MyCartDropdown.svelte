<script>
	import {
		Row,
		Col,
		Dropdown,
		DropdownToggle,
		DropdownMenu,
	} from "sveltestrap";

	import img1 from '../../assets/images/products/img-1.png';
	import img2 from '../../assets/images/products/img-2.png';
	import img3 from '../../assets/images/products/img-3.png';
	import img5 from '../../assets/images/products/img-5.png';
	import img6 from '../../assets/images/products/img-6.png';
</script>

<Dropdown class="topbar-head-dropdown ms-1 header-item">
	<DropdownToggle
		type="button"
		color=""
		class="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle p-0"
	>
		<i class="bx bx-shopping-bag fs-22" />
		<span
			class="position-absolute topbar-badge cartitem-badge fs-10 translate-middle badge rounded-pill bg-info"
		>
			7
			<span class="visually-hidden">unread messages</span>
		</span>
	</DropdownToggle>
	<DropdownMenu
		class="dropdown-menu-xl dropdown-menu-end p-0 dropdown-menu-cart"
		end
	>
		<div
			class="p-3 border-top-0 border-start-0 border-end-0 border-dashed border"
		>
			<Row class="align-items-center">
				<Col>
					<h6 class="m-0 fs-16 fw-semibold">My Cart</h6>
				</Col>
				<div class="col-auto">
					<span class="badge badge-soft-warning fs-13"
						><span class="cartitem-badge"> 7 </span> items</span>
				</div>
			</Row>
		</div>
		<div data-simplebar style="max-height: 300px;">
			<div class="p-2">
				<div class="text-center empty-cart d-none" id="empty-cart">
					<div class="avatar-md mx-auto my-3">
						<div class="avatar-title bg-soft-info text-info fs-36 rounded-circle"
						>
							<i class="bx bx-cart" />
						</div>
					</div>
					<h5 class="mb-3">Your Cart is Empty!</h5>
					<a href="{null}" class="btn btn-success w-md mb-3">Shop Now</a>
				</div>
				<div
					class="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2"
				>
					<div class="d-flex align-items-center">
						<img
							src={img1}
							class="me-3 rounded-circle avatar-sm p-2 bg-light"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="mt-0 mb-1 fs-14">
								<a
									href="/ecommerce/apps-ecommerce-product-details"
									class="text-reset">Branded T-Shirts</a
								>
							</h6>
							<p class="mb-0 fs-12 text-muted">
								Quantity: <span>10 x $32</span>
							</p>
						</div>
						<div class="px-2">
							<h5 class="m-0 fw-normal">
								$<span class="cart-item-price">320</span>
							</h5>
						</div>
						<div class="ps-2">
							<button
								type="button"
								class="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
								><i class="ri-close-fill fs-16" /></button>
						</div>
					</div>
				</div>

				<div
					class="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2 w-100 h-auto"
				>
					<div class="d-flex align-items-center">
						<img
							src={img2}
							class="me-3 rounded-circle avatar-sm p-2 bg-light"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="mt-0 mb-1 fs-14">
								<a
									href="/ecommerce/apps-ecommerce-product-details"
									class="text-reset">Bentwood Chair</a
								>
							</h6>
							<p class="mb-0 fs-12 text-muted">
								Quantity: <span>5 x $18</span>
							</p>
						</div>
						<div class="px-2">
							<h5 class="m-0 fw-normal">
								$<span class="cart-item-price">89</span>
							</h5>
						</div>
						<div class="ps-2">
							<button
								type="button"
								class="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
								><i class="ri-close-fill fs-16" /></button>
						</div>
					</div>
				</div>

				<div
					class="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2"
				>
					<div class="d-flex align-items-center">
						<img
							src={img3}
							class="me-3 rounded-circle avatar-sm p-2 bg-light"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="mt-0 mb-1 fs-14">
								<a
									href="/ecommerce/apps-ecommerce-product-details"
									class="text-reset"
								>
									Borosil Paper Cup</a
								>
							</h6>
							<p class="mb-0 fs-12 text-muted">
								Quantity: <span>3 x $250</span>
							</p>
						</div>
						<div class="px-2">
							<h5 class="m-0 fw-normal">
								$<span class="cart-item-price">750</span>
							</h5>
						</div>
						<div class="ps-2">
							<button
								type="button"
								class="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
								><i class="ri-close-fill fs-16" /></button>
						</div>
					</div>
				</div>

				<div
					class="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2"
				>
					<div class="d-flex align-items-center">
						<img
							src={img6}
							class="me-3 rounded-circle avatar-sm p-2 bg-light"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="mt-0 mb-1 fs-14">
								<a
									href="/ecommerce/apps-ecommerce-product-details"
									class="text-reset">Gray Styled T-Shirt</a
								>
							</h6>
							<p class="mb-0 fs-12 text-muted">
								Quantity: <span>1 x $1250</span>
							</p>
						</div>
						<div class="px-2">
							<h5 class="m-0 fw-normal">
								$<span class="cart-item-price">1250</span>
							</h5>
						</div>
						<div class="ps-2">
							<button
								type="button"
								class="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
								><i class="ri-close-fill fs-16" /></button>
						</div>
					</div>
				</div>

				<div
					class="d-block dropdown-item dropdown-item-cart text-wrap px-3 py-2"
				>
					<div class="d-flex align-items-center">
						<img
							src={img5}
							class="me-3 rounded-circle avatar-sm p-2 bg-light"
							alt="user-pic"
						/>
						<div class="flex-1">
							<h6 class="mt-0 mb-1 fs-14">
								<a
									href="/ecommerce/apps-ecommerce-product-details"
									class="text-reset">Stillbird Helmet</a
								>
							</h6>
							<p class="mb-0 fs-12 text-muted">
								Quantity: <span>2 x $495</span>
							</p>
						</div>
						<div class="px-2">
							<h5 class="m-0 fw-normal">
								$<span class="cart-item-price">990</span>
							</h5>
						</div>
						<div class="ps-2">
							<button
								type="button"
								class="btn btn-icon btn-sm btn-ghost-secondary remove-item-btn"
								><i class="ri-close-fill fs-16" /></button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div
			class="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border"
			id="checkout-elem"
		>
			<div class="d-flex justify-content-between align-items-center pb-3">
				<h5 class="m-0 text-muted">Total:</h5>
				<div class="px-2">
					<h5 class="m-0" id="cart-item-total">$1258.58</h5>
				</div>
			</div>

			<a
				href="/ecommerce/apps-ecommerce-checkout"
				class="btn btn-success text-center w-100"
			>
				Checkout
			</a>
		</div>
	</DropdownMenu>
</Dropdown>
