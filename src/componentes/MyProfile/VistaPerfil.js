import Navbar from "../Navbar/Navbar";
import PerfilUsuario from "./MyProfile";

export default function PerfilAlumno(){
    return (
        <div style={{ backgroundColor:  "#1c1e21",height:"100vh" }}>
          <div className="divNav">
          <Navbar ></Navbar>
          </div>
          <div className="contenedorTodoPerfil">
            <PerfilUsuario></PerfilUsuario>
          </div>
        </div>     
    )
  }