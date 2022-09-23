import {
  BrowserRouter as Router,
  Route,
  Routes,
} 
from "react-router-dom";
import Facebook from './componentes/Iniciosesion/facebooklogin';
import Registrarse from "./componentes/Registro/Registrarse";

function App(){
  return (
    <Router>
      <div>
        <Routes>
          <Route path = "/" element={<Facebook/>}>
          </Route>
          <Route path = "/registrarse" element={<Registrarse/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
