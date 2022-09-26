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









  return(
    
    <div id="contenedorFiltro">
    <div class="row">
        <aside class="col-sm-4"/>
    </div>
    <div class="cardFiltro">
      <article class="card-group-item">
      <header class="card-header">
                  <h6 class="title">Materias </h6>
              </header>
        <Dropdown >
            <Dropdown.Toggle variant="dark">
              Seleccionar materias
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <form>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Musica
                        </span>
                      </label>             
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Programacion
                        </span>
                      </label>  
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Lengua
                        </span>
                      </label>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Matematica
                        </span>
                      </label>
                  </form>
              
            </Dropdown.Menu>
          </Dropdown>
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
                  <h6 class="title">Ciudades </h6>
              </header>
        <Dropdown >
            <Dropdown.Toggle variant="dark" >
              Seleccionar ciudades
            </Dropdown.Toggle>
            <Dropdown.Menu >
              <form>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Avellaneda
                        </span>
                      </label>             
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Lanus
                        </span>
                      </label>  
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Lomas de Zamora
                        </span>
                      </label>
                      <label class="form-check">
                        <input class="form-check-input" type="checkbox" value=""/>
                        <span class="form-check-label">
                          Vicente Lopez
                        </span>
                      </label>
                  </form>
            </Dropdown.Menu>
          </Dropdown>
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
          <input type="number" class="form-control"  placeholder="1"/>
        </div>
        <div class="form-group col-md-6 text-right">
          <label>Max</label>

          <input type="number" class="form-control" placeholder="10"/>
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