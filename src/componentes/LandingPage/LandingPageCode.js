import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './LandingPageCss.css';
import NavbarLanding from '../Navbar/NavbarLanding';

export default function LandingPageCode(){
return(
    <body>
        <section class="aboutTeachup">
            <div class="principal">
                <img src="teachup.png"></img>
                <div class="aboutUs-text">
                    <h1>About us</h1>
                    <h5>Somos TeachUp</h5>
                    <p align="justify">Somos una plataforma diseñada para fomentar el vínculo entre los miembros de la comunidad interesados por el saber. 
                        A través de nuestros recursos, profesionales de la educación especializados en diferentes áreas del conocimiento y estudiantes 
                        de todas las edades y regiones del mundo podrán ponerse en contacto fácilmente. 
                        De esta manera, TeachUp concentra una amplia oferta de cursos que favorece a profesores y alumnos.
                    </p>
                    <hr></hr>
                    <h2>Profesor</h2>
                    <p align="justify">¿Te interesa ofrecer tu enseñanza sobre algún tema o alguna materia en particular? Con TeachUp podés hacerlo.
                    Registrando una cuenta con el rol de "Profesor", podrás crear tus clases para que los alumnos las contraten.
                    </p>
                    <hr></hr>
                    <h2>Alumno</h2>
                    <p align="justify">Si lo que te interesa es aprender, o tener clases de apoyo, TeachUp es una gran opción. Registrándote con el rol de "alumno",
                    podrás contratar clases de lo que necesites.</p>
                    <hr></hr>
                    <h6 align="justify">Empezá ahora a usar TeachUp</h6>

                </div>
            </div>

        </section>
    </body>

)}