import {
  BrowserRouter as Router,
  Route,
  Routes,
} 
from "react-router-dom";
import Iniciosesion from './componentes/Iniciosesion/Iniciosesion';
import Registrarse from "./componentes/Registro/Registrarse";
import Paginaprincipal from "./componentes/Paginaprincipal/Paginaprincipal";
import ProfileStatistics from "./componentes/Cards/Cards";




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
          <Route path = "/prueba" element={<ProfileStatistics/>}>
          </Route>
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
