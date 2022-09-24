import {
    BrowserRouter as Router,
    Route,
    Routes,
  } 
  from "react-router-dom";
  import Tarjetas from "./Cards";
import Navbar from "./Navbar";
  
  
  
export default function Paginaprincipal(){
    return (
        <div>
        <Navbar></Navbar>
        <Tarjetas></Tarjetas>
        </div>
    )
  }
  
  