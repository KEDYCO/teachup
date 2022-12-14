import React from "react";
import './NavbarCss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MDBBadge, MDBIcon } from 'mdb-react-ui-kit';




export default function NavbarProf(){
  const cierroSesion = async () =>{
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/";
  }
    return(
        <nav className="nav">
        <a href="/paginaprincipalprof" className="site-title"><img src="teachupsmall.png"/></a>
        <ul>
       
        
        <li>
        <NavDropdown title="Perfil" id="nav-dropdown" menuVariant="light">
              <NavDropdown.Item href="/VistaAdministrarClases"> <img id="fotona" src="imgs/copybook.png"/>
                 Administrar clases
              </NavDropdown.Item>
              <NavDropdown.Item href="/VistaAdministrarComentarios"> <img id="fotona" src="imgs/settings.png"/>
                 Administrar comentarios
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/" onClick={cierroSesion}> <img id="fotona" src="imgs/log-out.png" />
                 Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
            
            </li>
          </ul>

        </nav>

)} 