
import React, { useEffect, useState } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './CardsCss.css'
import { AiFillStar } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating';
import { ModalBody } from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox.js";
import { contactBackend } from "../../API";
import { PopUp } from "../PopUp/PopUp";

export default function Tarjetas() {
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
  const [clases, setClases] = React.useState("");

  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const mostrarClases = async () => {
    try {
      let res = await contactBackend("/clases/getClases", false, "GET", null, null, false, 200)
      console.log(res)
      setClases(res.data.docs)
    }
    catch (e) {

    }
  }

  useEffect(() => {
    mostrarClases()
  }, [])

  const [datosSolicitud, setDatosSolicitud] = React.useState({
    "claseID": 0,
    "alumnoID": 1,
    "solicitud": "",
    "horario": "",
    "nombreAlu": "",
    "materia": "",
    "profesor":"",
    "mail":""

  })

  const enviarSolicitud = async () =>{
    try{
      let res = await contactBackend("/solicitudunirse/creacionSolicitud",false,"POST",null,datosSolicitud,false,201)
      console.log(res)
      handleShow3()

    }catch(e){
      setTitle()
      setModalTitle("Error al contratar clase")
      setText("Error al contratar clase, por favor intente nuevamente")
      showPopUp()
    }
  }

  return (
    <div className="vh-100" style={{ backgroundColor: "#1c1e21", overflowX: "hidden" }}>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="row-cols-2 row-cols-md-3 g-4justify-content-center align-items-center h-100">
          {clases && clases.map(item => {
            return (
              <MDBCol md="12" xl="4">
                <div key={item._id}>
                  <MDBCard style={{ borderRadius: '15px' }} id='clasesContratar'>
                    <MDBCardBody className="text-center">
                      <div className="mt-3 mb-4">
                        <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                          className="rounded-circle" fluid style={{ width: '100px' }} />
                      </div>
                      <MDBTypography tag="h4">{item.profesor}</MDBTypography>
                      <MDBCardText className="text-muted mb-4">
                        {item.materia}<span className="mx-2">|</span> <a>{item.frecuencia}</a><span className="mx-2">|</span> <a>{item.duracion} horas</a>
                      </MDBCardText>
                      <MDBCardText className="text-muted mb-4" style={{ overflowX: "hidden" }}>
                        {item.descripcion}
                      </MDBCardText>
                      <div className="d-flex justify-content-between text-center mt-4 mb-2">
                        <div>
                          <MDBCardText className="small text mb-0">Precio</MDBCardText>
                          <MDBCardText className="mb-1 h5">${item.costo}</MDBCardText>
                        </div>
                        <div>
                          <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                          <Rating ratingValue={rating} readonly={true} allowHalfIcon={true} initialValue={item.clasificacion} size={"30px"} />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-center">
                        <Button rounded size="md" onClick={() => {
                          setDatosSolicitud({
                            "claseID": item._id,
                            "alumnoID": localStorage.getItem("id"),
                            "solicitud": "",
                            "horario": "",
                            "nombreAlu": sessionStorage.getItem("nombre"),
                            "materia": item.materia,
                            "profesor": item.profesor,
                            "mail": localStorage.getItem("email")
                          })
                          handleShow()
                        }} >
                          Contratar clase
                        </Button>
                        <Button rounded size="md" variant={"secondary"} onClick={handleShow2} >
                          Ver comentarios
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contratar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>Horario de referencia para el contacto</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoTelefono" placeholder="Ingresar horario" value={datosSolicitud.horario} onChange={(text) => {
            setDatosSolicitud({
              ...
              datosSolicitud, ["horario"]: text.target.value
            })
          }}/>
        </Form.Group>
        <Modal.Body>Motivo por el cual desea contratar esta clase</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control as="textarea" rows={3} id="ingresoMotivo" placeholder="Ingresar motivo" value={datosSolicitud.solicitud} onChange={(text) => {
            setDatosSolicitud({
              ...
              datosSolicitud, ["solicitud"]: text.target.value
            })
          }} />
        </Form.Group>
        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={enviarSolicitud}>
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

      <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Contratar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>Solicitud para unirse a la clase enviada.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose3} href="/paginaprincipal">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <PopUp show={popup} onHide={hidePopUp} title={title} modalTitle={modalTitle} text={text}>

      </PopUp>


    </div>

  );
}