import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

import { AiFillStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating';
import { ModalBody } from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox.js"
import { fontFamily, textTransform } from "@mui/system";
import AddComment from "../CommentBox/AddComment.js";
import { contactBackend } from "../../API";
import { PopUp } from "../PopUp/PopUp";


export default function CadaClase() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [rating, setRating] = useState(0);

  const handleChange = (event) => {
    setDatosComentarios({
      ...datosComentarios,
      [event.target.name]: event.target.value,
    })
    
  }

  const handleChangeRating = (value) => {
    setDatosComentarios({
      ...datosComentarios,
      clasificacion: value / 10
    });
    
  }



  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const [clases, setClases] = React.useState("");
  const [datosBaja, setDatosBaja] = React.useState({
    "_idClase": 0,
    "_idAlumno": 0,
    "estado": ""
  })

  const [datosComentarios, setDatosComentarios] = React.useState({
    "_idClase": 0,
    "_idAlumno": 0,
    "profesorID": 0,
    "nombreAlumno": "",
    "comentario": "",
    "clasificacion": 0
  })

  const mostrarClasesAlu = async () => {
    let data = {
      "_id": localStorage.getItem("id")
    }
    try {
      let res = await contactBackend("/users/getClasesAlu", false, "POST", null, data, false, 200)
      console.log(res)
      setClases(res.data)
    }
    catch (e) {

    }
  }

  const darBajaAlumno = async () => {
    try {
      let res = await contactBackend("/clases/bajaClase", false, "POST", null, datosBaja, false, 200)
      console.log(res)
      window.location.reload()

    }
    catch (e) {

    }
  }

  const handleSubmit = async () => {
    try{
      let res = await contactBackend("/caa/creacionComentarioAProbar",false,"POST",null,datosComentarios,false,201)
      console.log(res)
    }
    catch(e){
      
    }
  }

  useEffect(() => {
    mostrarClasesAlu()

  }, [])

  return (

    <div className="contenedorClaseAlu" style={{ backgroundColor: "#1c1e21", overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&family=Bebas+Neue&display=swap" rel="stylesheet" />

      <MDBContainer className="container py-5 h-100">
        <header style={{ color: "#FFA726", fontFamily: 'Bebas Neue', fontWeight: "bold" }}>
          <MDBTypography className="text-decoration fw-bold" tag="h1">Mis clases </MDBTypography>
        </header>

        <MDBRow className="row-cols-2 row-cols-md-3 g-4justify-content-center align-items-center h-100">

          {clases && clases.map((item) => {

            return (
              <MDBCol md="12" xl="4">
                <div key={item._id}>
                  <MDBCard style={{ borderRadius: '15px' }} id='pinga23'>
                    <MDBCardBody className="text-center">
                      <div className="mt-3 mb-4">
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          className="rounded-circle" fluid style={{ width: '100px' }} />
                      </div>
                      <MDBTypography tag="h4">{item.profesor}</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                        {item.materia}
                      </MDBCardText>
                      <Button disabled variant="info" style={{ textTransform: "capitalize" }} >
                        {item.estado}
                      </Button>

                      <div className="d-flex justify-content-end text-center mt-4 mb-2">

                        <div>
                          <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                          <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={5} size={"30px"} />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-center">
                        <Button rounded size="md" style={{ fontWeight: "bold" }} variant={"danger"} onClick={() => {
                          setDatosBaja({
                            "_idClase": item.idclase,
                            "_idAlumno": localStorage.getItem("id"),
                            "estado": "cancelado"

                          })
                          handleShow()
                        }} >
                          Darse de baja
                        </Button>
                        <Button rounded size="md" style={{ fontWeight: "bold" }} variant={"dark"} onClick={() => {
                          setDatosComentarios({
                            "claseID": item.idclase,
                            "alumnoID": localStorage.getItem("id"),
                            "profesorID": item.idProfesor,
                            "nombreAlumno": sessionStorage.getItem("nombre"),
                            "comentario": "",
                            "clasificacion": 0,
                          })
                          handleShow2()
                        }}  >
                          Comentar y puntuar
                        </Button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>

                </div>
              </MDBCol>
            )
          })}
        </MDBRow>
      </MDBContainer>



      <Modal show={show2} onHide={handleClose2} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Nuevo comentario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <AddComment handleChangeComment={handleChange} handleSubmit={handleSubmit} handleChangeRating={handleChangeRating} />
          </div>
        </Modal.Body>

      </Modal>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Solicitud de Baja</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            ¿Estás seguro que deseas solicitar la baja de la clase?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Cancelar <MDBIcon fas icon="long-arrow-alt-right ms-1" />
          </Button>
          <Button variant="danger" onClick={darBajaAlumno}>Confirmar</Button>
        </Modal.Footer>

      </Modal>

      <PopUp show={popup} onHide={hidePopUp} title={title} modalTitle={modalTitle} text={text}>

      </PopUp>
    </div>

  )
};