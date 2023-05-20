<script>
  import { goto } from "$app/navigation";
  import Link from "svelte-link";
  import { Card, CardBody, Col, Container, Label, Row } from "sveltestrap";
  import ParticlesAuth from "../ParticlesAuth.svelte";

  import axios from "axios";
  import { API_URL } from "../../../services/config";
  import token from "../../../store/token";

  // export let data;

  export let form;

  export let loading = false;

  export let error = null;

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
    console.log("event", event.target.email);
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("payload", email, password);
    const payload = { email, password };

    const response = await axios.post(`${API_URL}/auth/signup`, payload);
    const resData = response.data;
    console.log("response from signup", resData);
    loading = false;
    if (resData.error) return (error = resData.error);
    token.storeToken(resData.data.token);
    goto("/dashboard");
  };

  //import images
</script>

<svelte:head>
  <title>Sign Up | Conkero</title>
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
          </div>
        </Col>
      </Row>

      <Row class="justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <Card class="mt-4">
            <CardBody class="p-4">
              <div class="text-center mt-2">
                <h5 class="text-primary">Create New Account</h5>
                <p class="text-muted">Get your free Conkero account now</p>
              </div>
              <div class="p-2 mt-4">
                <form
                  on:submit|preventDefault={handleSubmit}
                  on:invalid={validateMessageEmail}
                  on:changed={validateMessageEmail}
                  on:input={validateMessageEmail}
                  class="mt-4"
                  method="POST"
                >
                  {#if form?.missing}<p class="error">
                      The email field is required
                    </p>{/if}
                  {#if form?.incorrect}<p class="error">
                      Invalid credentials!
                    </p>{/if}
                  <div class="mb-3">
                    <Label for="useremail" class="form-label"
                      >Email <span class="text-danger">*</span></Label
                    >
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Enter email address"
                      required
                    />
                    <div class="invalid-feedback">Please enter email</div>
                  </div>

                  <div class="mb-2">
                    <Label for="userpassword" class="form-label"
                      >Password <span class="text-danger">*</span></Label
                    >
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Enter password"
                      required
                    />
                    <div class="invalid-feedback">Please enter password</div>
                  </div>

                  <div class="mt-4">
                    <button
                      disabled={loading}
                      class="btn btn-info w-100"
                      type="submit">Sign Up</button
                    >
                  </div>

                  {#if error}
                    <div class="mt-2" style="color: red;">
                      {error}
                    </div>
                  {/if}
                </form>
              </div>
            </CardBody>
          </Card>

          <div class="mt-4 text-center">
            <p class="mb-0">
              Already have an account ? <Link
                href="/auth/login"
                class="fw-semibold text-primary text-decoration-underline"
              >
                Signin
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</ParticlesAuth>
