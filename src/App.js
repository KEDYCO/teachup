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
  
  const [sesion,sesionState] = useState({logeado:false,datoSesion:{}});
  const iniciarSesion = (x) =>{
    sesionState(x)
  }
  const cerrarSesion = () =>{
    sesionState({logeado:false,datoSesion:{}})
  }

  return (
    <ContextoSesion.Provider value={sesion}>
      <Router>
        <div>
          <Routes>
            <Route path = "/" element={<AboutUs/>}>
            </Route>
            <Route path = "/inicioSesion" element={<Iniciosesion iniciarSesion={iniciarSesion} cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/registrarse" element={<Registrarse/>}>
            </Route>
            <Route path = "/registrarseAlu" element={<RegistrarseAlu/>}>
            </Route>
            <Route path = "/registrarseProf" element={<RegistrarseProf/>}>
            </Route>
            <Route path = "/paginaprincipal" element={<Paginaprincipal cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/paginaprincipalprof" element={<Paginaprincipalprof cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/misClasesAlu" element={<MisClasesAlu cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/miPerfil" element={<PerfilAlumno cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/miPerfilProf" element={<PerfilProfesor cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/editarPerfil" element={<EditarPerfil cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/editarPerfilProf" element={<EditarPerfilProf cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/VistaAdministrarComentarios" element={<VistaAdministrarComentarios cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/VistaAdministrarClases" element={<VistaAdministrarClases cerrarSesion={cerrarSesion}/>}>
            </Route>
            <Route path = "/VistaAdministrarSolicitudes" element={<VistaAdministrarSolicitudes cerrarSesion={cerrarSesion}/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </ContextoSesion.Provider> 
  )
}

export default App;
