import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { Card } from 'react-bootstrap';
import { MDBCheckbox } from 'mdb-react-ui-kit';
import './RegistrarseCss.css'

export default function RegistrarseProf() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return(
    
    <div id='Contenedor'>
    <nav className="navReg">
      <a href="/" className="site-titleReg"><img src="teachupsmall.png"/></a>
    </nav>
    <Card id='CartitaAlu'>
    <Card.Header as="h5" className='text-center'>Último paso
    <link rel="stylesheet" href="RegistrarseCss.css"></link>
    </Card.Header>
    <Card.Body>
      <Form>
          <Row className="mb-3">
            <Form.Group>
                <Form.Label>Título</Form.Label>
                <Form.Control placeholder="Ingresar el título que posee" />
            </Form.Group>
            </Row>
            <Row>
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Experiencia</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Describa su experiencia en el rubro">
              </Form.Control>
            </Form.Group> 
          </Row>
        </Form>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" onClick={handleShow}>
              Enviar
        </Button>
        
      </Card.Footer>
    </Card>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>Cuenta de profesor creada</Modal.Title>
        </Modal.Header>
        <Modal.Body>Se ha enviado un mail de confirmación a su casilla de correo electrónico</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} href='/paginaprincipalProf'>
            Entendido
          </Button>
        </Modal.Footer>
      </Modal>
    
    </div>
    
  );
}