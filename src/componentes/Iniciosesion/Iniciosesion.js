import React, { useEffect, useState } from "react";
import './IniciosesionCss.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
    Link
  } from "react-router-dom";


export default function Iniciosesion(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Teachup iniciar sesion o registrarse</title>
            <link rel="stylesheet" href="FacebookloginCs.css"></link>
        </head>
        <body>
            <main>
                <div class="rowsinho">
                    <div class="colm-logo">
                        <img src = "teachup.png" alt="Logo"/>
                    </div>
                    <div class="colm-form">
                        <div class="form-container">
                            <input type="text" placeholder="Dirección de correo electrónico"/>
                            <input type="password" placeholder="Contraseña"/>
                            <Link to='/paginaprincipal' class="btn-login">Iniciar sesión</Link>
                            <a href="#" onClick={handleShow}>¿Olvido su contraseña? </a> 

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Recupero de contraseña</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Complete con su mail para recibir los pasos para su recupero</Modal.Body>
                                <Form.Group id="mailGroup">
                                    <Form.Control id="ingresoMail" placeholder="Ingresar email" />
                                </Form.Group>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Cerrar
                                </Button>
                                <Button variant="primary" onClick={handleShow2}>
                                    Confirmar
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show2} onHide={handleClose2}>
                                <Modal.Header closeButton>
                                <Modal.Title>Recupero de contraseña</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Pregunta de seguridad</Modal.Body>
                                <Form.Group id="mailGroup">
                                    <Form.Control id="ingresoMail" placeholder="Ingresar respuesta" />
                                </Form.Group>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose2}>
                                    Volver
                                </Button>
                                <Button variant="primary" onClick={handleShow3}>
                                    Aceptar
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show3} onHide={handleClose3}>
                                <Modal.Header closeButton>
                                <Modal.Title>Recupero de contraseña</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Nueva contraseña</Modal.Body>
                                <Form.Group id="mailGroup">
                                    <Form.Control id="ingresoMail" placeholder="Ingrese contraseña nueva" />
                                </Form.Group>
                                <Modal.Body>Reingrese nueva contraseña</Modal.Body>
                                <Form.Group id="mailGroup">
                                    <Form.Control id="ingresoMail" placeholder="Reingrese contraseña nueva" />
                                </Form.Group>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose3}>
                                    Volver
                                </Button>
                                <Button variant="primary" onClick={handleShow4}>
                                    Confirmar
                                </Button>
                                </Modal.Footer>
                            </Modal>

                            <Modal show={show4} onHide={handleClose4} backdrop="static" keyboard={false} size="xl">
                                <Modal.Header>
                                <Modal.Title>Recupero de contraseña</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Su contraseña ha sido reestablecida. Por favor, inicie sesión nuevamente.</Modal.Body>
                                <Modal.Footer>
                                <Button variant="success" href="/inicioSesion">
                                    Entendido
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            <Link to='/registrarse' class="btn-new">Registrarse</Link>
                        </div>

                    </div>
                </div>
            </main>
        
           
            
        </body>
        </html>
)}