<script>
  import { Col, Container, Row } from "sveltestrap";
  import { adsInit } from "../../../services/api";

  const handleAds = async () => {
    const response = await adsInit();
    console.log("response", response);
    if (!response.error) window.location.href = response.data;
  };
</script>

<div class="page-content">
  <Container fluid>
    <div>
      <h3>Accounts</h3>
      <Row>
        <Col class="mt-2" xl={3} md={4}>
          <button type="button" class="btn btn-primary btn-label rounded-pill"
            ><i
              class="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"
            />
            Selling Partner API (SP-API)</button
          >
        </Col>
        <Col class="mt-2" xl={3} md={4}>
          <button
            on:click={handleAds}
            type="button"
            class="btn btn-primary btn-label rounded-pill"
            ><i
              class="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"
            />
            Advertising API (PPC)</button
          >
        </Col>
      </Row>
    </div>
  </Container>
</div>
