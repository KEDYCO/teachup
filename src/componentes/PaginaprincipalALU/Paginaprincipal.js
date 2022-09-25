import {
    BrowserRouter as Router,
    Route,
    Routes,
  } 
  from "react-router-dom";
import Tarjetas from "../Cards/Cards";
import Navbar from "../Navbar/Navbar";
import Filtro from "./Filtro";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { Col, Row } from "react-bootstrap";

  
export default function Paginaprincipal(){
    return (
        <div style={{ backgroundColor:  "#1c1e21", width: "99.2%"}}>
          <div className="divNav">
          <Navbar ></Navbar>
          <div >
            <MDBRow>
              <MDBCol lg={3} className="contenedorPagina"><Filtro></Filtro></MDBCol>

              <MDBCol className="columnaInutil"><Tarjetas ></Tarjetas></MDBCol>
            </MDBRow>
          </div>
          
          
          </div>     
        </div>
    )
  }
  
  