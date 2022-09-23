import {
  BrowserRouter as Router,
  Route,
  Routes,
} 
from "react-router-dom";
import Iniciosesion from './componentes/Iniciosesion/Iniciosesion';
import Registrarse from "./componentes/Registro/Registrarse";
import Paginaprincipal from "./componentes/Paginaprincipal/Paginaprincipal";

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={<Iniciosesion/>}>
          </Route>
          <Route path = "/registrarse" element={<Registrarse/>}>
          </Route>
          <Route path = "/paginaprincipal" element={<Paginaprincipal/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
