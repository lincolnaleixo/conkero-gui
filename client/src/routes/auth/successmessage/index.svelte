<script>
  import Link from "svelte-link";
  import { Card, CardBody, Col, Container, Row } from "sveltestrap";
  import ParticlesAuth from "../ParticlesAuth.svelte";
  //import images
  import logoLight from "../../../assets/images/logo-light.png";
</script>

<svelte:head>
  <title>Success Message | Conkero - Svelte Admin & Dashboard Template</title>
</svelte:head>
<div class="auth-page-wrapper">
  <ParticlesAuth>
    <div class="auth-page-content">
      <Container>
        <Row>
          <Col lg={12}>
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <Link href="/dashboard" class="d-inline-block auth-logo">
                  <h1 class="text-white">Conkero</h1>
                </Link>
              </div>
              <p class="mt-3 fs-15 fw-medium">
                Premium Admin & Dashboard Template
              </p>
            </div>
          </Col>
        </Row>

        <Row class="justify-content-center">
          <Col md={8} lg={6} xl={5}>
            <Card class="mt-4">
              <CardBody class="p-4 text-center">
                <div class="avatar-lg mx-auto mt-2">
                  <div
                    class="avatar-title bg-light text-success display-3 rounded-circle"
                  >
                    <i class="ri-checkbox-circle-fill" />
                  </div>
                </div>
                <div class="mt-4 pt-2">
                  <h4>Well done !</h4>
                  <p class="text-muted mx-4">
                    Aww yeah, you successfully read this important message.
                  </p>
                  <div class="mt-4">
                    <Link href="/auth/login" class="btn btn-info w-100"
                      >Back to Dashboard</Link
                    >
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  </ParticlesAuth>
</div>
