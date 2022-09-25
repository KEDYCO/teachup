import {
    BrowserRouter as Router,
    Route,
    Routes,
  } 
  from "react-router-dom";
import Tarjetas from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import Filtro from "./Filtro";
  
  
  
export default function Paginaprincipal(){
    return (
        <div>
          <div>
          <Navbar></Navbar>
          <Filtro></Filtro>
          </div>
          <Tarjetas></Tarjetas>
        </div>
    )
  }
  
  