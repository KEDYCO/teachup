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

export default function Filtro() {
  const [precioMinimo, setPrecioMinimo] = useState(0);
  const funcPrecMin = (e) => {
    if (e.target.value > 0) {
      setPrecioMinimo(e.target.value)
    }
    else {
      setPrecioMinimo(0);
    }

  }
  const [precioMax, setPrecioMax] = useState(0);
  const funcPrecMax = (e) => {
    if (e.target.value > 0) {
      setPrecioMax(e.target.value)
    }
    else {
      setPrecioMax(0);
    }
  }


  const [puntMin, setPuntMin] = useState(1);
  const funcPuntMin = (e) => {
    if (e.target.value > 1 && 5 >= e.target.value) {
      setPuntMin(e.target.value)
    }
    else {
      setPuntMin(1);
    }
  }


  const [puntMax, setPuntMax] = useState(5);
  const funcPuntMax = (e) => {
    if (e.target.value > 0 && 5 >= e.target.value) {
      setPuntMax(e.target.value);
    }
    else {
      setPuntMax(5);
    }
  }

  return (

    <div className="tarjetadefiltro">
      <MDBCard className="cardFiltro">
        <div className="componenteFiltro">
          <MDBCardHeader><b>Buscar materia</b></MDBCardHeader>
          <Form.Control placeholder="Buscar por materia"></Form.Control>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Tipo</b></MDBCardHeader>
          <label class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <span class="form-check-label">
              <a>Individual</a>
            </span>
          </label>
          <label class="form-check">
            <input class="form-check-input" type="checkbox" value="" />
            <span class="form-check-label">
             <a> Grupal</a>
            </span>
          </label>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Frecuencia</b></MDBCardHeader>
          <label class="form-check">
            <input class="form-check-input" id="chekibox" type="checkbox" value="" />
            <span class="form-check-label">
              Unica
            </span>
          </label>
          <label class="form-check">
            <input class="form-check-input" id="chekibox" type="checkbox" value="" />
            <span class="form-check-label">
              Semanal
            </span>
          </label>
          <label class="form-check">
            <input class="form-check-input" id="chekibox" type="checkbox" value="" />
            <span class="form-check-label">
              Mensual
            </span>
          </label>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Precio</b></MDBCardHeader>
          <Form.Control placeholder="Ingresar precio" />
          <Form.Label>Precio mínimo</Form.Label>
          <Form.Control placeholder="Ingresar precio" />
          <Form.Label>Precio máximo</Form.Label>
        </div>
        <div className="componenteFiltro">
          <MDBCardHeader><b>Clasificacion</b></MDBCardHeader>
          <label>Min</label>
          <Form.Control value={puntMin} onChange={funcPuntMin} step="0.5" />
          <label>Max</label>
          <Form.Control value={puntMax} onChange={funcPuntMax} step="0.5" />
        </div>
      <footer id="botonfiltrito">
        <Button variant={"secondary"}>Filtrar</Button>
      </footer>
      </MDBCard>

    </div>
  );



}