import { useNavigate } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import './RegistrarseCss.css'


export default function Registrarse() {
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
  const [title, setTitle] = React.useState("");
  const [modalTitle, setModalTitle] = React.useState("");


  const navigate = useNavigate()
  const handleClick = () => {
      if (rol === "Alumno") {
        navigate('/RegistrarseAlu', {
          state:
          {
            email: email,
            telefono: telefono,
            nombre: nombre,
            apellido: apellido,
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
              nombre: nombre,
              apellido: apellido,
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
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Ingresar email" value={email} onChange={(text) => { setEmail(text.target.value) }} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Nro de telefono" value={telefono} onChange={(text) => { setTelefono(text.target.value) }} />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="alphabet" placeholder="Nombre" value={nombre} onChange={(text) => { setNombre(text.target.value) }} />
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
                  <option>Avellaneda</option>
                  <option>Lomas de Zamora</option>
                  <option>Lanus</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Rol</Form.Label>
                <Form.Select value={rol} onChange={(text) => { setRol(text.target.value) }}>
                  <option>Profesor</option>
                  <option>Alumno</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Elegir pregunta de seguridad</Form.Label>
                <Form.Select defaultValue="Elegir" value={preguntaSeg} onChange={(text) => { setPreguntaSeg(text.target.value) }}>
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
          <Button variant="primary" type="submit" onClick={(e) => { e.preventDefault(); handleClick() }}>
            Continuar
          </Button>
          <Row>
            Al crear una cuenta aceptas tu conformidad con nuestros Términos y Condiciones, y la Política de Privacidad, además de afirmar que tienes 16 años de edad o más.
          </Row>
        </Card.Footer>
      </Card>

    </div>



  );
}