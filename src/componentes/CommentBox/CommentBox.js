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




export default function Commentbox(idClase) {
  console.log(idClase)
  const [title, setTitle] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [text, setText] = useState("");
  const [popup, setPopup] = useState(false);
  const showPopUp = () => setPopup(true);
  const hidePopUp = () => setPopup(false);
  const [comentarios, setComentarios] = React.useState("")

  const mostrarComments = async () => {
    let data = {
      "idClase": idClase.idClase.idClase
    }
    try {
      let res = await contactBackend("/clases/getComentarios", false, "POST", null, data, false, 200)
      console.log(res)
      setComentarios(res.data)
    }
    catch (e) {

    }
  }

  useEffect(() => {
    mostrarComments()

  }, [])

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

                {comentarios && comentarios.map((item) => {
                  return (
                    <div key={item._id}>
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
                            {item.nombreAlu}
                          </MDBTypography>
                          <div className="d-flex align-items-center mb-3">
                            

                          </div>
                          <p className="mb-0" >
                            {item.textoComentario}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}


              </MDBCardBody>

              



            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}