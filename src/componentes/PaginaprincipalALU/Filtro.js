import React from "react";
import CardHeader from "react-bootstrap/esm/CardHeader";
import './FiltroCss.css'
import SidebarMenu from 'react-bootstrap-sidebar-menu';

export default function Filtro(){
    return(
    <SidebarMenu>
    <div>
    <div class="row">
        <aside class="col-sm-4"/>
    </div>
    <div class="card">
        <article class="card-group-item">
            <header class="card-header">
                <h6 class="title">Materia </h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
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
                </div> 
            </div>
        </article> 
        
        <article class="card-group-item">
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
                </form>
                </div> 
            </div>
        </article> 

        <article class="card-group-item">
        <header class="card-header">
                <h6 class="title">Ciudad </h6>
            </header>
            <div class="filter-content">
                <div class="card-body">
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
			  <input type="number" class="form-control" id="inputEmail4" placeholder="$0"/>
			</div>
			<div class="form-group col-md-6 text-right">
			  <label>Maximo</label>
			  <input type="number" class="form-control" placeholder="$1,0000"/>
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
			  <input type="number" class="form-control" id="inputEmail4" placeholder="1"/>
			</div>
			<div class="form-group col-md-6 text-right">
			  <label>Max</label>
			  <input type="number" class="form-control" placeholder="10"/>
			</div>
			</div>
			</div> 
		</div>
	</article> 
    




    <div class ="align-self-center">
        <button type="button" class="btn btn-outline-success">Filtrar</button>
    </div>
    </div> 
    
    </div> 
  </SidebarMenu>
    )

}