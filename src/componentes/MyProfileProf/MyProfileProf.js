
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBTypography,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
  
  import React, { useEffect, useState } from "react";
  import { AiFillStar } from 'react-icons/ai';
  import Button from 'react-bootstrap/Button';
  import Form from 'react-bootstrap/Form';
  import Modal from 'react-bootstrap/Modal';
  import { Rating } from 'react-simple-star-rating'
  import { ModalBody } from "react-bootstrap";
  import CommentBox from "../CommentBox/CommentBox.js"
import VerAlumnos from '../VerAlumnos/VerAlumnos.js';
  
  export default function PerfilProfesor() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [rating, setRating] = useState(0);
    return (
      <section style={{ backgroundColor: "rgb(28,30,33)" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem active>/ Página principal</MDBBreadcrumbItem>
              </MDBBreadcrumb>
            </MDBCol>
          </MDBRow>
  
          <MDBRow>
            <MDBCol lg="4">
              <MDBCard className="mb-4">
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    style={{ width: '150px' }}
                    fluid />
                  <p className="text-muted mb-4">Lanús, Buenos Aires</p>
                  <div className="d-flex justify-content-center mb-2">
                    <Button href="/editarPerfil"><img id="fotona" src="imgs/edit.png"/> Editar perfil</Button> 
                  </div>
                </MDBCardBody>
              </MDBCard>
  
              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody className="p-0">
                  <MDBListGroup flush className="rounded-3">
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <img id="fotona" src="imgs/github.png"/>
                      <MDBCardText>profesor_ejemplar</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <img id="fotona" src="imgs/linkedin.png"/>
                      <MDBCardText>profesor_ejemplar</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <img id="fotona" src="imgs/reddit.png"/>
                      <MDBCardText>profesor_ejemplar</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <img id="fotona" src="imgs/twitter.png"/>
                      <MDBCardText>profesor_ejemplar</MDBCardText>
                    </MDBListGroupItem>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                      <img id="fotona" src="imgs/instagram.png"/>
                      <MDBCardText>profesor_ejemplar</MDBCardText>
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-0">
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Nombre completo</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">Profesor Ejemplar</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">profesorejemplar@gmail.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Teléfono fijo</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">42489696</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Teléfono móvil</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">1123456789</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Fecha de nacimiento</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">02/02/70</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
          
  
      <div className="" style={{ backgroundColor:  "#1c1e21", overflowX : "hidden"}}>
        
        <MDBContainer className=" py-5 h-100">
          <MDBTypography className="text-decoration-underline fw-bold" tag="h1" color="white">Clases creadas </MDBTypography>
          <MDBRow className="mb-3">
            <MDBCol md='4'>
              <MDBCard style={{ borderRadius: '15px' }} >
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle" fluid style={{ width: '100px' }} />
                  </div>
                  <MDBTypography tag="h4">Profesor Ejemplar</MDBTypography>
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
                      <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-center">
                <Button rounded size="sm" variant={"secondary"} onClick={handleShow} >
                  Ver alumnos
                </Button>
                <Button rounded size="sm" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md='4' className='ml-auto'>
              <MDBCard style={{ borderRadius: '15px' }} >
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle" fluid style={{ width: '100px' }} />
                  </div>
                  <MDBTypography tag="h4">Profesor Ejemplar</MDBTypography>
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
                      <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-center">
                <Button rounded size="sm" variant={"secondary"} onClick={handleShow} >
                  Ver alumnos
                </Button>
                <Button rounded size="sm" variant={"secondary"} onClick={handleShow2} >
                  Ver comentarios
                </Button>
                </div>
                  
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            
            
          </MDBRow>
        </MDBContainer>
        </div>
        
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Alumnos</Modal.Title>
            <Modal.Body>Alumnos inscriptos a esta clase: 5</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <div>
            <VerAlumnos></VerAlumnos>
            </div>
          </Modal.Body>
          
        </Modal>

        <Modal show={show2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Programación</Modal.Title>
            <Modal.Body>por Profesor Ejemplar</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <div>
            <CommentBox></CommentBox>
            </div>
          </Modal.Body>
          
        </Modal>
      </section>
    );
  }