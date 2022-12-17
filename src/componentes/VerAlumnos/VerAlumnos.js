import React, { useEffect, useState } from 'react';
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
import { contactBackend } from "../../API";
import { PopUp } from "../PopUp/PopUp";


export default function VerAlumnos() {
  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);

  const [alumnos, setAlumnos] = React.useState("");

  const mostrarAlumnos = async () => {
    let data = {
      "_id": sessionStorage.getItem("IDClase")
    }
    try {
      let res = await contactBackend("/clases/getAlumnosCursando", false, "POST", null, data, false, 200)
      console.log(res)
      setAlumnos(res.data)
    }
    catch (e) {

    }
  }

  useEffect(() => {
    mostrarAlumnos()

  }, [])

  return (
    <section style={{ backgroundColor: "rgb(28,30,33)" }}>
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          {alumnos && alumnos.map((item)=>{
            return (
              <MDBCol md="12" lg="10">
              <div key={item._id}> 
              
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
                      {item.nombreAlu}
                    </MDBTypography>
                  </div>
                </div>
              </MDBCardBody>

              <hr className="my-0" />

            </MDBCard>
         
              </div>
              </MDBCol>
            )
          })}
          
        </MDBRow>
      </MDBContainer>
    </section>
  );
}