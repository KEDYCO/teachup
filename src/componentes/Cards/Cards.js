
import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './CardsCss.css'
import { AiFillStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating'
import { ModalBody } from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox.js"

export default function Tarjetas() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [rating, setRating] = useState(0);
  
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
                <Button rounded size="lg" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
                <Button rounded size="lg" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
                <Button rounded size="lg" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
                <Button rounded size="lg" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
                <Button rounded size="lg" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
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
                  Programación<span className="mx-2">|</span> <a>Mensual</a><span className="mx-2">|</span> <a>40 horas</a>
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" onClick={handleShow} >
                  Contratar clase
                </Button>
                <Button rounded size="lg" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
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
        
        <Modal show={show2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Programación</Modal.Title>
            <Modal.Body>por Franco Siciliano</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <div>
            <CommentBox></CommentBox>
            </div>
          </Modal.Body>
          
        </Modal>

      
    </div>

  );
}