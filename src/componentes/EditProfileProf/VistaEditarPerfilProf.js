import NavbarProf from "../Navbar/NavbarProf";
import EditarPerfilProfesor from "./EditProfileProf";


export default function EditarPerfilProf(){
    return (
        <div style={{ backgroundColor:  "#1c1e21",height:"100vh" }}>
          <div className="divNav">
          <NavbarProf></NavbarProf>
          </div>
          <div className="contenedorTodoPerfil">
            <EditarPerfilProfesor></EditarPerfilProfesor>
          </div>
        </div>     
    )
  }