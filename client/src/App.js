import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Single from "./pages/single/SingleProduct";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} index element={<Home />} />
        <Route path={"/products/:category"} element={<ProductList />} />
        <Route path={"/product/:productId"} element={<Single />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={user ? <Home /> : <Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
