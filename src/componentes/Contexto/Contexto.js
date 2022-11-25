import {useContext, createContext} from "react";

const ContextoSesion = createContext({logeado:false,datoSesion:{} });

export default ContextoSesion;