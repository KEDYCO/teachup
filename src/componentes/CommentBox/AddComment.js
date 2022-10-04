import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTextArea,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Rating } from 'react-simple-star-rating';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function AddComment() {
const [rating, setRating] = useState(0);
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <section className="vh-99" style={{ backgroundColor: "rgb(28,30,33)" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="10" lg="8" xl="6">
            <MDBCard>
              <MDBCardBody className="p-4">
                <div className="d-flex flex-start w-100">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                    alt="avatar"
                    width="65"
                    height="65"
                  />

                  <div className="w-100">
                    <MDBTypography tag="h5">Agregar un comentario</MDBTypography>
                    <div>
                        <Rating ratingValue={rating} allowHalfIcon={true} initialValue={0} size={"30px"}/>
                    </div>
                    <MDBTextArea label="¿Qué opinas sobre la clase contratada?" rows={4} />

                    <div className="d-flex justify-content-end mt-3">
                      <Button variant="success" onClick={handleShow}>
                        Enviar comentario <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Nuevo comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Comentario enviado con éxito!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} href="/misclasesalu">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}