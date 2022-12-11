import {
  BrowserRouter as Router,
  Route,
  Routes,
} 

from "react-router-dom";
import { useEffect, useState } from "react";
import Iniciosesion from './componentes/Iniciosesion/Iniciosesion';
import Registrarse from "./componentes/Registro/Registrarse";
import Filtro from "./componentes/PaginaprincipalALU/Filtro";
import Paginaprincipal from "./componentes/PaginaprincipalALU/Paginaprincipal";
import ProfileStatistics from "./componentes/Cards/Cards";
import Paginaprincipalprof from "./componentes/PaginaprincipalPROF/Paginaprincipalprof";
import RegistrarseAlu from "./componentes/Registro/RegistrarseAlu";
import RegistrarseProf from "./componentes/Registro/RegistrarseProfesor";
import MisClasesAlu from "./componentes/ClaseAlumno/DisplayClase";
import AdministrarComentarios from "./componentes/AdministrarComentarios/AdministrarComentarios";

import PerfilAlumno from "./componentes/MyProfile/VistaPerfil";
import EditarPerfilUsuario from "./componentes/EditProfile/EditProfile";
import EditarPerfil from "./componentes/EditProfile/VistaEditarPerfil";

import VistaAdministrarComentarios from "./componentes/AdministrarComentarios/VistaAdministrarComentarios";
import PerfilProfesor from "./componentes/MyProfileProf/MyProfileProf";
import VistaAdministrarClases from "./componentes/AdministrarClases/VistaAdministrarClases";
import EditarPerfilProfesor from "./componentes/EditProfileProf/EditProfileProf";
import EditarPerfilProf from "./componentes/EditProfileProf/VistaEditarPerfilProf";
import AboutUs from "./componentes/LandingPage/LandingPage";
import VistaAdministrarSolicitudes from "./componentes/AdministrarSolicitudes/VistaAdministrarSolicitud";
import ContextoSesion from "./componentes/Contexto/Contexto";




function App(){
  
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const soyProfesor = window.localStorage.getItem("soyProfesor");
  console.log(loggedIn,"login");
  
  return (
    
      <Router>
        <div>
          <Routes>
            <Route path = "/" element={loggedIn ?<Paginaprincipal/>:<AboutUs/>}>
            </Route>
            <Route path = "/inicioSesion" element={<Iniciosesion/>}>
            </Route>
            <Route path = "/registrarse" element={<Registrarse/>}>
            </Route>
            <Route path = "/registrarseAlu" element={<RegistrarseAlu/>}>
            </Route>
            <Route path = "/registrarseProf" element={<RegistrarseProf/>}>
            </Route>
            <Route path = "/paginaprincipal" element={<Paginaprincipal/>}>
            </Route>
            <Route path = "/paginaprincipalprof" element={<Paginaprincipal/>}>
            </Route>
            <Route path = "/misClasesAlu" element={<MisClasesAlu/>}>
            </Route>
            <Route path = "/miPerfil" element={<PerfilAlumno/>}>
            </Route>
            <Route path = "/editarPerfil" element={<EditarPerfil/>}>
            </Route>
            <Route path = "/editarPerfilProf" element={<EditarPerfilProf/>}>
            </Route>
            <Route path = "/VistaAdministrarComentarios" element={<VistaAdministrarComentarios/>}>
            </Route>
            <Route path = "/VistaAdministrarClases" element={<VistaAdministrarClases/>}>
            </Route>
            <Route path = "/VistaAdministrarSolicitudes" element={<VistaAdministrarSolicitudes/>}>
            </Route>
          </Routes>
        </div>
      </Router>
  
  )
}

export default App;
