import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Nuevo from "./pages/nuevo";

const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/nuevo" element={<Nuevo />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App