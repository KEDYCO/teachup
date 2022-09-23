import {
  BrowserRouter as Router,
  Route,
  Routes,
} 
from "react-router-dom";
import Iniciosesion from './componentes/Iniciosesion/Iniciosesion';
import Registrarse from "./componentes/Registro/Registrarse";
import Navbar from "./componentes/Paginaprincipal/Navbar";



function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={<Iniciosesion/>}>
          </Route>
          <Route path = "/registrarse" element={<Registrarse/>}>
          </Route>
          <Route path = "/paginaprincipal" element={<Navbar/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
