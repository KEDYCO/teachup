
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
  import { FormLabel, ModalBody } from "react-bootstrap";
  import CommentBox from "../CommentBox/CommentBox.js"
  
  export default function EditarPerfilUsuario() {
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
                <MDBBreadcrumbItem>
                  <a href='/paginaprincipal'>Home</a>
                </MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>Perfil Alumno</MDBBreadcrumbItem>
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
                  <p className="text-muted mb-1">Alumno de UADE</p>
                  <p className="text-muted mb-4">Avellaneda, Buenos Aires</p>
                  <div className="d-flex justify-content-center mb-2">
                    <Button><img id="botonupload" src="imgs/upload.png"/> Subir Imagen</Button> 
                  </div>
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
                    <MDBCardText className="text-muted">Alumno Ejemplar</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">alumnoejemplar@gmail.com</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Teléfono</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                    <Form.Control placeholder="42489696" />
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Fecha de nacimiento</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">01/01/99</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
              <MDBCol >
                <Button id="botonguardar" onClick={handleShow} variant="success">Guardar cambios</Button>
              </MDBCol>
                

              
            </MDBCol>
            
          </MDBRow>
        </MDBContainer>
        <Modal show={show} onHide={handleClose} size="md" backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Cambios guardados</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Se han guardado los cambios realizados.
          </Modal.Body>
          <Modal.Footer>
        <Button variant="success" onClick={handleClose} href='/miperfil'>
            Entendido
        </Button>
        </Modal.Footer>
    </Modal>
        
      </section>
      
    );
  }