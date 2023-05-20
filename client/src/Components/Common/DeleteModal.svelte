<script>
  import { Col, Modal, ModalBody, Row } from "sveltestrap";

export let show;
export let onCloseClick;
</script>
<Modal isOpen={show} toggle={onCloseClick} centered={true}>
    <ModalBody class="py-3 px-5">
      <div class="mt-2 text-center">
        <lord-icon
          src="https://cdn.lordicon.com/gsqxdxog.json"
          trigger="loop"
          colors="primary:#f7b84b,secondary:#f06548"
          style="width: 100px; height: 100px"
        ></lord-icon>
        <div class="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
          <h4>Are you sure ?</h4>
          <p class="text-muted mx-4 mb-0">
            Are you sure you want to remove this record ?
          </p>
        </div>
      </div>
      <div class="d-flex gap-2 justify-content-center mt-4 mb-2">
        <button
          type="button"
          class="btn w-sm btn-light"
          data-bs-dismiss="modal"
          onClick={onCloseClick}
        >
          Close
        </button>
        <button
          type="button"
          class="btn w-sm btn-danger "
          id="delete-record"
          onClick={onCloseClick}
        >
          Yes, Delete It!
        </button>
      </div>
    </ModalBody>
  </Modal>