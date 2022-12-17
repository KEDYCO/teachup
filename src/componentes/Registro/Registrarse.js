import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { Card } from 'react-bootstrap';
import './RegistrarseCss.css';
import { esUnMail, yaExisteElMail,contieneCaracteresEspeciales,contieneNumeros } from "../../controles";
import { PopUp } from "../PopUp/PopUp";
import axios from "axios";
import { contactBackend } from "../../API";


export default function Registrarse() {
  const [popUp, setpopUp] = useState({
    mensaje: "",
    titulo: ""
  })
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = React.useState()
  const [telefono, setTelefono] = React.useState()
  const [nombre, setNombre] = React.useState()
  const [apellido, setApellido] = React.useState()
  const [password, setPassword] = React.useState()
  const [confPassword, setConfPassword] = React.useState()
  const [ciudad, setCiudad] = React.useState()
  const [rol, setRol] = React.useState()
  const [preguntaSeg, setPreguntaSeg] = React.useState()
  const [respuesta, setRespuesta] = React.useState()
  const [error, setError] = React.useState("");

  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();


    const existeMail = await yaExisteElMail(email);

    if (email === "" || !esUnMail(email)) {
      setpopUp({ mensaje: "Por favor, Ingrese un email valido", titulo: "Email Invalido" })
      setShowModal(true);
    }

    else if (telefono === "" || isNaN(telefono)) {
      setpopUp({ mensaje: "Por favor, Ingrese un tipo de documento valido", titulo: "Tipo de documento Invalido" })
      setShowModal(true);
    }

    else if (nombre === "" || contieneNumeros(nombre) || contieneCaracteresEspeciales(nombre)) {
      setpopUp({ mensaje: "Por favor, Ingrese un nombre valido", titulo: "Nombre Invalido" })
      setShowModal(true);
    }

    else if (apellido === "" || contieneNumeros(apellido) || contieneCaracteresEspeciales(apellido)) {
      setpopUp({ mensaje: "Por favor, Ingrese un apellido valido", titulo: "Apellido Invalido" })
      setShowModal(true);
    }


    else if (password === "") {
      setpopUp({ mensaje: "Por favor, Ingrese una contraseña", titulo: "Contraseña Invalido" })
      setShowModal(true);
    }

    else if (confPassword === "") {
      setpopUp({ mensaje: "Por favor, reingrese una contraseña", titulo: "Contraseña Invalido" })
      setShowModal(true);
    }

    else if (password !== confPassword) {
      setpopUp({ mensaje: "Por favor, verifique que las contraseñas sean iguales", titulo: "Contraseña Invalido" })
      setShowModal(true);
    }

    else if (ciudad === "") {
      setpopUp({ mensaje: "Por favor, Ingrese una ciudad valida", titulo: "Ciudad Invalido" })
      setShowModal(true);
    }

    else if (rol === "") {
      setpopUp({ mensaje: "Por favor, Ingrese un rol", titulo: "Rol invalido" })
      setShowModal(true);
    } 

    else if (preguntaSeg === "") {
      setpopUp({ mensaje: "Por favor, Ingrese una pregunta de seguridad", titulo: "Pregunta de seguridad invalido" })
      setShowModal(true);
    } 

    else if (respuesta === "") {
      setpopUp({ mensaje: "Por favor, Ingrese una respuesta", titulo: "Respuesta invalido" })
      setShowModal(true);
    } 

    else {
      handleClick()
    }

  };


  const navigate = useNavigate()
  const handleClick = () => {
    if (rol === "Alumno") {
      navigate('/RegistrarseAlu', {
        state:
        {
          email: email,
          telefono: telefono,
          nombre: nombre + " " + apellido,
          password: password,
          confPassword: confPassword,
          ciudad: ciudad,
          preguntaSeg: preguntaSeg,
          respuesta: respuesta,
          esProfesor: false
        }
      })
    }
    else {
      {
        navigate('/RegistrarseProf', {
          state:
          {
            email: email,
            telefono: telefono,
            nombre: nombre + " " + apellido,
            password: password,
            confPassword: confPassword,
            ciudad: ciudad,
            preguntaSeg: preguntaSeg,
            respuesta: respuesta,
            esProfesor: true
          }
        })
      }
    }
  }
  return (


    <div id='Contenedor'>
      <nav className="navReg">
        <a href="/" className="site-titleReg"><img src="teachupsmall.png" /></a>
      </nav>
      <Card id='Cartita'>
        <Card.Header as="h5" className='text-center'>Completa el formulario!
          <link rel="stylesheet" href="RegistrarseCss.css"></link>
        </Card.Header>
        <Card.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Ingresar email"
                  value={email}
                  onChange={(text) => { setEmail(text.target.value) }} />
                <Form.Control.Feedback type="invalid">Por favor ingrese un mail</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Nro de telefono"
                  value={telefono}
                  onChange={(text) => { setTelefono(text.target.value) }}
                />
                <Form.Control.Feedback type="invalid">Por favor ingrese un teléfono</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="alphabet"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(text) => { setNombre(text.target.value) }} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control placeholder="Apellido" value={apellido} onChange={(text) => { setApellido(text.target.value) }} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control placeholder="Contraseña" type="password" value={password} onChange={(text) => { setPassword(text.target.value) }} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress2">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control placeholder="Escriba nuevamente la contraseña" type="password" value={confPassword} onChange={(text) => { setConfPassword(text.target.value) }} />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Ciudad</Form.Label>
                <Form.Select defaultValue="Elegir" value={ciudad} onChange={(text) => { setCiudad(text.target.value) }}>
                  <option>Seleccionar</option>
                  <option>Avellaneda</option>
                  <option>Lomas de Zamora</option>
                  <option>Lanus</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Rol</Form.Label>
                <Form.Select value={rol} onChange={(text) => { setRol(text.target.value) }}>
                  <option>Seleccionar</option>
                  <option>Profesor</option>
                  <option>Alumno</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Elegir pregunta de seguridad</Form.Label>
                <Form.Select defaultValue="Elegir" value={preguntaSeg} onChange={(text) => { setPreguntaSeg(text.target.value) }}>
                  <option>Seleccionar</option>
                  <option>¿Cual era mi apodo en secundaria?</option>
                  <option>¿Cual fue el nombre de mi primer mascota?</option>
                  <option>¿Como se llamaba el colegio donde me egrese?</option>
                  <option>¿Como se llamaba el colegio donde me egrese</option>
                  <option>Nombre de mi primer pareja</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Respuesta</Form.Label>
                <Form.Control placeholder="Ingrese la respuesta a su pregunta" value={respuesta} onChange={(text) => { setRespuesta(text.target.value) }} />
              </Form.Group>
            </Row>
          </Form>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Continuar
          </Button>
          <Row>
            Al crear una cuenta aceptas tu conformidad con nuestros Términos y Condiciones, y la Política de Privacidad, además de afirmar que tienes 16 años de edad o más.
          </Row>
        </Card.Footer>
      </Card>

      <PopUp show={showModal} onHide={() => setShowModal(false)} text={popUp.mensaje}
                           title={popUp.titulo} modalTitle={modalTitle}/>

    </div>



  );
}