import React, { useEffect, useState } from "react";
import './NavbarCss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Notifications from "react-notifications-menu";
import NotificationMenu from "../Notification/Notification";
import { esUnMail, yaExisteElMail } from "../../controles";
import { PopUp } from "../PopUp/PopUp";
import axios from "axios";
import {contactBackend} from "../../API";
import { useNavigate } from 'react-router-dom';


export default function Navbar(){
  const email = window.localStorage.getItem("email");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);
  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text,setText] = useState("");
  const navigate = useNavigate();
  const [telefono, setTelefono] = React.useState()
  const [nombre, setNombre] = React.useState()
  const [apellido, setApellido] = React.useState()
  const [ciudad, setCiudad] = React.useState()
  

  const cierroSesion = async () =>{
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  }

  const mostrarInfoUsuario = async () => {
    let data = {
      "email" : email
    };
    try{
      let res = await contactBackend("/users/userByMail",false,"POST",null,data,false,200)
      console.log(res)
      sessionStorage.setItem("email",res.data[0].email)
      sessionStorage.setItem("nombre",res.data[0].nombre)
      sessionStorage.setItem("fechaNac",res.data[0].fechaNac)
      sessionStorage.setItem("telefono",res.data[0].telefono)
      sessionStorage.setItem("ciudad",res.data[0].ciudad)
      navigate('/miperfil')
      
    }
    catch(e){
      setTitle()
      setModalTitle("Error al mostrar info de usuario")
      setText("No se pudo mostrar la información del usuario")
      showPopUp()
    }
    
  }


    
    return(
        <nav className="nav">
        <a href="/paginaprincipal" className="site-title"><img src="teachupsmall.png"/></a>
           <ul>
            <li><NotificationMenu></NotificationMenu></li>
        
        <li><NavDropdown title="Perfil" id="nav-dropdown" menuVariant="light">
              <NavDropdown.Item onClick={mostrarInfoUsuario}> <img id="fotona" src="imgs/user.png"/>
                 Mi perfil
              </NavDropdown.Item>
              <NavDropdown.Item href="/MisClasesAlu" > <img id="fotona" src="imgs/copybook.png"/>
                 Mis clases
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={cierroSesion}> <img id="fotona" src="imgs/log-out.png" />
                 Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
            </li>
            </ul> 
            <PopUp 
            show={popup} 
            onHide={hidePopUp} 
            title={title} 
            modalTitle={modalTitle} 
            text={text}>
            </PopUp>
        </nav>

)} 