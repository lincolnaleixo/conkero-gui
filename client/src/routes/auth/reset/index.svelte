<script>
  import Link from "svelte-link";
  import {
    Alert,
    Card,
    CardBody,
    Col,
    Container,
    Label,
    Row,
  } from "sveltestrap";
  import logoLight from "../../../assets/images/logo-light.png";
  import ParticlesAuth from "../ParticlesAuth.svelte";
</script>

<svelte:head>
  <title>Reset Password | Conkero - Svelte Admin & Dashboard Template</title>
</svelte:head>
<ParticlesAuth>
  <div class="auth-page-content">
    <Container>
      <Row>
        <Col lg={12}>
          <div class="text-center mt-sm-5 mb-4 text-white-50">
            <div>
              <Link href="/" class="d-inline-block auth-logo">
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
            <CardBody class="p-4">
              <div class="text-center mt-2">
                <h5 class="text-primary">Forgot Password?</h5>
                <p class="text-muted">Reset password with Conkero</p>

                <lord-icon
                  src="//cdn.lordicon.com/rhvddzym.json"
                  trigger="loop"
                  colors="primary:#0ab39c"
                  class="avatar-xl"
                  style="width: 120px; height: 120px"
                />
              </div>

              <Alert
                class="alert-borderless alert-warning text-center mb-2 mx-2"
                role="alert"
              >
                Enter your email and instructions will be sent to you!
              </Alert>
              <div class="p-2">
                <form>
                  <div class="mb-4">
                    <Label class="form-label" for="email">Email</Label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter Email"
                    />
                  </div>

                  <div class="text-center mt-4">
                    <button class="btn btn-info w-100" type="submit"
                      >Send Reset Link</button
                    >
                  </div>
                </form>
              </div>
            </CardBody>
          </Card>

          <div class="mt-4 text-center">
            <p class="mb-0">
              Wait, I remember my password... <Link
                href="/auth/login"
                class="fw-semibold text-primary text-decoration-underline"
              >
                Click here
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</ParticlesAuth>
