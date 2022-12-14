
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
    MDBBadge,
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
import { contactBackend } from "../../API";
import { useNavigate } from 'react-router-dom';
  
  export default function PerfilProfesor() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [rating, setRating] = useState(0);
    const idProfesor = window.localStorage.getItem("id");
    const email = window.localStorage.getItem("email");
    const nombre = window.sessionStorage.getItem("nombre");
    const telefono = window.sessionStorage.getItem("telefono");
    const fechaNac = window.sessionStorage.getItem("fechaNac");
    const ciudad = window.sessionStorage.getItem("ciudad");
    const [clases,setClases] = React.useState("");
    const navigate = useNavigate();

    const mostrarClases = async () =>{
      let data = {
        "idProfesor": idProfesor
      }
      try{
        let res = await contactBackend("/clases/getClasesPID",false,"POST",null,data,false,200)
        console.log(res)
        setClases(res.data)
      }
      catch(e){
  
      }
    }

    useEffect( () => {
      mostrarClases()
    }, [])

    const [claseID, setClaseID] = React.useState({
      "_id": 0,
    })

    const [datosNombrar,setDatosNombrar] = React.useState({
      "idClase":0,
      "materia":"",
      "profesor":""
    })

    const handleClick = () => {
      navigate('/VistaAdministrarSolicitudes')
    }

    return (

      <section style={{ backgroundColor: "rgb(28,30,33)" }}>
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                <MDBBreadcrumbItem active>/ P??gina principal</MDBBreadcrumbItem>
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
                  <p className="text-muted mb-4">{ciudad}, Buenos Aires</p>
                  <div className="d-flex justify-content-center mb-2">
                    <Button href="/editarPerfilProf"><img id="fotona" src="imgs/edit.png"/>??Editar perfil</Button> 
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
                      <MDBCardText className="text-muted">{nombre}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{email}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Tel??fono</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{telefono}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText>Fecha de nacimiento</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{fechaNac}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
          
  
      <div className="" style={{ backgroundColor:  "#1c1e21", overflowX : "hidden"}}>
        
        <MDBContainer className=" py-5 h-100">
          <MDBTypography className="text-decoration-underline fw-bold" tag="h1" color="white">Clases creadas </MDBTypography>
          <MDBRow className="mb-3">
          {clases && clases.map (item => (
            <MDBCol md='6'>
              <div key = {item._id}>
              <MDBCard style={{ borderRadius: '15px' }} id='pinga23' >
                <MDBCardBody className="text-center">
                  <div className="mt-3 mb-4">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                      className="rounded-circle" fluid style={{ width: '100px' }} />
                  </div>
                  <MDBTypography tag="h4">{item.profesor}</MDBTypography>
                  <MDBCardText className="text-muted mb-4">
                    {item.materia}<span className="mx-2">|</span> <a>{item.frecuencia}</a><span className="mx-2">|</span> <a>{item.duracion} horas</a> <span className="mx-2">|</span> <a>{item.tipo}</a>
                  </MDBCardText> 
                  <div className="d-flex justify-content-between text-center mt-4 mb-2">
                    <div>
                      <MDBCardText className="small text mb-0">Precio</MDBCardText>
                      <MDBCardText className="mb-1 h5">${item.costo}</MDBCardText>
                    </div>
                    <div>
                      <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                      <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={item.clasifcacion} size={"30px"}/>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-center">
                <Button rounded size="sm" variant={"secondary"} onClick={() => {
                        sessionStorage.setItem("IDClase",item._id)
                          handleShow()
                        }} >
                  Ver alumnos
                </Button>
                <Button rounded size="sm" variant={"secondary"} onClick={() => {
                        sessionStorage.setItem("IDClase",item._id)
                          handleClick()
                        }}> 
                  Solicitudes
                </Button>
                <Button rounded size="sm" variant={"secondary"} onClick={() => {
                        sessionStorage.setItem("IDClase",item._id)
                        setDatosNombrar({
                          "idClase":item._id,
                          "materia":item.materia,
                          "profesor":item.profesor
                        })
                          handleShow2()
                        }} >
                  Ver comentarios
                </Button>
                </div>
                  
                </MDBCardBody>
              </MDBCard>
              </div>
            </MDBCol>

          ))}   
          </MDBRow>
        </MDBContainer>
        </div>
        
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Alumnos</Modal.Title>
            <Modal.Body>Inscriptos:</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <div>
            <VerAlumnos></VerAlumnos>
            </div>
          </Modal.Body>
          
        </Modal>

        <Modal show={show2} onHide={handleClose2} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{datosNombrar.materia}</Modal.Title>
            <Modal.Body>por {datosNombrar.profesor}</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <div>
            <CommentBox idClase={datosNombrar}></CommentBox>
            </div>
          </Modal.Body>
          
        </Modal>

        <Modal show={show3} onHide={handleClose3} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Alumnos</Modal.Title>
            <Modal.Body>Solicitudes de alumnos:</Modal.Body>
          </Modal.Header>
          <Modal.Body>
            <div>
            <VerAlumnos></VerAlumnos>
            </div>
          </Modal.Body>
          
        </Modal>
      </section>
    );
  }