
import Navbar from "../Navbar/Navbar";
import CadaClase from "./ClaseAlumno";


  
export default function MisClasesAlu(){
    return (
        <div style={{ backgroundColor:  "#1c1e21",height:"100vh" }}>
          <div className="divNav">
          <Navbar ></Navbar>
          </div>
          <div className="contenedorTodoAlu">
            <CadaClase></CadaClase>
          </div>
                
          
        </div>     
    )
  }