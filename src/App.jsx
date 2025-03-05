import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Ingresso from "./pages/Ingresso"
import ListEventos from "./pages/ListEventos"
import Organizadores from "./pages/Organizadores"
import CreateEvento from "./pages/CreateEvento"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingresso" element={<Ingresso/>} />
        <Route path="/eventos" element={<ListEventos />} />
        <Route path="/organizadores" element={<Organizadores />} />
        <Route path="/createvento" element={<CreateEvento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
