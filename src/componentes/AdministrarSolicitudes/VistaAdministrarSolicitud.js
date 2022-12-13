import {
  BrowserRouter as Router,
  Route,
  Routes,
}
  from "react-router-dom";
import NavbarProf from "../Navbar/NavbarProf";
import AdministrarSolicitudes from "./AdministrarSolicitud";


export default function VistaAdministrarSolicitudes() {
  return (
    <div style={{ backgroundColor: "#1c1e21" }}>
      <div className="divNav">
        <NavbarProf></NavbarProf>
      </div>
      <div className="contenedorTodoAlu">
        <AdministrarSolicitudes></AdministrarSolicitudes>
      </div>
    </div>




  )
}