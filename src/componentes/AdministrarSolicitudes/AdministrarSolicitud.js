import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function AdministrarSolicitudes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px", height: "100vh" }}>
      <MDBRow className="justify-content-center">
        <MDBCol>
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody className="colorBody">
              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '50px' }}
                        fluid
                      />
                      <p className="small mb-0 ms-2">Fabrizio Moretti</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <Button className="botonApruebo btn-success" onClick={handleShow} >
                        Aprobar
                      </Button>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <Button className="botonRechazo btn-danger" onClick={handleShow2} >
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '50px' }}
                        fluid
                      />
                      <p className="small mb-0 ms-2">Daniel</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <Button className="botonApruebo btn-success" onClick={handleShow} >
                        Aprobar
                      </Button>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <Button className="botonRechazo btn-danger" onClick={handleShow2} >
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '50px' }}
                        fluid
                      />
                      <p className="small mb-0 ms-2">Adrian Suar.</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <Button className="botonApruebo btn-success" onClick={handleShow} >
                        Aprobar
                      </Button>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <Button className="botonRechazo btn-danger" onClick={handleShow2} >
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">


                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '50px' }}
                        fluid
                      />
                      <p className="small mb-0 ms-2">Luke</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <Button className="botonApruebo btn-success" onClick={handleShow} >
                        Aprobar
                      </Button>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <Button className="botonRechazo btn-danger" onClick={handleShow2} >
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '50px' }}
                        fluid
                      />
                      <p className="small mb-0 ms-2">Juan Perez</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <Button className="botonApruebo btn-success" onClick={handleShow} >
                        Aprobar
                      </Button>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <Button className="botonRechazo btn-danger" onClick={handleShow2} >
                        Rechazar
                      </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>








      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>¡ El comentario fue aprobado !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Podra ver este comentario en la seccion de comentarios de su clase.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Rechazar comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ingrese el motivo por el cual desea eliminar este comentario</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control as="textarea" rows={3} id="ingresoMotivo" placeholder="Ingresar motivo" />
        </Form.Group>
        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>



    </MDBContainer>
  );
}