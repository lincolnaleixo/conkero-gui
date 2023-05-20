<script>
  import Link from "svelte-link";
  import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    Form,
    Input,
    Label,
    Row,
  } from "sveltestrap";
  import logoLight from "../../../assets/images/logo-light.png";
  import ParticlesAuth from "../ParticlesAuth.svelte";
  let passwordShow = false;
  let confrimPasswordShow = false;
  const setPasswordShow = () => {
    passwordShow = !passwordShow;
  };
  const setConfrimPasswordShow = () => {
    confrimPasswordShow = !confrimPasswordShow;
  };
</script>

<ParticlesAuth>
  <div class="auth-page-content">
    <Container>
      <Row>
        <Col lg={12}>
          <div class="text-center mt-sm-5 mb-4 text-white-50">
            <div>
              <Link href="/#" class="d-inline-block auth-logo">
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
                <h5 class="text-primary">Create new password</h5>
                <p class="text-muted">
                  Your new password must be different from previous used
                  password.
                </p>
              </div>

              <div class="p-2">
                <Form>
                  <div class="mb-3">
                    <Label class="form-label" htmlFor="password-input"
                      >Password</Label
                    >
                    <div class="position-relative auth-pass-inputgroup">
                      <Input
                        type={passwordShow ? "text" : "password"}
                        class="form-control pe-5 password-input"
                        placeholder="Enter password"
                        id="password-input"
                        name="password"
                      />
                      <Button
                        color="link"
                        on:click={() => setPasswordShow()}
                        class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                        type="button"
                        id="password-addon"
                        ><i class="ri-eye-fill align-middle" /></Button
                      >
                    </div>
                    <div id="passwordInput" class="form-text">
                      Must be at least 8 characters.
                    </div>
                  </div>

                  <div class="mb-3">
                    <Label class="form-label" htmlFor="confirm-password-input"
                      >Confirm Password</Label
                    >
                    <div class="position-relative auth-pass-inputgroup mb-3">
                      <Input
                        type={confrimPasswordShow ? "text" : "password"}
                        class="form-control pe-5 password-input"
                        placeholder="Confirm password"
                        id="confirm-password-input"
                        name="confrim_password"
                      />
                      <Button
                        color="link"
                        on:click={() => setConfrimPasswordShow()}
                        class="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                        type="button"
                      >
                        <i class="ri-eye-fill align-middle" /></Button
                      >
                    </div>
                  </div>

                  <div id="password-contain" class="p-3 bg-light mb-2 rounded">
                    <h5 class="fs-13">Password must contain:</h5>
                    <p id="pass-length" class="invalid fs-12 mb-2">
                      Minimum <b>8 characters</b>
                    </p>
                    <p id="pass-lower" class="invalid fs-12 mb-2">
                      At <b>lowercase</b> letter (a-z)
                    </p>
                    <p id="pass-upper" class="invalid fs-12 mb-2">
                      At least <b>uppercase</b> letter (A-Z)
                    </p>
                    <p id="pass-number" class="invalid fs-12 mb-0">
                      A least <b>number</b> (0-9)
                    </p>
                  </div>

                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="auth-remember-check"
                    />
                    <Label
                      class="form-check-label"
                      htmlFor="auth-remember-check">Remember me</Label
                    >
                  </div>

                  <div class="mt-4">
                    <Button color="success" class="w-100" type="submit"
                      >Reset Password</Button
                    >
                  </div>
                </Form>
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
