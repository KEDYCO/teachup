import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './LandingPageCss.css';
import NavbarLanding from '../Navbar/NavbarLanding';
import LandingPageCode from './LandingPageCode';

export default function AboutUs(){
return(
    <div style={{ backgroundColor:  "#1c1e21",height:"100vh" }}>
          <div className="divNav">
          <NavbarLanding></NavbarLanding>
          </div>
          <div>
            <LandingPageCode></LandingPageCode>
          </div>
          
          
    </div> 

)}