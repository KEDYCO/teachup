import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export default function AdministrarComentarios() {
  return (
    <MDBContainer className="mt-5" style={{ maxWidth: "1000px" }}>
      <MDBRow className="justify-content-center">
        <MDBCol md="8" lg="6">
          <MDBCard
            className="shadow-0 border"
            style={{ backgroundColor: "#f0f2f5" }}
          >
            <MDBCardBody className="colorBody">
              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Martha</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                    <Button rounded size="xs" >
                       Aprobar comentario
                    </Button>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <Button rounded size="xs"  >
                        Contratar clase
                     </Button>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0">4</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Mary Kate</p>
                    </div>
                    <div className="d-flex flex-row align-items-center text-primary">
                      <p className="small mb-0">Upvoted</p>
                      <MDBIcon
                        fas
                        icon="thumbs-up mx-2 fa-xs"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small mb-0">2</p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody className="colorBody">
                  <p>Type your note, and hit enter to add it</p>

                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                        alt="avatar"
                        width="25"
                        height="25"
                      />
                      <p className="small mb-0 ms-2">Johny</p>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                      <p className="small text-muted mb-0">Upvote?</p>
                      <MDBIcon
                        far
                        icon="thumbs-up mx-2 fa-xs text-black"
                        style={{ marginTop: "-0.16rem" }}
                      />
                      <p className="small text-muted mb-0"></p>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}