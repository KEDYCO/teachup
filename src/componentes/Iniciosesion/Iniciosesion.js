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
                            <button class="btn-login">Iniciar sesión</button>
                            <a href="#" onClick={handleShow}>Forgotten password? </a> 

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
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
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