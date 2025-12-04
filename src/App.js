import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Products from "./pages/Products";
import Shoes from "./pages/Shoes";
import Moniter from "./pages/Moniter";
import Cup from "./pages/Cup";
import DetailShoes from "./pages/DetailShoes";

const App=() =>{
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products />}>
              <Route index  element={<Shoes />}/>  
              <Route path=":id" element={<DetailShoes />}/>
              <Route path="moniter"  element={<Moniter />}/>
              <Route path="cup"  element={<Cup />}/>
            </Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
