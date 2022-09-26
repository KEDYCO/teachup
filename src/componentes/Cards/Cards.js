
import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './CardsCss.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Tarjetas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="vh-100" style={{ backgroundColor:  "#1c1e21", overflowX : "hidden"}}>
      <MDBContainer className="container py-5 h-100">
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Hola, tengo experiencia en bootstrap y react, puedo enseñarte lo que quieras sobre eso porque soy un maquina campeon mundial y follo como juli
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <MDBCardText className="mb-1 h5">Buenos Aires</MDBCardText>
                  </div>
                </div>
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
                            
                            <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Franco Siciliano</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Programación<span className="mx-2">|</span> <a>Mensual</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Hola, tengo experiencia en bootstrap y react, puedo enseñarte lo que quieras sobre eso porque soy un maquina campeon mundial y follo como juli
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <MDBCardText className="mb-1 h5">4.6</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Ciudad</MDBCardText>
                    <MDBCardText className="mb-1 h5">Buenos Aires</MDBCardText>
                  </div>
                </div>
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>            
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Franco Siciliano</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Programación<span className="mx-2">|</span> <a>Mensual</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Hola, tengo experiencia en bootstrap y react, puedo enseñarte lo que quieras sobre eso porque soy un maquina campeon mundial y follo como juli
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <MDBCardText className="mb-1 h5">4.6</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Ciudad</MDBCardText>
                    <MDBCardText className="mb-1 h5">Buenos Aires</MDBCardText>
                  </div>
                </div>
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Franco Siciliano</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Programación<span className="mx-2">|</span> <a>Mensual</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Hola, tengo experiencia en bootstrap y react, puedo enseñarte lo que quieras sobre eso porque soy un maquina campeon mundial y follo como juli
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <MDBCardText className="mb-1 h5">4.6</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Ciudad</MDBCardText>
                    <MDBCardText className="mb-1 h5">Buenos Aires</MDBCardText>
                  </div>
                </div>
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Franco Siciliano</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Programación<span className="mx-2">|</span> <a>Mensual</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Hola, tengo experiencia en bootstrap y react, puedo enseñarte lo que quieras sobre eso porque soy un maquina campeon mundial y follo como juli
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <MDBCardText className="mb-1 h5">4.6</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Ciudad</MDBCardText>
                    <MDBCardText className="mb-1 h5">Buenos Aires</MDBCardText>
                  </div>
                </div>
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Franco Siciliano</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Programación<span className="mx-2">|</span> <a>Mensual</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Hola, tengo experiencia en bootstrap y react, puedo enseñarte lo que quieras sobre eso porque soy un maquina campeon mundial y follo como juli
                </MDBCardText>
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$100</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <MDBCardText className="mb-1 h5">4.6</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Ciudad</MDBCardText>
                    <MDBCardText className="mb-1 h5">Buenos Aires</MDBCardText>
                  </div>
                </div>
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>                           
        </MDBRow>
      </MDBContainer>
      <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Contratar clase</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Ingrese un teléfono al que el profesor pueda comunicarse</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoTelefono" placeholder="Ingresar teléfono" />
                                </Form.Group>
                                <Modal.Body>Ingrese un mail para que el profesor pueda contactarse</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoMail" placeholder="Ingresar e-mail" />
                                </Form.Group>
                                <Modal.Body>Horario de referencia para el contacto</Modal.Body>
                                <Form.Group id="text-insert">
                                    <Form.Control id="ingresoTelefono" placeholder="Ingresar horario" />
                                </Form.Group>
                                <Modal.Body>Motivo por el cual desea contratar esta clase</Modal.Body>
                                <Form.Group id="text-insert">
                                  <Form.Control as="textarea" rows={3} id="ingresoMotivo" placeholder="Ingresar motivo" />
                                </Form.Group>
                                <Modal.Footer id="footer-form">
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Enviar
                                </Button>
                                </Modal.Footer>
                            </Modal>
    </div>
  );
}