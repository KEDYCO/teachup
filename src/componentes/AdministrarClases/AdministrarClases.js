import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon, MDBTextArea } from 'mdb-react-ui-kit';
import Col from 'react-bootstrap/Col';
import { AiFillStar } from 'react-icons/ai';
import "./AdministrarClasesCss.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from 'react-simple-star-rating';
import { ModalBody } from "react-bootstrap";
import CommentBox from "../CommentBox/CommentBox.js"
import { fontFamily } from "@mui/system";
import AddComment from "../CommentBox/AddComment.js";
import './AdministrarClasesCss.css'
import { contactBackend } from "../../API";
import { PopUp } from "../PopUp/PopUp";




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
  const [show6, setShow6] = useState(false);
  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);
  const [show7, setShow7] = useState(false);
  const handleClose7 = () => setShow7(false);
  const handleShow7 = () => setShow7(true);
  const [show8, setShow8] = useState(false);
  const handleClose8 = () => setShow8(false);
  const handleShow8 = () => setShow8(true);

  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const idProfesor = window.localStorage.getItem("id");
  const nombre = window.sessionStorage.getItem("nombre");
  const [materia, setMateria] = React.useState("");
  const [duracion, setDuracion] = React.useState("");
  const [frecuencia, setFrecuencia] = React.useState("");
  const [costo, setCosto] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");
  const [tipo, setTipo] = React.useState("");
  const [clasificacion, setClasificacion] = React.useState("");
  const [clases, setClases] = React.useState("");
  const [newDuracion, setNewDuracion] = React.useState("");
  const [newFrecuencia, setNewFrecuencia] = React.useState("");
  const [newCosto, setNewCosto] = React.useState("");
  const [datosModificar, setDatosModificar] = React.useState({
    "_id": 0,
    "duracion": 1,
    "frecuencia": "",
    "costo": 15
  })
  const [datosEliminar, setDatosEliminar] = React.useState({
    "_id": 0
  })

  const [datosModificarEstado, setDatosModificarEstado] = React.useState({
    "_id": 0,
    "estado": ""
  })


  const creacionClase = async () => {
    let data = {
      "idProfesor": idProfesor,
      "profesor": nombre,
      "materia": materia,
      "duracion": duracion,
      "frecuencia": frecuencia,
      "costo": costo,
      "descripcion": descripcion,
      "tipo": tipo
    }
    try {
      let res = await contactBackend("/clases/creacionClase", false, "POST", null, data, false, 201)
      console.log(res)
      if (frecuencia === "Seleccionar") {
        setTitle()
        setModalTitle("Error al crear clase")
        setText("Por favor, seleccione una frecuencia v??lida")
        showPopUp()
      }
      else {
        handleShow7()
      }
    }
    catch (e) {
      setTitle()
      setModalTitle("Error al crear clase")
      setText("Error al crear clase, por favor verifique los datos ingresados")
      showPopUp()
    }
  }

  const mostrarClases = async () => {
    let data = {
      "idProfesor": idProfesor
    }
    try {
      let res = await contactBackend("/clases/getClasesPID", false, "POST", null, data, false, 200)
      console.log(res)
      setClases(res.data)
    }
    catch (e) {

    }
  }

  useEffect(() => {
    mostrarClases()

  }, [])

  const modificarClase = async () => {
    try {
      let res = await contactBackend("/clases/modificarClase", false, "PUT", null, datosModificar, false, 200)
      console.log(res)
      handleShow5()
    }
    catch (e) {
      setTitle()
      setModalTitle("Error al modificar clase")
      setText("Error al modificar clase, verifique que los datos ingresados sean correctos")
      showPopUp()
    }
  }

  const modificarEstadoClase = async () =>{
    try{
      if(datosModificarEstado.estado === "publica"){
        setDatosModificarEstado({
          "estadoClase": "oculta"
        })
        let res = await contactBackend("/clases/modificarEstado",false,"PUT",null,datosModificarEstado,false,200)
        console.log(res)
        handleShow4()
      }
      else{
        setDatosModificarEstado({
          "estadoClase": "publica"
        })
        let res = await contactBackend("/clases/modificarEstado",false,"PUT",null,datosModificarEstado,false,200)
        console.log(res)
        handleShow6()
      }
      
    }
    catch(e){
      setTitle()
      setModalTitle("Error al cambiar estado de clase")
      setText("Error al cambiar el estado de la clase, intente nuevamente")
      showPopUp()
    }
  }

  
  
  const eliminarClase = async () => {
    try{
      let res = await contactBackend("/clases/eliminarClase",false,"POST",null,datosEliminar,false,200)
      console.log(res)
      window.location.reload()

    }
    catch(e){
      setTitle()
      setModalTitle("Error al eliminar clase")
      setText("Hubo un error al intentar eliminar la clase")
      showPopUp()
    }
  }


  

  return (

    <div className="contenedorClaseProf" style={{ backgroundColor: "#1c1e21", overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@700&family=Bebas+Neue&display=swap" rel="stylesheet" />

      <MDBContainer className="container py-5 h-100">
        <div className="d-flex justify-content-between">
          <header style={{ color: "#FFA726", fontFamily: 'Bebas Neue', fontWeight: "bold" }}>
            <MDBTypography className="text-decoration fw-bold" tag="h1">Mis clases </MDBTypography>
          </header>
          <Button rounded size="md" onClick={handleShow} fontWeight="bold" id='botonCrearClase'>
            <b> Crear nueva clase</b>
          </Button>
        </div>
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
                        {item.materia}<span className="mx-2">|</span> <a>{item.frecuencia}</a><span className="mx-2">|</span> <a>{item.duracion} horas</a><span className="mx-2">|</span> <a>{item.tipo}</a>
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
                      <b style={{marginTop: '2%', textTransform:'uppercase', fontSize:'16px'}}><img id="fotona2" src="imgs/change.png" onClick={() => {
                          setDatosModificarEstado({
                            "_id": item._id,
                            "estado": item.estadoClase
                          })
                         handleShow8()
                        }}/>??{item.estadoClase}</b>
                        <Button rounded size="sm" variant={"secondary"} onClick={() => {
                          setDatosModificar({
                            "_id": item._id,
                            "duracion": item.duracion,
                            "costo": item.costo,
                            "frecuencia": item.frecuencia
                          })
                          handleShow2()
                        }}>
                          Modificar
                        </Button>
                        <Button rounded size="sm" variant={"danger"} onClick={() => {
                          setDatosEliminar({
                            "_id": item._id,
                          })
                          handleShow3()
                        }} >
                          Eliminar
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
          <Modal.Title>Crear una nueva clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>Materia que se va a ense??ar</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoMateria" placeholder="Ingresar materia" value={materia} onChange={(text) => { setMateria(text.target.value) }} />
        </Form.Group>
        <Modal.Body>Duraci??n del curso (en horas)</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoDuracion" placeholder="Ingresar duraci??n" value={duracion} onChange={(text) => { setDuracion(text.target.value) }} />
        </Form.Group>
        <Modal.Body>Frecuencia de clase</Modal.Body>
        <Form.Group controlId="formGridState" id="text-insert" >
          <Form.Select defaultValue="Elegir" value={frecuencia} onChange={(text) => { setFrecuencia(text.target.value) }} >
            <option>Seleccionar</option>
            <option>Unica</option>
            <option>Semanal</option>
            <option>Mensual</option>
          </Form.Select>
        </Form.Group>
        <Modal.Body>Tipo de clase</Modal.Body>
        <Form.Group controlId="formGridState" id="text-insert" >
          <Form.Select defaultValue="Elegir" value={tipo} onChange={(text) => { setTipo(text.target.value) }} >
            <option>Seleccionar</option>
            <option>Individual</option>
            <option>Grupal</option>
          </Form.Select>
        </Form.Group>
        <Modal.Body>Costo del curso (en pesos)</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoCosto" placeholder="Ingresar costo" value={costo} onChange={(text) => { setCosto(text.target.value) }} />
        </Form.Group>
        <Modal.Body>Descripci??n de la clase</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoDescripcion" placeholder="Ingresar descripcion" as="textarea" rows={3} value={descripcion} onChange={(text) => { setDescripcion(text.target.value) }} />
        </Form.Group>

        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={creacionClase}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Modificar Clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>Duraci??n del curso (en horas)</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoDuracion" placeholder="Ingresar duraci??n" value={datosModificar.duracion} onChange={(text) => {
            setDatosModificar({
              ...
              datosModificar, ["duracion"]: text.target.value
            })
          }} />
        </Form.Group>
        <Modal.Body>Frecuencia de clase</Modal.Body>
        <Form.Group as={Col} controlId="formGridState" id="text-insert">
          <Form.Select defaultValue="Elegir" className="frecClasDDL" value={datosModificar.frecuencia} onChange={(text) => {
            setDatosModificar({
              ...
              datosModificar, ["frecuencia"]: text.target.value
            })
          }}>
            <option>Seleccionar</option>
            <option>??nica</option>
            <option>Semanal</option>
            <option>Mensual</option>
          </Form.Select>
        </Form.Group>
        <Modal.Body>Costo del curso (en pesos)</Modal.Body>
        <Form.Group id="text-insert">
          <Form.Control id="ingresoCosto" placeholder="Ingresar costo" value={datosModificar.costo} onChange={(text) => {
            setDatosModificar({
              ...
              datosModificar, ["costo"]: text.target.value
            })
          }} />
        </Form.Group>

        <Modal.Footer id="footer-form">
          <Button variant="secondary" onClick={handleClose2}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={modificarClase}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show3} onHide={handleClose3} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Eliminar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>??Est??s seguro que deseas eliminar esta clase?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={eliminarClase}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Estado de clase cambiado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se ha cambiado el estado de la clase a "Oculta"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4} href="/vistaadministrarclases">
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show5} onHide={handleClose5} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Modificar clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>??Clase modificada con ??xito!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose5} href="/vistaadministrarclases">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show6} onHide={handleClose6} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Estado de clase cambiado</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se ha cambiado el estado de la clase a "P??blica"</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose6} href="/vistaadministrarclases">
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show7} onHide={handleClose7} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Crear una nueva clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>??Clase creada con ??xito!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose7} href="/vistaadministrarclases">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show8} onHide={handleClose8} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Modificar estado de la clase</Modal.Title>
        </Modal.Header>
        <Modal.Body>??Est??s seguro que deseas modificar el estado de esta clase?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose8}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={modificarEstadoClase}>
            Modificar
          </Button>
        </Modal.Footer>
      </Modal>


      <PopUp show={popup} onHide={hidePopUp} title={title} modalTitle={modalTitle} text={text}>

      </PopUp>




    </div>
  )
};