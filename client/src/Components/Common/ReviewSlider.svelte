<script>
	import { Card, CardBody } from "sveltestrap";

	import { Swiper, SwiperSlide } from "swiper/svelte";

	// Import Swiper styles
	import "swiper/css";
	import "swiper/css/pagination";

	import { Autoplay, Mousewheel } from "swiper";

	import img2 from '../../assets/images/companies/img-2.png'
	import img8 from '../../assets/images/companies/img-8.png'
	import avatar3 from '../../assets/images/users/avatar-3.jpg'
	import avatar2 from '../../assets/images/users/avatar-2.jpg'

</script>

<Swiper
	direction={"vertical"}
	slidesPerView={2}
	spaceBetween={10}
	mousewheel={true}
	loop={true}
	autoplay={{
		delay: 2000,
		disableOnInteraction: false,
	}}
	modules={[Autoplay, Mousewheel]}
	class="mySwiper vertical-swiper"
	style="height: 250px;"
>
	<SwiperSlide>
		<Card class="border border-dashed shadow-none">
			<CardBody>
				<div class="d-flex">
					<div class="flex-shrink-0 avatar-sm">
						<div class="avatar-title bg-light rounded">
							<img
								src={img2}
								alt=""
								height="30"
							/>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<div>
							<p
								class="text-muted mb-1 fst-italic text-truncate-two-lines">
								" Great product and looks great, lots of
								features. "
							</p>
							<div class="fs-11 align-middle text-warning">
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
							</div>
						</div>
						<div class="text-end mb-0 text-muted">
							- by <cite title="Source Title"
								>Force Medicines</cite>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</SwiperSlide>
	<SwiperSlide>
		<Card class="border border-dashed shadow-none">
			<CardBody>
				<div class="d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar3}
							alt=""
							class="avatar-sm rounded"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<div>
							<p
								class="text-muted mb-1 fst-italic text-truncate-two-lines">
								" Amazing template, very easy to understand and
								manipulate. "
							</p>
							<div class="fs-11 align-middle text-warning">
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-half-fill" />
							</div>
						</div>
						<div class="text-end mb-0 text-muted">
							- by <cite title="Source Title">Henry Baird</cite>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</SwiperSlide>
	<SwiperSlide>
		<Card class="border border-dashed shadow-none">
			<CardBody>
				<div class="d-flex">
					<div class="flex-shrink-0 avatar-sm">
						<div class="avatar-title bg-light rounded">
							<img
								src={img8}
								alt=""
								height="30"
							/>
						</div>
					</div>
					<div class="flex-grow-1 ms-3">
						<div>
							<p
								class="text-muted mb-1 fst-italic text-truncate-two-lines">
								"Very beautiful product and Very helpful
								customer service."
							</p>
							<div class="fs-11 align-middle text-warning">
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-line" />
								<i class="ri-star-line" />
							</div>
						</div>
						<div class="text-end mb-0 text-muted">
							- by <cite title="Source Title">Zoetic Fashion</cite>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</SwiperSlide>
	<SwiperSlide>
		<Card class="border border-dashed shadow-none">
			<CardBody>
				<div class="d-flex">
					<div class="flex-shrink-0">
						<img
							src={avatar2}
							alt=""
							class="avatar-sm rounded"
						/>
					</div>
					<div class="flex-grow-1 ms-3">
						<div>
							<p
								class="text-muted mb-1 fst-italic text-truncate-two-lines">
								" The product is very beautiful. I like it. "
							</p>
							<div class="fs-11 align-middle text-warning">
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-fill" />
								<i class="ri-star-half-fill" />
								<i class="ri-star-line" />
							</div>
						</div>
						<div class="text-end mb-0 text-muted">
							- by <cite title="Source Title">Nancy Martino</cite>
						</div>
					</div>
				</div>
			</CardBody>
		</Card>
	</SwiperSlide>
</Swiper>
