import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Descartes } from "./pages/descartes";
import { Home } from "./pages/home";
import CadastrarPonto from "./pages/cadastrar-ponto";
import { Login } from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/descartes" element={<Descartes/>}/>
          <Route path="/cadastrar_ponto" element={<CadastrarPonto/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
