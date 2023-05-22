<script>
  import { Col, Container, Row } from "sveltestrap";
  import ParticlesAuth from "../ParticlesAuth.svelte";

  import axios from "axios";
  import { API_URL } from "../../../services/config";

  export let loading = false;

  const handleSubmit = async () => {
    loading = true;
    const response = await axios.get(`${API_URL}/sp/init`);
    const resData = response.data;
    console.log("resData", resData);
    loading = false;
    if (!resData.error) window.location.href = resData.data;
  };
</script>

<svelte:head>
  <title>Add Seller Account | Conkero</title>
</svelte:head>

<ParticlesAuth>
  <div class="auth-page-content">
    <Container>
      <Row>
        <div class="text-center mt-sm-5 mb-4 text-white-50">
          <div>
            <h1 class="text-white">Conkero</h1>
            <p class="text-white fs-4">Connect Conkero to the Seller Central</p>
          </div>
        </div>
      </Row>

      <Row class="justify-content-center">
        <Col md={1} lg={1} xl={1}>
          <div class="mt-4">
            <button
              disabled={loading}
              on:click={handleSubmit}
              class="btn btn-info w-20"
              type="submit">Connect</button
            >
          </div>
        </Col>
      </Row>
    </Container>
  </div>
</ParticlesAuth>
