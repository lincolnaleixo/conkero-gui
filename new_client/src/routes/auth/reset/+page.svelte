<script>
  import { toast } from "@zerodevx/svelte-toast";
  import Link from "svelte-link";

  let passwordShow = false;
  let confrimPasswordShow = false;
  const setPasswordShow = () => {
    passwordShow = !passwordShow;
  };
  const setConfrimPasswordShow = () => {
    confrimPasswordShow = !confrimPasswordShow;
  };

  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { API_URL } from "../../../services/config";

  import axios from "axios";

  export let code = null;

  onMount(async () => {
    console.log("redirect component onMount");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    code = urlParams.get("code");
    console.log("code", code);
  });

  export let error = false;

  export let loading = false;

  const handleSubmit = async (event) => {
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword)
      return (error = "Both passwords should be same");

    const response = await axios.post(`${API_URL}/auth/reset-password`, {
      token: code,
      password,
    });
    const resData = response.data;
    console.log("resData", resData);
    if (!resData.error) {
      toast.push("Password reset successfully!");
      goto("/auth/login");
    } else {
      error = resData.message;
    }
  };
</script>

<svelte:head>
  <title>Reset Password | Conkero</title>
</svelte:head>

<div class="container-fluid">
  <div class="row g-0 auth-row">
    <div class="col-lg-5">
      <div class="auth-cover-wrapper bg-primary-100">
        <div class="auth-cover">
          <div class="title text-center">
            <h1 class="text-primary mb-10">Reset your password</h1>
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
          <h6 class="mb-15">Create new password</h6>
          <p class="text-sm mb-25">
            Your new password must be different from previous used password.
          </p>
          <div class="p-2">
            <form on:submit|preventDefault={handleSubmit}>
              <div class="input-style-1">
                <label for="password-input">Password</label>
                <div class="position-relative auth-pass-inputgroup">
                  <input
                    type={passwordShow ? "text" : "password"}
                    class="form-control pe-5 password-input"
                    placeholder="Enter password"
                    id="password"
                    name="password"
                  />
                  <button
                    on:click={() => setPasswordShow()}
                    class="position-absolute end-0 top-0 mt-2 text-decoration-none text-muted password-addon btn btn-link"
                    type="button"
                    id="password-addon"
                    ><i class="ri-eye-fill align-middle" /></button
                  >
                </div>
                <div id="passwordInput" class="form-text">
                  Must be at least 8 characters.
                </div>

                <div class="input-style-1 mt-4">
                  <label for="confirm-password-input">Confirm Password</label>
                  <div class="position-relative auth-pass-inputgroup mb-3">
                    <input
                      type={confrimPasswordShow ? "text" : "password"}
                      class="form-control pe-5 password-input"
                      placeholder="Confirm password"
                      id="confirmPassword"
                      name="confirmPassword"
                    />
                    <button
                      on:click={() => setConfrimPasswordShow()}
                      class="position-absolute end-0 top-0 mt-2 text-decoration-none text-muted password-addon btn btn-link"
                      type="button"
                    >
                      <i class="ri-eye-fill align-middle" /></button
                    >
                  </div>
                </div>
              </div>

              <div class="text-center mt-4">
                <button
                  disabled={loading}
                  class="main-btn primary-btn btn-hover w-100 text-center"
                  type="submit">Reset Password</button
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
