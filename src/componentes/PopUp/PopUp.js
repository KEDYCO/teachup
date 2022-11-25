import {Button, Modal} from "react-bootstrap";

export const PopUp = (props) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.modalTitle ? props.modalTitle : "Advertencia"}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.title}</h4>
                <p>
                    {props.text}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} className="btn-info">Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}