import { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './FiltroCss.css';
import React from 'react';
import Row from 'react-bootstrap/Row';
import {
  MDBCard,
  MDBCardHeader,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
import { contactBackend } from "../../API";
import { PopUp } from "../PopUp/PopUp";

export default function Filtro() {
  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);
  const [materia, setMateria] = React.useState()
  const [tipo, setTipo] = React.useState()
  const [frecuencia, setFrecuencia] = React.useState()
  const [precioMax, setPrecioMax] = React.useState()
  const [precioMin, setPrecioMin] = React.useState()
  const [clasificacionMax, setClasificacionMax] = React.useState()
  const [clasificacionMin, setClasificacionMin] = React.useState()

 


  const generarFiltro = async () => {
    sessionStorage.setItem("filtro", true)
    sessionStorage.setItem("materia",materia)
    sessionStorage.setItem("tipo",tipo)
    sessionStorage.setItem("frecuencia",frecuencia)
    sessionStorage.setItem("precioMin",precioMin)
    sessionStorage.setItem("precioMax",precioMax)
    sessionStorage.setItem("clasificacionMin",clasificacionMin)
    sessionStorage.setItem("clasificacionMax",clasificacionMax)
    window.location.reload() 
  }

  const quitarFiltro = async () => {
    sessionStorage.setItem("filtro", false)
    sessionStorage.setItem("materia",null)
    sessionStorage.setItem("tipo",null)
    sessionStorage.setItem("frecuencia",null)
    sessionStorage.setItem("precioMin",null)
    sessionStorage.setItem("precioMax",null)
    sessionStorage.setItem("clasificacionMin",null)
    sessionStorage.setItem("clasificacionMax",null)
    window.location.reload() 
  }


  return (

    <div className="tarjetadefiltro">
      <MDBCard className="cardFiltro">
        <div className="componenteFiltro">
          <MDBCardHeader><b>Buscar materia</b></MDBCardHeader>
          <Form.Control placeholder="Buscar por materia" value={materia} onChange={(text) => { setMateria(text.target.value) }}></Form.Control>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Tipo</b></MDBCardHeader>
          <Form.Select defaultValue="Elegir" value={tipo} onChange={(text) => { setTipo(text.target.value) }}>
            <option>Seleccionar</option>
            <option>Individual</option>
            <option>Grupal</option>
          </Form.Select>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Frecuencia</b></MDBCardHeader>
          <Form.Select defaultValue="Elegir" value={frecuencia} onChange={(text) => { setFrecuencia(text.target.value) }}>
            <option>Seleccionar</option>
            <option>Unica</option>
            <option>Semanal</option>
            <option>Mensual</option>
          </Form.Select>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Precio</b></MDBCardHeader>
          <Form.Control placeholder="Ingresar precio" value={precioMin} onChange={(text) => { setPrecioMin(text.target.value) }} />
          <Form.Label >Precio mínimo</Form.Label>
          <Form.Control placeholder="Ingresar precio" value={precioMax} onChange={(text) => { setPrecioMax(text.target.value) }} />
          <Form.Label>Precio máximo</Form.Label>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Clasificacion</b></MDBCardHeader>
          <label>Min</label>
          <Form.Control value={clasificacionMin} onChange={(text) => { setClasificacionMin(text.target.value) }} step="0.5" />
          <label>Max</label>
          <Form.Control value={clasificacionMax} onChange={(text) => { setClasificacionMax(text.target.value) }} step="0.5" />
        </div>
        <footer id="botonfiltrito">
          <Button variant={"secondary"} onClick={generarFiltro}>Filtrar</Button>
          <Button variant={"secondary"} onClick={quitarFiltro}>Quitar filtro</Button>
        </footer>
      </MDBCard>

    </div>
  );



}