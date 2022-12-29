import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/product"} element={<ProductList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
