import React, { useEffect, useState } from "react";
import './IniciosesionCss.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {
    Link, Navigate
} from "react-router-dom";
import { esUnMail } from "../../controles";
import { PopUp } from "../PopUp/PopUp";
import axios from "axios";

import {contactBackend} from "../../API";
import { useNavigate } from 'react-router-dom';



export default function Iniciosesion(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (pregSeguridad,id) => {setPreguntaSeg(pregSeguridad);setIdUsuario(id);setShow2(true)};
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);
    const [popup, setPopup] = useState(false);
    const showPopUp = () => setPopup(true);
    const hidePopUp = () => setPopup(false);
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const [title, setTitle] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [text,setText] = useState("");
    const navigate = useNavigate();
    const [emailRecup, setEmailRecup] = React.useState();
    const [preguntaSeg, setPreguntaSeg] = React.useState("");
    const [idUsuario, setIdUsuario] = React.useState("");
    const [respuesta, setRespuesta] = React.useState("");
    const [passwordRecup,setPasswordRecup] = React.useState("");
    const [confirmPasswordRecup,setConfirmPasswordRecup] = React.useState("");

    

    const validarInicioSesion = async () => {
        if (esUnMail(email) !== true) {
            setTitle()
            setModalTitle("Dirección de Correo Electrónico inválida")
            setText("Por favor, ingrese una dirección de correo electrónico válida")
            showPopUp()
        }
        else {
            let data = {
                "email": email,
                "password": password
              };
            try{
            let res = await contactBackend("/users/login",false,"POST",null,data,false,201)
            console.log(res)
            if(res.loginUser.user.esProfesor){
                localStorage.setItem("token",res.loginUser.token)
                localStorage.setItem("isLoggedIn",true)
                localStorage.setItem("soyProfesor",res.loginUser.user.esProfesor) 
                localStorage.setItem("email",res.loginUser.user.email)
                localStorage.setItem("id",res.loginUser.user._id)
                sessionStorage.setItem("telefono",res.loginUser.user.telefono)
                sessionStorage.setItem("nombre",res.loginUser.user.nombre)
                sessionStorage.setItem("ciudad",res.loginUser.user.ciudad)
                sessionStorage.setItem("fechaNac",res.loginUser.user.fechaNac)

            }
            else{
                localStorage.setItem("token",res.loginUser.token)
                localStorage.setItem("isLoggedIn",true)
                localStorage.setItem("soyProfesor",res.loginUser.user.esProfesor)
                localStorage.setItem("email",res.loginUser.user.email)
                localStorage.setItem("id",res.loginUser.user._id)
                sessionStorage.setItem("nombre",res.loginUser.user.nombre)
                
            }
            if(localStorage.getItem("isLoggedIn") === "true" && localStorage.getItem("soyProfesor") === "true"){
                navigate('/paginaprincipalprof')
                window.location.reload()
            }
            else{
                navigate('/paginaprincipal')
                window.location.reload()
                
            }

            }
            catch(e){
                setTitle()
                setModalTitle("Error al iniciar sesión")
                setText("El usuario o la contraseña son incorrectos")
                showPopUp()
            }
            


             
        }
    }

    const verificarMail = async () =>{
        let data ={
            "email": emailRecup
        };
        try{
            let res = await contactBackend("/users/userByMail",false,"POST",null,data,false,200)
            console.log(res)
            if(res.data[0].email !== emailRecup){
                setTitle()
                setModalTitle("Error al recuperar contraseña")
                setText("El email ingresado no corresponde a ningún usuario registrado")
                showPopUp()
            }
            else{
                handleShow2(res.data[0].preguntaSeg, res.data[0]._id)
                console.log(res)
            }
        }
        catch(e){
            console.log(e)
            setTitle()
            setModalTitle("Error al recuperar contraseña")
            setText("El email ingresado es incorrecto")
            showPopUp()
        }
    }

    const recuperarContrasena = async () =>{
        let data={
            "_id": idUsuario,
            "password": passwordRecup,
            "respuesta": respuesta
        };
        try{
            if(passwordRecup === confirmPasswordRecup){
                let res = await contactBackend("/users/actualizarUserPass",false,"PUT",null,data,false,200)
                console.log(res)
                setEmailRecup("")
                setPreguntaSeg("")
                setIdUsuario("")
                setRespuesta("")
                setPasswordRecup("")
                setConfirmPasswordRecup("")
                handleShow4()
            }
            else{
                setTitle()
                setModalTitle("Error al cambiar la contraseña")
                setText("Las contraseñas ingresadas no son iguales")
                showPopUp()
            }

        }
        catch(e){
            setTitle()
            setModalTitle("Error al cambiar la contraseña")
            setText("La respuesta a la pregunta de seguridad no es correcta")
            showPopUp()
        }
    }


    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Teachup iniciar sesion o registrarse</title>
                <link rel="stylesheet" href="FacebookloginCs.css"></link>
            </head>
            <body>
                <main>
                    <div class="rowsinho">
                        <div class="colm-logo">
                            <img src="teachup.png" alt="Logo" />
                        </div>
                        <div class="colm-form">
                            <div class="form-container">
                                <input type="text" placeholder="Dirección de correo electrónico" value={email} onChange={(event)=>{setEmail(event.target.value)}} />
                                <input type="password" placeholder="Contraseña" value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                                <Button className="btn-login" onClick={validarInicioSesion}>Iniciar sesión</Button>
                                <a href="#" onClick={handleShow}>¿Olvido su contraseña? </a>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Recupero de contraseña</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Complete con su mail para recibir los pasos para su recupero</Modal.Body>
                                    <Form.Group id="mailGroup">
                                        <Form.Control id="ingresoMail" placeholder="Ingresar email" value={emailRecup} onChange={(event)=>{setEmailRecup(event.target.value)}}/>
                                    </Form.Group>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cerrar
                                        </Button>
                                        <Button variant="primary" onClick={verificarMail}>
                                            Confirmar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>

                                <Modal show={show2} onHide={handleClose2}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Recupero de contraseña</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{preguntaSeg}</Modal.Body>
                                    <Form.Group id="mailGroup">
                                        <Form.Control id="ingresoMail" placeholder="Ingresar respuesta" value={respuesta} onChange={(event)=>{setRespuesta(event.target.value)}}  />
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
                                        <Form.Control id="ingresoMail" placeholder="Ingrese contraseña nueva" type="password" value={passwordRecup} onChange={(event)=>{setPasswordRecup(event.target.value)}} />
                                    </Form.Group>
                                    <Modal.Body>Reingrese nueva contraseña</Modal.Body>
                                    <Form.Group id="mailGroup">
                                        <Form.Control id="ingresoMail" placeholder="Reingrese contraseña nueva" type="password" value={confirmPasswordRecup} onChange={(event)=>{setConfirmPasswordRecup(event.target.value)}}/>
                                    </Form.Group>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose3}>
                                            Volver
                                        </Button>
                                        <Button variant="primary" onClick={recuperarContrasena}>
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
                    <PopUp show={popup} onHide={hidePopUp} title={title} modalTitle={modalTitle} text={text}>

                    </PopUp>
                </main>



            </body>
        </html>
    )
}