import React from "react"

export default function Facebook(){
    return(
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Teachup iniciar sesion o registrarse</title>
        </head>
        <body>
            <main>
                <div class="row">
                    <div class="colm-logo">
                        <img src = "teachup.png" alt="Logo"/>
                    </div>
                    <div class="colm-form">
                        <div class="form-container">
                            <input type="text" placeholder="Dirección de correo electrónico"/>
                            <input type="password" placeholder="Contraseña"/>
                            <button class="btn-login">Iniciar sesión</button>
                            <a href="#">¿Olvidaste la contraseña?</a>
                            <button class="btn-new">Registrarse</button>
                        </div>

                    </div>
                </div>
            </main>
           
            
        </body>
        </html>
)}