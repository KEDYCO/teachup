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


export default function VerAlumnos() {
  return (
    <section style={{ backgroundColor: "rgb(28,30,33)" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-3">

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h4" className="fw-bold mb-1">
                      Agustín Sturba
                    </MDBTypography>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

              <MDBCardBody className="p-3">

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h4" className="fw-bold mb-1">
                      Julián Gamietea
                    </MDBTypography>
                    
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />
              <MDBCardBody className="p-3">

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h4" className="fw-bold mb-1">
                      Lionel Hernández
                    </MDBTypography>
                    
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />

              <MDBCardBody className="p-3">

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h4" className="fw-bold mb-1">
                      Robert Moreira
                    </MDBTypography>
                    
                  </div>
                </div>
              </MDBCardBody>
              <hr className="my-0" />
            <MDBCardBody className="p-3">

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h4" className="fw-bold mb-1">
                      Jorge Bermúdez
                    </MDBTypography>
                   
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