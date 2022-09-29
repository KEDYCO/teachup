import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

import { AiFillStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating';
import { ModalBody } from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox.js"
import { fontFamily } from "@mui/system";
import AddComment from "../CommentBox/AddComment.js";

export default function CadaClase() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [rating, setRating] = useState(0);
  
  return (
    
    <div className="contenedorClaseAlu" style={{ backgroundColor:  "#1c1e21", overflowX : "hidden"}}>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&family=Bebas+Neue&display=swap" rel="stylesheet"/>

      <MDBContainer className="container py-5 h-100">
      <header  style={{color: "#FFA726", fontFamily: 'Bebas Neue', fontWeight: "bold"}}>
      <MDBTypography className="text-decoration fw-bold" tag="h1">Mis clases </MDBTypography>
    </header>
     
        <MDBRow className="row-cols-2 row-cols-md-3 g-4justify-content-center align-items-center h-100"> 
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                    className="rounded-circle" fluid style={{ width: '100px' }} />
                </div>
                <MDBTypography tag="h4">Julian Casablancas</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Musica<span className="mx-2">|</span> <a>Semanal</a><span className="mx-2">|</span> <a>40 horas</a>
                </MDBCardText>
                <Button disabled variant="info" >
                  En curso
                </Button>
                
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$1251</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="lg" variant={"danger"} onClick={handleShow} >
                  Darse de baja
                </Button>
                <Button rounded size="lg" variant={"dark"} onClick={handleShow2} >
                  Comentar y puntuar
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
                <MDBTypography tag="h4">John Mulaney</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                  Lengua<span className="mx-2">|</span> <a>Unica</a><span className="mx-2">|</span> <a>3 horas</a>
                </MDBCardText>
                <Button disabled variant="success" >
                  Terminado
                </Button>
                
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$1500</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center text-center">
                <Button rounded size="lg" variant={"dark"} onClick={handleShow2} >
                  Comentar y puntuar
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
                  Programación<span className="mx-2">|</span> <a>Semanal</a><span className="mx-2">|</span> <a>50 horas</a>
                </MDBCardText>
                <Button disabled variant="warning" >
                  Esperando confirmacion
                </Button>
                
                <div className="d-flex justify-content-between text-center mt-4 mb-2">
                  <div>
                    <MDBCardText className="small text mb-0">Precio</MDBCardText>
                    <MDBCardText className="mb-1 h5">$912</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-center text-center">
                <Button rounded size="lg" variant={"danger"} onClick={handleShow} >
                  Darse de baja
                </Button>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
    </MDBContainer>

          

        <Modal show={show2} onHide={handleClose2} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Nuevo comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
            <AddComment></AddComment>
            </div>
          </Modal.Body>
          
        </Modal>
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Solicitud de Baja</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
                ¿Estás seguro que deseas solicitar la baja de la clase Programacion?
            </div>
          </Modal.Body>
          <Modal.Footer>
                <Button variant="light" onClick={handleClose}>
                        Cancelar <MDBIcon fas icon="long-arrow-alt-right ms-1" />
                </Button>
                <Button variant="danger">Confirmar</Button>
          </Modal.Footer>
          
        </Modal>
        </div>
    
          )};