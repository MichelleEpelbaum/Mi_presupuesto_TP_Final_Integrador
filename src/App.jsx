import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home";
import Nuevo from "./pages/nuevo.jsx";
import Layout from "./layout/layout.jsx";
import Grafico from "./pages/graficos.jsx";


const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="nuevo" element={<Nuevo />} />
          <Route path="graficos" element={<Grafico />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App