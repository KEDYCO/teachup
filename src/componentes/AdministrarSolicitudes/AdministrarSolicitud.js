import React, { useEffect, useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import './AdministrarSolicitudes.css'
import { contactBackend } from "../../API";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { PopUp } from "../PopUp/PopUp";

export default function AdministrarSolicitudes() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [solicitudes, setSolicitudes] = React.useState("");
  const [materia,setMateria] = React.useState("");

  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const [datosAprobar,setDatosAprobar] = React.useState({
    "_id": 0,
    "profesorID":""
  });

  const [datosRechazar,setDatosRechazar] = React.useState({
    "_id": 0
  });

  const mostrarSolicitudes = async () => {
    let data = {
      "claseID": sessionStorage.getItem("IDClase")
    }
    try {
      let res = await contactBackend("/solicitudunirse/getSolicitudesPID", false, "POST", null, data, false, 200)
      console.log(res)
      setSolicitudes(res.data)
      setMateria(res.data[0].materia)
    }
    catch (e) {
     
    }
  }

  const aprobarAlumno = async () =>{
    try{
      let res = await contactBackend("/solicitudunirse/aceptarSolicitud",false,"POST",null,datosAprobar,false,200 )
      console.log(res)
      window.location.reload()
    }
    catch(e){
      setTitle()
      setModalTitle("Error al aceptar solicitud")
      setText("Error al aceptar solicitud, intente nuevamente")
      showPopUp()
    }
  }

  const rechazarAlumno = async () =>{
    try{
      let res = await contactBackend("/solicitudunirse/rechazarSolicitud",false,"POST",null,datosRechazar,false,200 )
      console.log(res)
      window.location.reload()
    }
    catch(e){
      setTitle()
      setModalTitle("Error al rechazar solicitud")
      setText("Error al rechazar solicitud, intente nuevamente")
      showPopUp()
    }
  }

  useEffect(() => {
    mostrarSolicitudes()

  }, [])
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px", height: "100vh" }}>
      <MDBTypography className="text-decoration-underline fw-bold" tag="h1" color="white">{materia} </MDBTypography>
      
        {solicitudes && solicitudes.map((item) => {
          return (
            <MDBRow className="justify-content-center">
            <div key={item._id}>
              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '50px' }}
                        fluid
                      />
                      <h5>{item.nombreAlu}</h5><a>  {item.mail}</a>
                    </div>
                    </div>
                    <MDBCardBody>
                      <div>
                      <h6>{item.solicitud}</h6>
                      </div>
                      <div>
                      <b>Horario a contactar: </b><a>{item.horario}</a>
                      </div>
                    </MDBCardBody>
                    <div className="d-flex flex-row align-items-center">
                      <Button className="botonApruebo btn-success" onClick={() => {
                          setDatosAprobar({
                            "_id": item._id,
                            "profesorID": item.profesorID
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
                        }}  >
                        Rechazar
                      </Button>
                    </div>
                 
                </MDBCardBody>
              </MDBCard>
            </div>
</MDBRow>
          )
        })}
      











      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>¡Alumno aceptado!</Modal.Title>
        </Modal.Header>
        <Modal.Body>El alumno fue aceptado y podrá asistir a las clases</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={aprobarAlumno}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Alumno rechazado</Modal.Title>
        </Modal.Header>
        <Modal.Body>El alumno fue rechazado y no podrá asistir a las clases</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={rechazarAlumno}>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>

      <PopUp show={popup} onHide={hidePopUp} title={title} modalTitle={modalTitle} text={text}>

</PopUp>

    </MDBContainer>
  );
}