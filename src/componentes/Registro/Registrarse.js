import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import './RegistrarseCss.css'

export default function Registrarse() {
  return(
    
    
    <div id='Contenedor'>
    <nav className="navReg">
      <a href="/" className="site-titleReg"><img src="teachupsmall.png"/></a>
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
              <Form.Control type="email" placeholder="Ingresar email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="number" placeholder="Nro de telefono" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="alphabet" placeholder="Nombre" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Apellido</Form.Label>
              <Form.Control placeholder="Apellido" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control placeholder="Contraseña" type="password"/>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control placeholder="Escriba nuevamente la contraseña" type="password" />
            </Form.Group>
          </Row>
        
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Ciudad</Form.Label>
              <Form.Select defaultValue="Elegir">
                <option>Avellaneda</option>
                <option>Lomas de Zamora</option>
                <option>Lanus</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Rol</Form.Label>
              <Form.Select>
                <option>Profesor</option>
                <option>Alumno</option>
              </Form.Select>
            </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Elegir pregunta de seguridad</Form.Label>
              <Form.Select defaultValue="Elegir">
                <option>¿Cual era mi apodo en secundaria?</option>
                <option>¿Cual fue el nombre de mi primer mascota?</option>
                <option>¿Como se llamaba el colegio donde me egrese?</option>
                <option>¿Como se llamaba el colegio donde me egrese</option>
                <option>Nombre de mi primer pareja</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress1">
              <Form.Label>Respuesta</Form.Label>
              <Form.Control placeholder="Ingrese la respuesta a su pregunta" />
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" type="submit" href='/RegistrarseAlu'>
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