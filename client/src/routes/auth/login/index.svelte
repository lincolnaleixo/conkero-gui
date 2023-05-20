<script>
  import Link from "svelte-link";
  import { Card, CardBody, Col, Container, Label, Row } from "sveltestrap";
  import ParticlesAuth from "../ParticlesAuth.svelte";

  import { goto } from "$app/navigation";
  import axios from "axios";
  import { API_URL } from "../../../services/config";
  import token from "../../../store/token";

  export let loading = false;

  export let error = false;

  const validateMessageEmail = (event) => {
    let textbox = event.target;
    if (textbox.value === "") {
      textbox.setCustomValidity("Required email address");
    } else if (textbox.validity.typeMismatch) {
      textbox.setCustomValidity("please enter a valid email address");
    } else {
      textbox.setCustomValidity("");
    }
    return true;
  };

  const handleSubmit = async (event) => {
    loading = true;

    const email = event.target.email.value;
    const password = event.target.password.value;

    const payload = { email, password };

    const response = await axios.post(`${API_URL}/auth/login`, payload);

    const resData = response.data;
    console.log("response from signup", resData);
    loading = false;
    if (resData.error) return (error = resData.error);
    token.storeToken(resData.data.token);
    goto("/dashboard");
  };
</script>

<svelte:head>
  <title>Sign In | Conkero</title>
</svelte:head>
<ParticlesAuth>
  <div class="auth-page-content">
    <Container>
      <Row>
        <Col lg={12}>
          <div class="text-center mt-sm-5 mb-4 text-white-50">
            <div>
              <h1 class="text-white">Conkero</h1>
            </div>
          </div>
        </Col>
      </Row>
      <!-- end row -->

      <Row class="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card class="mt-4">
            <CardBody class="p-4">
              <div class="text-center mt-2">
                <h5 class="text-primary">Welcome Back !</h5>
                <p class="text-muted">Sign in to continue to Conkero.</p>
              </div>
              <div class="p-2 mt-4">
                <form
                  on:submit|preventDefault={handleSubmit}
                  on:invalid={validateMessageEmail}
                  on:changed={validateMessageEmail}
                  on:input={validateMessageEmail}
                >
                  <div class="mb-3">
                    <Label for="email" class="form-label"
                      >Email <span class="text-danger">*</span></Label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email address"
                    />
                  </div>

                  <div class="mb-3">
                    <div class="float-end">
                      <Link href="forgot" class="text-muted"
                        >Forgot password?</Link
                      >
                    </div>
                    <Label for="password" class="form-label"
                      >Password <span class="text-danger">*</span></Label
                    >
                    <div class="position-relative auth-pass-inputgroup mb-3">
                      <input
                        type="password"
                        class="form-control pe-5"
                        placeholder="Enter password"
                        id="password"
                      />
                    </div>
                  </div>

                  <!-- <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="auth-remember-check"
                    />
                    <Label class="form-check-label" for="auth-remember-check"
                      >Remember me</Label
                    >
                  </div> -->

                  <div class="mt-4">
                    <button
                      disabled={loading}
                      class="btn btn-info w-100"
                      type="submit">Sign In</button
                    >
                  </div>
                </form>
                {#if error}
                  <div class="mt-2" style="color: red;">
                    {error}
                  </div>
                {/if}
              </div>
            </CardBody>
            <!-- end card body -->
          </Card>
          <!-- end card -->

          <div class="mt-4 text-center">
            <p class="mb-0">
              Don't have an account ? <Link
                href="/auth/register"
                class="fw-semibold text-primary text-decoration-underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </Col>
      </Row>
      <!-- end row -->
    </Container>
    <!-- end container -->
  </div>
</ParticlesAuth>
