import {
    BrowserRouter as Router,
    Route,
    Routes,
  } 
  from "react-router-dom";
import Tarjetas from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
  
  
  
export default function Paginaprincipal(){
    return (
        <div>
          <Navbar></Navbar>
          <Tarjetas></Tarjetas>
        </div>
    )
  }
  
  