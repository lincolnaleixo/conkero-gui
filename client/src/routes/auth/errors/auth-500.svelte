<script>
  import Link from "svelte-link";
  import { Col, Container, Row } from "sveltestrap";

  // Import Images
  import error500 from "../../../assets/images/error500.png";
</script>

<svelte:head>
  <title>500 Error | Conkero - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div
  class="auth-page-wrapper py-5 d-flex justify-content-center align-items-center min-vh-100"
>
  <div class="auth-page-content overflow-hidden p-0">
    <Container fluid={true}>
      <Row class="justify-content-center">
        <Col xl={4} class="text-center">
          <div class="error-500 position-relative">
            <img
              src={error500}
              alt=""
              class="img-fluid error-500-img error-img"
            />
            <h1 class="title text-muted">500</h1>
          </div>
          <div>
            <h4>Internal Server Error!</h4>
            <p class="text-muted w-75 mx-auto">
              Server Error 500. We're not exactly sure what happened, but our
              servers say something is wrong.
            </p>
            <Link href="/dashboard" class="btn btn-info"
              ><i class="mdi mdi-home me-1" />Back to home</Link
            >
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</div>
