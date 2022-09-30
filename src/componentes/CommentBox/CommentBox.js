import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


export default function Commentbox() {
  return (
    <section style={{ backgroundColor: "rgb(28,30,33)" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="11">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="mb-0">
                  Comentarios
                </MDBTypography>
                <p className="fw-light mb-4 pb-2">
                  Comentarios recientes de alumnos sobre esta clase
                </p>

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Agustín Sturba
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        24 de septiembre, 2022
                      </p>
                      
                    </div>
                    <p className="mb-0" >
                      Excelente clase, muy buen trato hacia los alumnos, pude aprender a programar y 
                      me sirvió para el laburo
                    </p>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

              <MDBCardBody className="p-4">
              

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Mauro Lombardo
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        20 de septiembre, 2022
                      </p>
                      
                    </div>
                    <p className="mb-0" >
                      Las clases buenas, se hizo un poco larga pero el profesor la sabía llevar bien jaja, recomendado
                    </p>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

              <MDBCardBody className="p-4">
          
           

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Alejandro Gómez
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        17 de septiembre, 2022
                      </p>
                      
                    </div>
                    <p className="mb-0" >
                      Buenas clases loco, para el profe 5 palabras: CRACK
                    </p>
                  </div>
                </div>
              </MDBCardBody>



            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}