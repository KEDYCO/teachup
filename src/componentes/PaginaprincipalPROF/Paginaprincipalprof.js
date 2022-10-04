import {
    BrowserRouter as Router,
    Route,
    Routes,
  } 
  from "react-router-dom";
import PerfilProfesor from "../MyProfileProf/MyProfileProf";
import NavbarProf from "../Navbar/NavbarProf";
  
  
  
export default function Paginaprincipalprof(){
    return (
      <div>
        <div>
        <NavbarProf></NavbarProf>
        </div>
      <div className="contenedorTodoPerfil">
        <PerfilProfesor></PerfilProfesor>
      </div>
    </div>
    )
  }
  