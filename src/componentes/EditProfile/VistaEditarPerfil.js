import Navbar from "../Navbar/Navbar";
import EditarPerfilUsuario from "./EditProfile";


export default function EditarPerfil(){
    return (
        <div style={{ backgroundColor:  "#1c1e21",height:"100vh" }}>
          <div className="divNav">
          <Navbar ></Navbar>
          </div>
          <div className="contenedorTodoPerfil">
            <EditarPerfilUsuario></EditarPerfilUsuario>
          </div>
        </div>     
    )
  }