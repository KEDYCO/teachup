import React from "react";
import './NavbarCss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link
  } from "react-router-dom";

export default function Navbar(){
    return(
        <nav className="nav">
        <a href="/paginaprincipal" className="site-title"><img src="teachupsmall.png"/></a>
        
        <NavDropdown title="Perfil" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"> <img id="fotona" src="imgs/user.png"/>
                 Mi perfil
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"> <img id="fotona" src="imgs/edit.png"/> Editar perfil</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3"> <img id="fotona" src="imgs/settings.png"/>
                 Configuración
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4"> <img id="fotona" src="imgs/question.png"/>
                 Ayuda
              </NavDropdown.Item>
              <NavDropdown.Item href="/"> <img id="fotona" src="imgs/log-out.png"/>
                 Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
        </nav>

)} 