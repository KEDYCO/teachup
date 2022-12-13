import {
  BrowserRouter as Router,
  Route,
  Routes,
}
  from "react-router-dom";
import NavbarProf from "../Navbar/NavbarProf";
import AdministrarComentarios from "./AdministrarComentarios";


export default function VistaAdministrarComentarios() {
  return (
    <div style={{ backgroundColor: "#1c1e21" }}>
      <div className="divNav">
        <NavbarProf></NavbarProf>
      </div>
      <div className="contenedorTodoAlu">
        <AdministrarComentarios></AdministrarComentarios>
      </div>
    </div>




  )
}