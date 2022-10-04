import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import { AiFillStar } from 'react-icons/ai';
import "./AdministrarClasesCss.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating';
import { ModalBody } from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox.js"
import { fontFamily } from "@mui/system";
import AddComment from "../CommentBox/AddComment.js";
import './AdministrarClasesCss.css'


export default function ClasesProf() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [rating, setRating] = useState(0);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);
  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
  const [show5, setShow5] = useState(false);
  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);

  return (
    <div className="contenedorClaseProf" style={{ backgroundColor: "#1c1e21", overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&family=Bebas+Neue&display=swap" rel="stylesheet" />

      <MDBContainer className="container py-5 h-100">
        <div className="d-flex justify-content-between">
          <header style={{ color: "#FFA726", fontFamily: 'Bebas Neue', fontWeight: "bold" }}>
            <MDBTypography className="text-decoration fw-bold" tag="h1">Mis clases </MDBTypography>
          </header>
          <Button rounded size="md" variant={"success"} onClick={handleShow} fontWeight="bold" >
            Crear nueva clase
          </Button>
        </div>
        <MDBRow className="row-cols-2 row-cols-md-3 g-4justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Franco Siciliano</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
                </MDBCardText>

                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"} />
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Form.Select defaultValue="Elegir" onChange={handleShow4} id="selectorEstadoClase" >
                                <option>Pública</option>
                                <option>Oculta</option>
                </Form.Select>
                <Button rounded size="sm" variant={"secondary"} onClick={handleShow2} >
                  Modificar
                </Button>
                <Button rounded size="sm" variant={"danger"} onClick={handleShow3} >
                  Eliminar
                </Button>
                
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
    </MDBContainer>
    <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Crear una nueva clase</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Nombre del profesor</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoNombre" placeholder="Ingresar nombre" />
                                </Form.Group>
                                <Modal.Body>Materia que se va a enseñar</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoMateria" placeholder="Ingresar materia" />
                                </Form.Group>
                                <Modal.Body>Duración del curso (en horas)</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoDuracion" placeholder="Ingresar duración" />
                                </Form.Group>
                                <Modal.Body>Frecuencia de clase</Modal.Body>
                                <Form.Group controlId="formGridState" >
                                  <Form.Select defaultValue="Elegir" onChange={handleShow4} >
                                    <option>Unica</option>
                                    <option>Semanal</option>
                                    <option>Mensual</option>
                                  </Form.Select>
                                  </Form.Group>
                              <Modal.Body>Costo del curso (en pesos)</Modal.Body>
                                <Form.Group id="text-insert">
                                <Form.Control  id="ingresoCosto" placeholder="Ingresar costo" />
                              </Form.Group>

        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleShow7}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modificar clase</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Nombre del profesor</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoNombre" placeholder="Ingresar nombre" />
                                </Form.Group>
                                <Modal.Body>Materia que se va a enseñar</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoMateria" placeholder="Ingresar materia" />
                                </Form.Group>
                                <Modal.Body>Duración del curso (en horas)</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoDuracion" placeholder="Ingresar duración" />
                                </Form.Group>
                                <Modal.Body>Frecuencia de clase</Modal.Body>
                                <Form.Group as={Col} controlId="formGridState">
                              <Form.Select defaultValue="Elegir" className="frecClasDDL" >
                                <option>Única</option>
                                <option>Semanal</option>
                                <option>Mensual</option>
                              </Form.Select>
                              </Form.Group>
                              <Modal.Body>Costo del curso (en pesos)</Modal.Body>
                                <Form.Group id="text-insert">
                                <Form.Control  id="ingresoCosto" placeholder="Ingresar costo" />
                              </Form.Group>

        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleShow5}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Eliminar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas eliminar esta clase?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleShow6}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Cambiar estado de la clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro que deseas cambiar el estado de la clase?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleClose4}>
            Cambiar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show5} onHide={handleClose5} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Modificar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Clase modificada con éxito!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose5} href="/vistaadministrarclases">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show6} onHide={handleClose6} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Eliminar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Clase eliminada con éxito!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose6} href="/vistaadministrarclases">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Crear una nueva clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>¡Clase creada con éxito!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose7} href="/vistaadministrarclases">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
};