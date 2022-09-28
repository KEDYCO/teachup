
import NavbarProf from "../Navbar/NavbarProf";
import ClasesProf from "./AdministrarClases";



  
export default function VistaAdministrarClases(){
    return (
        <div style={{ backgroundColor:  "#1c1e21",height:"100vh" }}>
          <div className="divNav">
          <NavbarProf ></NavbarProf>
          </div>
          <div className="contenedorTodoAlu">
            <ClasesProf></ClasesProf>
          </div>
                
          
        </div>     
    )
  }