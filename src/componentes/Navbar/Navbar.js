import React from "react";
import './NavbarCss.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Notifications from "react-notifications-menu";
import NotificationMenu from "../Notification/Notification";


export default function Navbar(){
    return(
        <nav className="nav">
        <a href="/paginaprincipal" className="site-title"><img src="teachupsmall.png"/></a>
           <ul>
            <li><NotificationMenu></NotificationMenu></li>
        
        <li><NavDropdown title="Perfil" id="nav-dropdown" menuVariant="light">
              <NavDropdown.Item href="/miperfil"> <img id="fotona" src="imgs/user.png"/>
                 Mi perfil
              </NavDropdown.Item>
              <NavDropdown.Item href="/MisClasesAlu"> <img id="fotona" src="imgs/copybook.png"/>
                 Mis clases
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/"> <img id="fotona" src="imgs/log-out.png"/>
                 Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
            </li>
            </ul> 
        </nav>

)} 