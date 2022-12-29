import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Single from "./pages/single/SingleProduct";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} index element={<Home />} />
        <Route path={"/product"} element={<ProductList />} />
        <Route path='/single' element={<Single />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
