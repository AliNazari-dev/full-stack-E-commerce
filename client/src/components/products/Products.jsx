import "./products.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = ({ cat, filters, sort }) => {
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(cat ? `/product?category=${cat}` : `/product`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat && setFilteredProduct(product.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))));
  }, [product, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

   

  return (
    <div className='productsContainer'>
      {cat
        ? filteredProduct.map((item) => (
            <div key={item._id} className='container'>
              <img src={item.img} alt='l' />
              <div className='info'>
                <div className='icon'>
                  <FavoriteBorderOutlinedIcon />
                </div>

                <div className='icon'>
                  <ShoppingCartOutlinedIcon />
                </div>
                <div className='icon'>
                  <Link to={`/product/${item._id}`} style={{ color: "#000" }}>
                    <SearchOutlinedIcon />
                  </Link>
                </div>
              </div>
            </div>
          ))
        : product.slice(0, 5).map((item) => (
            <div key={item._id} className='container'>
              <img src={item.img} alt='l' />
              <div className='info'>
                <div className='icon'>
                  <FavoriteBorderOutlinedIcon />
                </div>

                <div className='icon'>
                  <ShoppingCartOutlinedIcon />
                </div>
                <div className='icon'>
                  <SearchOutlinedIcon />
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Products;
