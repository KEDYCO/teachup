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
    <section style={{ backgroundColor: "#ad655f" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10">
            <MDBCard className="text-dark">
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="mb-0">
                  Recent comments
                </MDBTypography>
                <p className="fw-light mb-4 pb-2">
                  Latest Comments section by users
                </p>

                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(23).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Maggie Marsh
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        March 07, 2021
                        <span className="badge bg-primary">Pending</span>
                      </p>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="pencil-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="redo-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="heart ms-2" />
                      </a>
                    </div>
                    <p className="mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it.
                    </p>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

              <MDBCardBody className="p-4">
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(26).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Lara Stewart
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        March 15, 2021
                        <span className="badge bg-success">Approved</span>
                      </p>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="pencil-alt ms-2" />
                      </a>
                      <a href="#!" className="text-success">
                        <MDBIcon fas icon="redo-alt ms-2" />
                      </a>
                      <a href="#!" className="link-danger">
                        <MDBIcon fas icon="heart ms-2" />
                      </a>
                    </div>
                    <p className="mb-0">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words, consectetur, from a Lorem Ipsum passage, and
                      going through the cites.
                    </p>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

              <MDBCardBody className="p-4">
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(33).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Alexa Bennett
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        March 24, 2021
                        <span className="badge bg-danger">Rejected</span>
                      </p>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="pencil-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="redo-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="heart ms-2" />
                      </a>
                    </div>
                    <p className="mb-0">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure.
                    </p>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

              <MDBCardBody className="p-4">
                <div className="d-flex flex-start">
                  <MDBCardImage
                    className="rounded-circle shadow-1-strong me-3"
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(24).webp"
                    alt="avatar"
                    width="60"
                    height="60"
                  />
                  <div>
                    <MDBTypography tag="h6" className="fw-bold mb-1">
                      Alexa Bennett
                    </MDBTypography>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0">
                        March 30, 2021
                        <span className="badge bg-primary">Pending</span>
                      </p>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="pencil-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="redo-alt ms-2" />
                      </a>
                      <a href="#!" className="link-muted">
                        <MDBIcon fas icon="heart ms-2" />
                      </a>
                    </div>
                    <p className="mb-0">
                      It uses a dictionary of over 200 Latin words, combined
                      with a handful of model sentence structures, to generate
                      Lorem Ipsum which looks reasonable. The generated Lorem
                      Ipsum is therefore always free from repetition, injected
                      humour, or non-characteristic words etc.
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