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

  return (
    <div className="contenedorClaseProf" style={{ backgroundColor:  "#1c1e21", overflowX : "hidden"}}>
        
      <MDBContainer className="container py-5 h-100">
      <div className="d-flex justify-content-between">
      <header style={{color: "#FFA726", fontFamily: "verdana", fontWeight: "bold", textDecoration: "underline"}}>
        
      <MDBTypography className="text-decoration-underline fw-bold" tag="h1">Mis clases 
      
      </MDBTypography>
    </header>
    <Button rounded size="md" variant={"primary"} onClick={handleShow5} >
                  Crear clase
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
                    <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={3.5} size={"30px"}/>
                  </div>
                </div>
                <div className="d-flex justify-content-between text-center">
                <Button rounded size="sm" variant={"success"} onClick={handleShow} >
                  Publicar
                </Button>
                <Button rounded size="sm" variant={"warning"} onClick={handleShow2} >
                  Despublicar
                </Button>
                <Button rounded size="sm" variant={"secondary"} onClick={handleShow4} >
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
</div>
)};