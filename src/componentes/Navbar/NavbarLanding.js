import React from "react";
import './NavbarCss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


export default function NavbarLanding(){
    return(
        <nav className="nav">
        <a className="site-title"><img src="teachupsmall.png"/></a>
        <div className="botonContenedor">
            <Button variant="warning" href="/inicioSesion" active>
                Iniciar sesion
            </Button>
        <div>  </div>
            <Button variant="dark" href="/registrarse" active>
                Registrarse
            </Button>
        </div>
        </nav>

)} 