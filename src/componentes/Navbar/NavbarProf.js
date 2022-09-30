import React from "react";
import './NavbarCss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Notification from "../Notification/Notification";


export default function NavbarProf(){
    return(
        <nav className="nav">
        <a href="/paginaprincipalprof" className="site-title"><img src="teachupsmall.png"/></a>
        <Notification></Notification>
        <NavDropdown title="Perfil" id="nav-dropdown" menuVariant="light">
              <NavDropdown.Item href="/VistaAdministrarClases"> <img id="fotona" src="imgs/copybook.png"/>
                 Administrar clases
              </NavDropdown.Item>
              <NavDropdown.Item href="/VistaAdministrarComentarios"> <img id="fotona" src="imgs/settings.png"/>
                 Administrar comentarios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/"> <img id="fotona" src="imgs/log-out.png"/>
                 Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
        </nav>

)} 