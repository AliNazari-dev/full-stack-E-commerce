import Announcement from "../../components/announcement/Announcement";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import NewsLetter from "../../components/newsLetter/NewsLetter";
import Footer from "../../components/footer/Footer";

import "./productList.scss";

const ProductList = () => {
  return (
    <div className='container'>
      <Navbar />
      <Announcement />
      <h1 className='title'>Dresess</h1>
      <div className='filterContainer'>
        <div className='filter'>
          <span className='filterText'>Filter Products</span>
          <select name='' id='' className='select'>
            <option value='' disabled selected className='option'>
              Color
            </option>
            <option value='White' className='option'>
              White
            </option>
            <option value='Black' className='option'>
              Black
            </option>
            <option value='Red' className='option'>
              Red
            </option>
            <option value='Yellow' className='option'>
              Yellow
            </option>
            <option value='Green' className='option'>
              Green
            </option>
          </select>
          <select name='' id='' className='select'>
            <option value='' disabled selected className='option'>
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
          <select name='' id='' className='select'>
            <option value='Newest' selected className='option'>
              Newest
            </option>
            <option value='' className='option'>
              Price (asc)
            </option>
            <option value='' className='option'>
            Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductList;
