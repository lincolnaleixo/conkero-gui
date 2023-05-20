<script>
    import { Col, Modal, ModalBody, Row } from "sveltestrap";

    export let show;
    export let onDeleteClick;
    export let onCloseClick;
</script>

<div class="add-event-modal">
    <Modal isOpen={show} fade={true} centered={true} toggle={onCloseClick}>
        <ModalBody class="py-3 px-5">
            <Row>
                <Col lg={12}>
                    <div class="text-center">
                        <i
                            class="mdi mdi-alert-circle-outline"
                            style="font-size: 9em; color: orange;"
                        />
                        <h2>Are you sure?</h2>
                        <h4>{"You won't be able to revert this!"}</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div class="text-center mt-3">
                        <button
                            type="button"
                            class="btn btn-success btn-lg ms-2"
                            on:click={onDeleteClick}
                        >
                            Yes, delete it!
                        </button>
                        <button
                            type="button"
                            class="btn btn-danger btn-lg ms-2"
                            on:click={onCloseClick}
                        >
                            Cancel
                        </button>
                    </div>
                </Col>
            </Row>
        </ModalBody>
    </Modal>
</div>