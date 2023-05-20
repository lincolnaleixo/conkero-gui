<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { Col } from "sveltestrap";
	import Link from "svelte-link";
	import logoLight from "../../assets/images/logo-light.png";
</script>

<Col lg={6}>
	<div class="p-lg-5 p-4 auth-one-bg h-100">
		<div class="bg-overlay" />
		<div class="position-relative h-100 d-flex flex-column">
			<div class="mb-4">
				<Link href="/dashboard" class="d-block">
					<img src={logoLight} alt="" height="18" />
				</Link>
			</div>
			<div class="mt-auto">
				<div class="mb-3">
					<i class="ri-double-quotes-l display-4 text-success" />
				</div>

				<Splide options={{ rewind: true , arrows:false}} aria-label="Svelte Splide Example">
					<SplideSlide>
						<div class="carousel-inner text-center text-white-50 pb-5">
							<div class="item">
								<p class="fs-15 fst-italic">
									" Great! Clean code, clean design, easy for
									customization. Thanks very much! "
								</p>
							</div>
						</div>
					</SplideSlide>
					<SplideSlide>
						<div class="carousel-inner text-center text-white-50 pb-5">
							<div class="item">
								<p class="fs-15 fst-italic">
									" The theme is really great with an amazing
									customer support."
								</p>
							</div>
						</div>
					</SplideSlide>
				  </Splide>
			</div>
		</div>
	</div>
</Col>
