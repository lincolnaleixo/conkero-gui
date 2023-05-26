<script>
  import Link from "svelte-link";

  import { toast } from "@zerodevx/svelte-toast";
  import axios from "axios";
  import { API_URL } from "../../../services/config";

  export let loading = false;

  export let error = false;

  const handleSubmit = async (event) => {
    loading = true;

    const email = event.target.email.value;

    const payload = { email };

    const response = await axios.post(
      `${API_URL}/auth/forgot-password`,
      payload
    );

    const resData = response.data;
    console.log("response from forgot-password", resData);
    if (!resData.error) toast.push("Password reset link sent!");
    loading = false;
  };
</script>

<svelte:head>
  <title>Forgot Password | Conkero</title>
</svelte:head>

<div class="container-fluid vh-100">
  <div class="row g-0 auth-row vh-100">
    <div class="col-lg-5">
      <div class="auth-cover-wrapper bg-primary-100">
        <div class="auth-cover">
          <div class="title text-center">
            <h1 class="text-primary mb-10">Forgot your password?</h1>
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
          <h6 class="mb-15">Password Forgot Form</h6>
          <p class="text-sm mb-25">
            Enter your email and instructions will be sent to you!
          </p>
          <div class="p-2">
            <form on:submit|preventDefault={handleSubmit}>
              <div class="input-style-1">
                <label for="email">Email</label>
                <input id="email" type="email" placeholder="Email" />
              </div>

              <div class="text-center mt-4">
                <button
                  disabled={loading}
                  class="main-btn primary-btn btn-hover w-100 text-center"
                  type="submit">Send Reset Link</button
                >
              </div>
            </form>
          </div>

          {#if error}
            <div class="mt-2" style="color: red;">
              {error}
            </div>
          {/if}

          <div class="mt-4 text-center">
            <p class="mb-0">
              Wait, I remember my password... <Link
                href="/auth/login"
                class="fw-semibold text-primary"
              >
                Click here
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
