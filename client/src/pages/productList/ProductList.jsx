import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";
import "./productList.scss";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    const value = e.target.value;
    if (value) {
      setFilters({ ...filters, [e.target.name]: value });
    } else if (value === "") {
      setFilters({});
    }
  };

  return (
    <div className='container'>
      <Navbar />
      <Announcement />
      <h1 className='title'>{cat}</h1>
      <div className='filterContainer'>
        <div className='filter'>
          <span className='filterText'>Filter Products</span>
          <select name='color' id='' className='select' defaultValue={"DEFAULT"} onChange={handleFilter}>
            <option value='' className='option'>
              color
            </option>
            <option value='white' className='option'>
              white
            </option>
            <option value='black' className='option'>
              black
            </option>
            <option value='red' className='option'>
              red
            </option>
            <option value='yellow' className='option'>
              yellow
            </option>
            <option value='green' className='option'>
              green
            </option>
          </select>
          <select name='size' className='select' defaultValue={"DEFAULT"} onChange={handleFilter}>
            <option value='' className='option'>
              Size
            </option>
            <option value='XS' className='option'>
              XS
            </option>
            <option value='S' className='option'>
              S
            </option>
            <option value='M' className='option'>
              M
            </option>
            <option value='L' className='option'>
              L
            </option>
            <option value='XL' className='option'>
              XL
            </option>
          </select>
        </div>
        <div className='filter'>
          <span className='filterText'>Sort Products</span>
          <select
            className='select'
            defaultValue={"newest"}
            onChange={(e) => {
              setSort(e.target.value);
            }}>
            <option value={"newest"} disabled hidden className='option'>
              Newest
            </option>
            <option value={"newest"} className='option'>
              Newest
            </option>
            <option value={"asc"} className='option'>
              Price(asc)
            </option>
            <option value={"desc"} className='option'>
              Price(desc)
            </option>
          </select>
        </div>
      </div>
      <Products cat={cat} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
