<script>
  import { goto } from "$app/navigation";
  import Link from "svelte-link";

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
</script>

<svelte:head>
  <title>Sign Up | Conkero</title>
</svelte:head>

<div class="container-fluid vh-100">
  <div class="row g-0 auth-row vh-100">
    <div class="col-lg-5">
      <div class="auth-cover-wrapper bg-primary-100">
        <div class="auth-cover">
          <div class="title text-center">
            <h1 class="text-primary mb-10">Welcome to Conkero</h1>
            <!-- <p class="text-medium">
              Start creating the best possible user experience
              <br class="d-sm-block" />
              for you customers.
            </p> -->
          </div>
          <div class="cover-image">
            <img src="/images/auth/signin-image.svg" alt="" />
          </div>
          <div class="shape-image">
            <img src="/images/auth/shape.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- end col -->
    <div class="col-lg-6">
      <div class="signup-wrapper">
        <div class="form-wrapper">
          <h6 class="mb-15">Sign Up Form</h6>
          <p class="text-sm mb-25">Enter your credentials below</p>
          <!-- on:submit|preventDefault={handleSubmit} -->
          <form
            on:invalid={validateMessageEmail}
            on:changed={validateMessageEmail}
            on:input={validateMessageEmail}
            class="mt-4"
            method="POST"
          >
            <div class="row">
              <!-- end col -->
              <div class="col-12">
                <div class="input-style-1">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-12">
                <div class="input-style-1">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <!-- end col -->
              <div class="col-12">
                <div
                  class="
                            button-group
                            d-flex
                            justify-content-center
                            flex-wrap
                          "
                >
                  <button
                    class="
                              main-btn
                              primary-btn
                              btn-hover
                              w-100
                              text-center
                            "
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
            <!-- end row -->
            {#if error}
              <div class="mt-2" style="color: red;">
                {error}
              </div>
            {/if}
            {#if form?.missing}<p class="error">
                The email field is required
              </p>{/if}
            {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
          </form>

          <div class="mt-4 text-center">
            <p class="mb-0">
              Already have an account? <Link
                href="/auth/login"
                class="fw-semibold text-primary"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->
</div>
