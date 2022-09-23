import React from "react";
import './PaginaprincipalCss.css';

export default function Paginaprincipal(){
    return(
        <nav className="nav">
        <a href="/paginaprincipal" className="site-title"><img src="teachupsmall.png"/></a>
        <ul>
            <li>
                <a href="/profesores">Profesores</a>   
            </li>
            <li>
                <a href="/aboutus">Sobre nosotros</a>
            </li>
        </ul>
        </nav>
)}