import axios from "axios";
const regex = /\d/;

export const contieneNumeros = (string) => {
    console.log(string);
    return regex.test(string);
};

export const contieneCaracteresEspeciales = (string) => {
    const specialChars = "^[A-Za-z0-9 ]*$";
    return string.match(specialChars) === null;
}

export const esUnMail = (string) => {
    return string.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) != null;
};

export const yaExisteElMail = async (email) => {
    const admin = await axios.get(`http://localhost:8080/existeMailAdministrador?mail=${email}`);
    const responsable = await axios.get(`http://localhost:8080/existeMailResponsable?mail=${email}`);
    const jugadores = await axios.get(`http://localhost:8080/existeMailJugador?mail=${email}`);

    return (admin.data || responsable.data || jugadores.data);
}
