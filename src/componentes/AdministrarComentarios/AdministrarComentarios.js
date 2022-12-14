import React, { useEffect, useState } from 'react';
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
import "./AdministrarComentariosCss.css";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { contactBackend } from "../../API";
import { PopUp } from "../PopUp/PopUp";


export default function AdministrarComentarios() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const [comentarios, setComentarios] = React.useState("");

  const mostrarComentarios = async () => {
    let data = {
      "profesorID": localStorage.getItem("id")
    }
    try {
      let res = await contactBackend("/caa/getComentariosAAprobarPID", false, "POST", null, data, false, 200)
      console.log(res)
      setComentarios(res.data)
    }
    catch (e) {

    }
  }

  const aprobarComentario = async () =>{
    try{
      let res = await contactBackend("/caa/aprobarComentario",false,"POST",null,datosAprobar,false,200)
      console.log(res)
      window.location.reload()
      handleClose()
      
    }
    catch (e){

    }
  }

  const rechazarComentario = async () =>{
    try{
      let res = await contactBackend("/caa/rechazarComentario",false,"POST",null,datosRechazar,false,200)
      console.log(res)
      window.location.reload()
      handleClose()
    }
    catch (e){

    }
  }

  const [datosRechazar,setDatosRechazar] = React.useState({
    "_id": 0
  })

  const [datosAprobar, setDatosAprobar] = React.useState({
    "_id": 0,
    "claseID": 1,
    "idAlu": 0,
    "nombreAlu": "",
    "textoComentario": "",
    "clasificacionComent": 0
  })

  useEffect(() => {
    mostrarComentarios()

  }, [])


  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px", height: "100vh" }}>
      <MDBRow className="justify-content-center">
        <MDBCol>
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody className="colorBody">
              {comentarios && comentarios.map((item) => {
                return (
                  <MDBCard className="mb-4">
                    <MDBCardBody className="colorBody">
                      <p>{item.comentario} </p>

                      <div className="d-flex justify-content-between">
                        <div className="d-flex flex-row align-items-center">
                          <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-circle"
                            style={{ width: '50px' }}
                            fluid
                          />
                          <p className="small mb-0 ms-2">{item.nombreAlumno}</p>
                        </div>
                        <div className="d-flex flex-row align-items-center">
                          <Button className="botonApruebo btn-success" onClick={() => {
                            setDatosAprobar({
                              "_id": item._id,
                              "claseID": item.claseID,
                              "idAlu": item.alumnoID,
                              "nombreAlu": item.nombreAlumno,
                              "textoComentario": item.comentario,
                              "clasificacionComent": item.clasificacion
                            })
                            handleShow()
                          }} >
                            Aprobar
                          </Button>
                          <MDBIcon
                            far
                            icon="thumbs-up mx-2 fa-xs text-black"
                            style={{ marginTop: "-0.16rem" }}
                          />
                          <Button className="botonRechazo btn-danger" onClick={() => {
                            setDatosRechazar({
                              "_id": item._id,
                              
                            })
                            handleShow2()
                          }} >
                            Rechazar
                          </Button>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                )
              })}



            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>








      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>?? El comentario fue aprobado !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Podra ver este comentario en la seccion de comentarios de su clase.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={aprobarComentario}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>El comentario fue rechazado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se rechaz?? el comentario. No ser?? visible en los comentarios de su clase.</Modal.Body>
        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={rechazarComentario}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>



    </MDBContainer>
  );
}