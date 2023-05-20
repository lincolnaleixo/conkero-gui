<script>
	import { Row, Col } from "sveltestrap";
	export let title, pageTitle;
</script>

<Row>
	<Col xs={12}>
		<div
			class="page-title-box d-sm-flex align-items-center justify-content-between"
		>
			<h4 class="mb-sm-0">{title}</h4>

			<div class="page-title-right">
				<ol class="breadcrumb m-0">
					<li class="breadcrumb-item">
						<a href="{null}">{pageTitle}</a>
					</li>
					<li class="breadcrumb-item active">{title}</li>
				</ol>
			</div>
		</div>
	</Col>
</Row>
