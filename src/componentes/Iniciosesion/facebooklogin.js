import React from "react";
import './FacebookloginCs.module.css';
import {
    Link
  } from "react-router-dom";


export default function Facebook(){
    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Teachup iniciar sesion o registrarse</title>
            <link rel="stylesheet" href="FacebookloginCs.css"></link>
        </head>
        <body>
            <main>
                <div class="rowsinho">
                    <div class="colm-logo">
                        <img src = "teachup.png" alt="Logo"/>
                    </div>
                    <div class="colm-form">
                        <div class="form-container">
                            <input type="text" placeholder="Dirección de correo electrónico"/>
                            <input type="password" placeholder="Contraseña"/>
                            <button class="btn-login">Iniciar sesión</button>
                            <a href="#">¿Olvidaste la contraseña?</a>
                            <Link to='/registrarse' class="btn-new">Registrarse</Link>
                        </div>

                    </div>
                </div>
            </main>
           
            
        </body>
        </html>
)}