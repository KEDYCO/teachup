import React from "react";
import { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import './FiltroCss.css'

export default function Filtro(){
  const[precioMinimo, setPrecioMinimo]= useState(0);
  const funcPrecMin=(e)=>{
    if(  e.target.value > 0){
      setPrecioMinimo(e.target.value)
    }
    else{
      setPrecioMinimo(0);
    }
    
  }
  const[precioMax, setPrecioMax]= useState(0);
  const funcPrecMax=(e)=>{
    if(  e.target.value > 0){
      setPrecioMax(e.target.value)
    }
    else{
      setPrecioMax(0);
    }
  }


  const[puntMin, setPuntMin]= useState(1);
  const funcPuntMin=(e)=>{
    if( e.target.value > 1  && 5 >= e.target.value){
      setPuntMin(e.target.value)
    }
    else{
      setPuntMin(1);
    }
  }


  const[puntMax, setPuntMax]= useState(5);
  const funcPuntMax=(e)=>{
    if(e.target.value > 0 && 5 >= e.target.value ){
      setPuntMax(e.target.value);
    }
    else{
      setPuntMax(5);
    }
  }

  return(
    
    <div id="contenedorFiltro">
    <div class="row">
        <aside class="col-sm-4"/>
    </div>
    <div class="cardFiltro">
      <article class="card-group-item">
      <div class="input-group">
        <div id="search-autocomplete" class="form-outline">
          <input type="search" id="form1" class="form-control" />
          <label class="form-label" for="form1">Buscar materia</label>
        </div>
      </div>
          </article>
        
          
          <article class="card-group-item ">
          <header class="card-header">
                  <h6 class="title">Tipo </h6>
              </header>
              <div class="filter-content">
                  <div class="card-body">
                  <form>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Individual
                        </span>
                      </label> 
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Grupal
                        </span>
                      </label>  
                  </form>
                  </div> 
              </div>
          </article> 

          <article class="card-group-item">
          <header class="card-header">
                  <h6 class="title">Frecuencia </h6>
              </header>
              <div class="filter-content">
                  <div class="card-body">
                  <form>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Unica
                        </span>
                      </label> 
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Semanal
                        </span>
                      </label>  
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Mensual
                        </span>
                      </label>  
                  </form>
                  </div> 
              </div>
          </article> 

          <article class="card-group-item">
      <header class="card-header">
        <h6 class="title">Precio </h6>
      </header>
      <div class="filter-content">
        <div class="card-body">
        <div class="form-row">
        <div class="form-group col-md-6">
          <label>Minimo</label>
          <input type="number" class="form-control" value={precioMinimo} onChange={funcPrecMin} placeholder="$0"/>
        </div>
        <div class="form-group col-md-6 text-right">
          <label>Maximo</label>
          <input type="number" class="form-control" value={precioMax} onChange={funcPrecMax} />
        </div>
        </div>
        </div> 
      </div>
        </article> 
          <article class="card-group-item">
      <header class="card-header">
        <h6 class="title">Clasificacion </h6>
      </header>
      <div class="filter-content">
        <div class="card-body">
        <div class="form-row">
        <div class="form-group col-md-6">
          <label>Min</label>
          <input type="number" class="form-control" value={puntMin} onChange={funcPuntMin} step="0.5" />
        </div>
        <div class="form-group col-md-6 text-right">
          <label>Max</label>

          <input type="number" class="form-control" value={puntMax} onChange={funcPuntMax} step="0.5" />
        </div>
        </div>
        </div> 
      </div>
      <footer className="footbotonFiltrado">
        <button type="button" className="btnFilt btn btn-dark" >Filtrar</button>
      </footer>
    </article> 
    
  
  
  </div> 
  
  </div> 
  
    )

}